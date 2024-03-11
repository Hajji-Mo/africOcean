import io from "socket.io-client"; // Add this
import { SERVER_URL } from "../utils/consfig";

let socket;
const BASE_URL = SERVER_URL;
const connectSocket = (userId) => {
  socket = io(BASE_URL, {
    query: `user_id=${userId}`,
  });
}; // Add this -- our server will run on port 4000, so we connect to it from here

export { socket, connectSocket };
