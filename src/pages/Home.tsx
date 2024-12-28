import { ProductSlider } from "../components/Product/Product";
import "./Home.css";
import product_1 from "../assets/images/image_product_1.png";
import product_2 from "../assets/images/image_product_2.png"; // Add more product images as needed
import Header from "../components/Header/Header";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";

import icon_1 from "../assets/images/icon-1.png";
import icon_2 from "../assets/images/icon-2.png";
import icon_3 from "../assets/images/icon-3.png";
import { ExpertiseSlider } from "../components/Expertise/Expertise";
import Contact from "../components/Contact/Contact";

const Home: React.FC = () => {
  const products = [
    {
      image: product_1,
      name: "Wira Wiri Indonesia",
      description:
        "Wirawiri adalah wadah untuk membantu keseharian Anda,melayani jasa pengiriman Makanan,Barang & Penjemputan",
    },
    {
      image: product_2,
      name: "Pertemanan Sejiwa",
      description:
        "Pertemanan Sejiwa adalah platform digital berbasis informasi dan konsultasi. Platform ini berfokus pada keilmuwan psikologi.",
    },
  ];

  const expertise = [
    {
      image: icon_1,
      color: "white",
      name: "Consultant",
      description: "Gives suggestion to client  for their software",
    },
    {
      image: icon_2,
      color: "blue",
      name: "Solusion",
      description:
        "Build a high quality solution based on software or hardware by user needs",
    },
    {
      image: icon_3,
      color: "white",
      name: "Scalability",
      description: "Ensures your software can grow with your needs",
    },
  ];

  return (
    <div className="home" id="home">
      <Header />

      <ExpertiseSlider expertise={expertise} />
      <Experience />
      <ProductSlider products={products} />

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
