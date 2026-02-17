import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    // espera a que se pinte el DOM
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      navigate(".", { replace: true, state: null });
    }, 0);
  }, [location.state, navigate]);

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
