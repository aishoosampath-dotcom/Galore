import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedTools from "@/components/FeaturedTools";
import ToolGrid from "@/components/ToolGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeaturedTools />
      <ToolGrid />
      <Footer />
    </main>
  );
}
