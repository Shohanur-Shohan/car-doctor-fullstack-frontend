import About from "../../components/Home/About/About";
import Contact from "../../components/Home/Contact/Contact";
import Hero from "../../components/Home/Hero/Hero";
import Service from "../../components/Home/Service/Service";
import Newsletter from "../../components/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Contact />
      <Newsletter />
    </main>
  );
};

export default Home;
