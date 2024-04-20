import { TbBottleFilled } from "react-icons/tb";
import { BsTruckFlatbed } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";
import { GiFertilizerBag } from "react-icons/gi";
import { GiFlour } from "react-icons/gi";
import { GiMilkCarton } from "react-icons/gi";
import { SiCakephp } from "react-icons/si";
import { FaSoap } from "react-icons/fa6";

export const data = [
  {
    title: { en: "food & Beverage", fr: "Aliments & Boissons" },
    subcatagory: [
      { en: "Plant & Animal Oil", fr: "Huiles végétales & animales" },
      { en: "Drinks", fr: "Boissons" },
      { en: "Dairy Products", fr: "Produits laitiers" },
      { en: "Nuts & Kernels", fr: "Noix & graines" },
      { en: "Seafood", fr: "Fruits de mer" },
      { en: "Canned Food", fr: "Aliments en conserve" },
      { en: "Baked Goods", fr: "Produits de boulangerie" },
      { en: "Meat & Poultry", fr: "Viande & volaille" },
      { en: "Confectionery", fr: "Confiserie" },
      { en: "Grain Products", fr: "Produits céréaliers" },
      { en: "Fruit & Vegetable Products", fr: "Produits de fruits & légumes" },
    ],
  },
  {
    title: { en: "vehicles & accessories", fr: "Véhicules & accessoires" },
    subcatagory: [
      { en: "Trucks", fr: "Camions" },
      { en: "Trailers", fr: "Remorques" },
      { en: "Cars", fr: "Voitures" },
      { en: "Bus", fr: "Autobus" },
      { en: "MotorBikes", fr: "Motos" },
      { en: "Bikes", fr: "Vélos" },
    ],
  },
  {
    title: { en: "electronics", fr: "Électronique" },
    subcatagory: [
      { en: "headSets", fr: "Casques audio" },
      { en: "Mobile Phones", fr: "Téléphones portables" },
      { en: "Laptops", fr: "Ordinateurs portables" },
      { en: "Tv Screen", fr: "Écran de télévision" },
    ],
  },
  {
    title: { en: "home & Furnitures", fr: "Maison & Meubles" },
    subcatagory: [
      { en: "sofas", fr: "canapés" },
      { en: "tables", fr: "tables" },
      { en: "Chairs", fr: "chaises" },
      { en: "Beds", fr: "lits" },
      { en: "mattresses", fr: "matelas" },
      { en: "wardrobes", fr: "armoires" },
      { en: "Chairs", fr: "chaises" },
      { en: "mugs", fr: "tasses" },
    ],
  },
  {
    title: { en: "agriculture", fr: "agriculture" },
    subcatagory: [
      { en: "chicken", fr: "poulet" },
      { en: "eggs", fr: "œufs" },
      { en: "maize", fr: "maïs" },
      { en: "Onions", fr: "oignons" },
      { en: "tomatoes", fr: "tomates" },
      { en: "garlic", fr: "ail" },
    ],
  },
  {
    title: { en: "Fashion & Beuty", fr: "Mode & Beauté" },
    subcatagory: [
      { en: "Man shoes", fr: "Chaussures pour hommes" },
      { en: "Women shoes", fr: "Chaussures pour femmes" },
      { en: "Man clothes", fr: "Vêtements pour hommes" },
      { en: "Woman clothes", fr: "Vêtements pour femmes" },
      { en: "Kids clothes", fr: "Vêtements pour enfants" },
      { en: "Bags", fr: "Sacs" },
      { en: "Luggage", fr: "Bagages" },
      { en: "Cases", fr: "Étuis" },
      { en: "Kids clothes", fr: "Vêtements pour enfants" },
      { en: "Beauty", fr: "Beauté" },
      { en: "Jewelry", fr: "Bijoux" },
      { en: "Watches", fr: "Montres" },
      { en: "Glasses", fr: "Lunettes" },
      { en: "Perfumes", fr: "Parfums" },
    ],
  },
  {
    title: { en: "RealState", fr: "Immobilier" },
    subcatagory: [
      { en: "buy land", fr: "acheter un terrain" },
      { en: "rent land", fr: "louer un terrain" },
      { en: "buy house", fr: "acheter une maison" },
      { en: "rent house", fr: "louer une maison" },
    ],
  },

  {
    title: { en: "construction material", fr: "Matériaux de construction" },
    subcatagory: [
      { en: "Steels", fr: "Aciers" },
      { en: "Tiles", fr: "Tuiles" },
      { en: "Roofs", fr: "Toitures" },
      { en: "Woods", fr: "Bois" },
      { en: "Doors", fr: "Portes" },
      { en: "Windows", fr: "Fenêtres" },
    ],
  },
];

export const subcategories = [
  { en: "drinks", fr: "boissons", icon: <TbBottleFilled /> },
  { en: "trucks", fr: "camions", icon: <BsTruckFlatbed /> },
  { en: "fertlizer", fr: "fertilisant", icon: <GiFertilizerBag /> },
  { en: "cars", fr: "voitures", icon: <IoCarSportOutline /> },
  { en: "dairy", fr: "laiterie", icon: <GiMilkCarton /> },
  { en: "food", fr: "alimentation", icon: <GiFlour /> },
  { en: "buscuits", fr: "buscuits", icon: <SiCakephp /> },
  { en: "boom", fr: "boom", icon: <FaSoap /> },
];
