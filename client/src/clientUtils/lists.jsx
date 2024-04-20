import {
  IoChatbubbleEllipsesOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

export const NavbarList = {
  home: {
    en: "home",
    fr: "Accueil",
    icon: <AiOutlineHome />,
  },
  cart: {
    en: "Cart",
    fr: "Panier",
    icon: <BsCart3 />,
    link: "/cart",
    cartLenght: true,
  },
  Contact: {
    en: "Messages",
    fr: "Messages",
    icon: <IoChatbubbleEllipsesOutline />,
    link: "https://wa.me/260773416630",
  },
  signIn: {
    en: "Sign in",
    fr: "se connecter",
    icon: <IoPersonOutline />,
    link: "/signin",
  },
  SignUp: {
    en: "Register",
    fr: "s'inscrire",
    link: "/register",
  },
};
export const ButtomNavList = [
  {
    en: "home",
    fr: "Accueil",
    icon: <AiOutlineHome />,
    link: "/",
  },
  {
    en: "Cart",
    fr: "Panier",
    icon: <BsCart3 />,
    link: "/cart",
    cartLenght: true,
  },
  {
    en: "Messages",
    fr: "Messages",
    icon: <IoChatbubbleEllipsesOutline />,
    link: "https://wa.me/260773416630",
  },
];

export const setting = {
  settings: {
    en: "settings",
    fr: "paramètres",
    icon: <IoSettingsOutline />,
  },
  acount: {
    en: "Profile",
    fr: "profil",
    icon: <IoPersonOutline />,
    link: "/signin",
  },
};
export const buttons = {
  order: {
    en: "Order Now",
    fr: "Commande",
  },
  chat: {
    en: "Chat",
    fr: "Discuter",
  },
  addtocart: {
    en: "Add To Cart",
    fr: "Ajouter au panier",
  },
};

export const keywords = {
  location: {
    en: "Location",
    fr: "Emplacement",
  },
  country: {
    en: "Country",
    fr: "Pays",
  },
  city: {
    en: "City",
    fr: "ville",
  },
  atributes: {
    en: "Key Attributes",
    fr: "Attributs Clés",
  },
  recomendation: {
    en: "Other Recomendations for you",
    fr: "Autres recommandations pour vous",
  },
  placehold: {
    en: "search for anything",
    fr: "recherchez n'importe quoi",
  },
  newArival: {
    en: "New Arrival",
    fr: "Nouvelle Arrivée",
  },
  forU: {
    en: "Just For You",
    fr: "Juste Pour Vous",
  },
  topProducts: {
    en: "Top Products",
    fr: "meilleurs produits",
  },
  category: {
    en: "all Categories",
    fr: "Toutes les catégories",
  },
  supplier: {
    en: "become a supplier",
    fr: "Devenir fournisseur",
  },
  quotaion: {
    en: "Request Quotaion",
    fr: "Demander un devis",
  },
  adressLocation: {
    en: "Please enter country or city for better search",
    fr: "S'il vous plaît, entrez le pays ou la ville pour une meilleure recherche.",
  },
};

export const invoiceWords = {
  invoice: {
    en: "invoice",
    fr: "facture",
  },
  download: {
    en: "download",
    fr: "téléchargement",
  },
  downloadText: {
    en: "Click download button to download the invoice paper",
    fr: "Cliquez sur le bouton de téléchargement pour télécharger la facture.",
  },
  thanks: {
    en: "Thank You!",
    fr: "Merci!",
  },
  payment: {
    en: "Payment Information",
    fr: "Informations de paiement",
  },
  items: {
    en: "Items",
    fr: "Produits",
  },
  quantity: {
    en: "Quantity",
    fr: "Quantité",
  },
  price: {
    en: "Unit Price",
    fr: "Prix unitaire",
  },
};
