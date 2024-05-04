import About from "../../components/Home/About/About";
import Contact from "../../components/Home/Contact/Contact";
import Hero from "../../components/Home/Hero/Hero";
import Products from "../../components/Home/Products/Products";
import Service from "../../components/Home/Service/Service";
import Team from "../../components/Home/Team/Team";
import WhyUs from "../../components/Home/WhyUs/WhyUs";
import Newsletter from "../../components/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Contact />
      <Products />
      <Team />
      <WhyUs />
      <Newsletter />
    </main>
  );
};

export default Home;
