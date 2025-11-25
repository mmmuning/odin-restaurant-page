import adobongManokImg from "./assets/adobong-manok.jpg";
import sisigImg from "./assets/sisig.jpg";
import kareKareImg from "./assets/kare-kare.jpg";
import chickenInasalImg from "./assets/chicken-inasal.jpg";
import turonImg from "./assets/turon.jpg";
import haloHaloImg from "./assets/halo-halo.jpg";
import lecheFlanImg from "./assets/leche-flan.jpg";
import kakaninImg from "./assets/kakanin.jpg";
import bukoJuiceImg from "./assets/buko-juice.jpg";
import calamansiJuiceImg from "./assets/calamansi-juice.jpg";
import mangoJuiceImg from "./assets/mango-juice.jpg";

const menuList = {
  signatureDishes: [
    {
      name: "Adobong Manok",
      description:
        "Classic soy-vinegar braised chicken with garlic, peppercorns, and bay leaves.",
      price: 220,
      image: adobongManokImg,
    },
    {
      name: "Sisig",
      description:
        "Crispy, sizzling pork cheeks and ears, seasoned with calamansi, onions, and chili — a classic Pinoy favorite.",
      price: 260,
      image: sisigImg,
    },
    {
      name: "Kare-kare",
      description:
        "Creamy peanut stew with oxtail, banana heart, and veggies, served with bagoong.",
      price: 380,
      image: kareKareImg,
    },
    {
      name: "Chicken Inasal",
      description:
        "Bacolod-style grilled chicken marinated in calamansi, lemongrass, and annatto oil.",
      price: 240,
      image: chickenInasalImg,
    },
  ],
  meriendaAndDesserts: [
    {
      name: "Turon",
      description: "Crispy caramelized banana rolls with jackfruit.",
      price: 65,
      image: turonImg,
    },
    {
      name: "Halo-halo",
      description:
        "Colorful shaved ice dessert with sweetened fruits, beans, leche flan, and ube.",
      price: 160,
      image: haloHaloImg,
    },
    {
      name: "Leche Flan",
      description: "Smooth caramel custard — rich, silky, and classic.",
      price: 85,
      image: lecheFlanImg,
    },
    {
      name: "Kakanin",
      description:
        "A variety of traditional Filipino sticky rice treats — sweet, chewy, and comforting.",
      price: 70,
      image: kakaninImg,
    },
  ],
  beverages: [
    {
      name: "Buko Juice",
      description:
        "Refreshing young coconut juice served straight from the shell.",
      price: 90,
      image: bukoJuiceImg,
    },
    {
      name: "Calamansi Juice",
      description:
        "Cold brewed tea with fresh calamansi for a bright, citrusy finish.",
      price: 65,
      image: calamansiJuiceImg,
    },
    {
      name: "Mango Juice",
      description: "Freshly blended sweet Philippine mangoes served chilled.",
      price: 120,
      image: mangoJuiceImg,
    },
  ],
};

export default menuList;
