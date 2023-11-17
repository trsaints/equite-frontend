import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import WomenSection from "../WomenSection/WomenSection";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function App() {
  const mainLinks = [
    {
      name: "Início",
      url: "#",
      id: 0,
    },
    {
      name: "Quem somos",
      url: "#about",
      id: 1,
    },
    {
      name: "Grandes mulheres",
      url: "#great-women",
      id: 2,
    },
    {
      name: "Fale conosco",
      url: "#contact",
      id: 3,
    },
  ];

  return (
    <main>
      <Navbar links={mainLinks} />
      <Hero />
      <About />
      <WomenSection />
      <Contact />
      <Footer />

      <a href="#"><span className="sr-only">Voltar ao topo</span></a>
    </main>
  );
}

export default App;
