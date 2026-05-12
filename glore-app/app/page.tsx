import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Offers />
      <Testimonials />
      <Footer />
    </main>
  );
}
