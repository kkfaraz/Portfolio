import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CoreMLSystems from "@/components/CoreMLSystems";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import GitHub from "@/components/GitHub";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <CoreMLSystems />
      <Experience />
      <Services />
      <Skills />
      <GitHub />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
