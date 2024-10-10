import JagerNav from "./components/JagerNav";
import LandingPageAbout from "./components/LandingPageAbout";
import LandingPageService from "./components/LandingPageService";
import FeaturedNews from "./components/FeaturedNews";
import JagerFooter from "./components/JagerFooter";
import Slider from "./components/Slider";
import JagerHero from "./components/JagerHero";
import ClientList from "./components/ClientList";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
function JagerHome() {
  const lenis = useLenis(({ scroll }) => {});
  const navRefs = [];
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if(aboutRef.current) navRefs.push(aboutRef.current)
    if(servicesRef.current) navRefs.push(servicesRef.current)
    if(projectsRef.current) navRefs.push(projectsRef.current)
    if(contactRef.current) navRefs.push(contactRef.current)  
  }, [aboutRef.current, servicesRef.current, projectsRef.current, contactRef.current])

  return (
    <ReactLenis root>
      <div className="w-full mx-auto bg-gray-200 font-[Poppins]">
        <JagerNav navRefs={navRefs}/>
        <JagerHero />
        <LandingPageAbout ref={aboutRef} />
        <LandingPageService ref={servicesRef} />
        <ClientList />
        <Slider ref={projectsRef}/>
        <FeaturedNews />
        <JagerFooter ref={contactRef} navRefs={navRefs}/>
      </div>
    </ReactLenis>
  );
}

export default JagerHome;
