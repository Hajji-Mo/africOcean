const mongoose = require("mongoose");

const dotenv = require("dotenv");
const http = require("http");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});
dotenv.config({ path: "./.env" });
const app = require("./App");
const server = http.createServer(app);
const { Server } = require("socket.io");
const User = require("./Model/User");

const MessageModel = require("./Model/Messages");

const io = new Server(server, {
  cors: {
    origin: "http://localhost",
    methods: ["GET", "POST"],
  },
});
const DB = process.env.MONGODB_DATABASE;

mongoose
  .connect(DB)
  .catch((err) => {
    console.log(Error, err.message);
  })
  .then(console.log("DB successfully connected"));

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`your app is running ${port} port`);
});

io.on("connection", async (socket) => {
  const user_id = socket.handshake.query["user_id"];

  if (user_id != null && Boolean(user_id)) {
    try {
      const myuser = await User.findByIdAndUpdate(user_id, {
        socket_id: socket.id,
        status: "Online",
      });
    } catch (e) {
      console.log(e);
    }
  }

  socket.on("get_direct_conversations", async ({ _id }, callback) => {
    const existingConversations = await MessageModel.find({
      participants: { $all: [_id] },
    }).populate("participants", "name photo _id email status");

    // db.books.find({ authors: { $elemMatch: { name: "John Smith" } } })

    callback(existingConversations);
  });

  socket.on("start_conversation", async (data) => {
    // data: {to: from:}

    const { to, from } = data;

    // check if there is any existing conversation

    const existing_conversations = await MessageModel.find({
      participants: { $size: 2, $all: [to, from] },
    }).populate("participants", "name photo _id email status");

    // if no => create a new OneToOneMessage doc & emit event "start_chat" & send conversation details as payload
    if (existing_conversations.length === 0) {
      let new_chat = await MessageModel.create({
        participants: [to, from],
      });

      new_chat = await MessageModel.findById(new_chat).populate(
        "participants",
        "name photo _id email status"
      );

      socket.emit("start_chat", new_chat);
    }
    // if yes => just emit event "start_chat" & send conversation details as payload
    else {
      socket.emit("start_chat", existing_conversations[0]);
    }
  });
  socket.on("get_messages", async (data, callback) => {
    try {
      const { messages } = await MessageModel.findById(
        data.conversation_id
      ).select("messages");
      callback(messages);
    } catch (error) {
      console.log(error);
    }
  });
  // Handle incoming text/link messages
  socket.on("text_message", async (data) => {
    // data: {to, from, text}

    const { message, conversation_id, from, to, type } = data;

    const to_user = await User.findById(to);
    const from_user = await User.findById(from);

    // message => {to, from, type, created_at, text, file}

    const new_message = {
      to: to,
      from: from,
      type: type,
      created_at: Date.now(),
      text: message,
    };

    // fetch MessageModel Doc & push a new message to existing conversation
    const chat = await MessageModel.findById(conversation_id);
    chat.messages.push(new_message);
    // save to db`
    await chat.save({ new: true, validateModifiedOnly: true });

    // emit incoming_message -> to user

    io.to(to_user?.socket_id).emit("new_message", {
      conversation_id,
      message: new_message,
    });

    // emit outgoing_message -> from user
    io.to(from_user?.socket_id).emit("new_message", {
      conversation_id,
      message: new_message,
    });
  });
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
