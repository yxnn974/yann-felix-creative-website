import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
        <img
          src="/lovable-uploads/c41845dc-caef-4e8f-9e72-c644b0d3f241.png"
          alt="IUT de La Réunion"
          className="max-w-[300px] h-auto"
        />
        <img
          src="/lovable-uploads/1668b841-5164-4759-815b-1dff29b3892b.png"
          alt="IUT Réseaux et Télécoms"
          className="max-w-[300px] h-auto"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Index;