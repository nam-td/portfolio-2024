import React, {
  useEffect,
  useMemo,
  useRef,
  memo,
} from "react";
import MasonryGrid from "../components/MasonryGrid";
import HeroSection from "../components/HeroSection";
import CounterBlock from "../components/CounterBlock";
import About from "../components/About";
import ClientList from "../components/ClientList";
import Strengths from "../components/Strengths";
import Service from "../components/Services";
import Contact from "../components/Contact";
const images = [];

const imagePaths = [
  "/apexx/12_Curate_Developments-1326_Pandora_Ave_Exterior_21.07.28.jpg",
  "/apexx/6633A43A-49A4-4BB8-8372-8657EAC5D084.jpg",
  "/apexx/Bobak_Studio_Curate_1326_Pandora_v_2.0.jpg",
  "/apexx/Bobak_Studio_Nova_Oselya_Safe_Town_Residential.jpg",
  "/apexx/bobak_studio_office_building_In_uk_Maguire_and_co.jpg",
  "/apexx/Bobak_Studio_Powerhouse_Lead_cam_1.jpg",
  "/apexx/Bobak_Studio_Powerhouse_Lead_cam_3.jpg",
  "/apexx/Bobak_Studio_Powerhouse_Lead_cam_4.jpg",
  "/apexx/Bobak_Studio+AEMSEN-Urbanivy_POV_+(1).jpg",
  "/apexx/Bobak_Studio+AEMSEN-Urbanivy_POV_+(2).jpg",
  "/apexx/Bobak_Studio+AEMSEN-Urbanivy_POV_+(3).jpg",
  "/apexx/Bobak_Studio+Arrow_Architects_The_Pine+(1).jpg",
  "/apexx/Bobak_Studio+Arrow_Architects_The_Pine+(2).jpg",
  "/apexx/Bobak_Studio+Arrow_Architects_The_Pine+(3).jpg",
  "/apexx/Bobak_Studio+Arrow_Architects_The_Pine+(4).jpg",
  "/apexx/Bobak_Studio+Nebrau_Concrete_House_Kaunas+(1).jpg",
  "/apexx/Bobak_Studio+Nebrau_Concrete_House_Kaunas+(2).jpg",
  "/apexx/Bobak_Studio+Nebrau_Concrete_House_Kaunas+(3).jpg",
  "/apexx/Bobak_Studio+NO_Lypovy_Rosy_Lviv+(1).jpg",
  "/apexx/Bobak_Studio+NO_Lypovy_Rosy_Lviv+(2).jpg",
  "/apexx/Bobak_Studio+NO_Lypovy_Rosy_Lviv+(3).jpg",
  "/apexx/Bobak_Studio+NO_Lypovy_Rosy_Lviv+(4).jpg",
  "/apexx/Bobak_Studio+NO_Lypovy_Rosy_Lviv+(5).jpg",
  "/apexx/Bobak_Studio+NO_Lypovy_Rosy_Lviv+(6).jpg",
  "/apexx/bobak_Studio+nova_osalya_safe_town_lviv_ukraine_+(1).jpg",
  "/apexx/bobak_Studio+nova_osalya_safe_town_lviv_ukraine_+(2).jpg",
  "/apexx/bobak_Studio+nova_osalya_safe_town_lviv_ukraine_+(3).jpg",
  "/apexx/bobak_Studio+nova_osalya_safe_town_lviv_ukraine_+(6).jpg",
  "/apexx/bobak_Studio+nova_osalya_safe_town_lviv_ukraine_+(7).jpg",
  "/apexx/Bobak_Studio+Vessel_Office_The_Black_Forest_House_pov-1.jpg",
  "/apexx/Bobak_Studio+Vessel_Office_The_Black_Forest_House_pov-2.jpg",
  "/apexx/Bobak_Studio+Vessel_Office_The_Black_Forest_House_pov-3.jpg",
  "/apexx/Bobak_Studio+Vessel_Office_The_Black_Forest_House_pov-4.jpg",
  "/apexx/Bobak_Studio+Vessel_Office_The_Black_Forest_House_pov-5.jpg",
  "/apexx/BY_Visuals_T-House_Bathroom_Ukraine_2018-min.jpg",
  "/apexx/BY_Visuals_T-House_Bedroom_Ukraine_2018_1-min.jpg",
  "/apexx/BY_Visuals_T-House_Livingroom_Ukraine_2018_1-min.jpg",
  "/apexx/BY_Visuals_T-House_Livingroom_Ukraine_2018_2-min.jpg",
  "/apexx/BYVisuals_Manhattan_Apartment_NY_2019_cam_01.jpg",
  "/apexx/BYVisuals_Manhattan_Apartment_NY_2019_cam_02.jpg",
  "/apexx/BYVisuals_Manhattan_Apartment_NY_2019_cam_03.jpg",
  "/apexx/BYVisuals_Manhattan_Apartment_NY_2019_cam_04.jpg",
  "/apexx/BYVisuals_Manhattan_Apartment_NY_2019_cam_05.jpg",
  "/apexx/BYVisuals_residential_building_switzerland_2018__2_.jpg",
  "/apexx/BYVisuals_residential_building_switzerland_2018__4_.jpg",
  "/apexx/BYVisuals_residential_building_switzerland_2018__5_.jpg",
  "/apexx/BYVisuals_residential_building_switzerland_2018__8_.jpg",
  "/apexx/BYVisuals_residential_building_switzerland_2018__9_.jpg",
  "/apexx/BYVisuals_Studio_BOX_House_UK.jpg",
  "/apexx/BYVisuals_Studio_British_House_04_UK.jpg",
  "/apexx/BYVisuals_studio_Powerhouse_Company_Donaumarina_Tower_cam_3.jpg",
  "/apexx/BYVisuals_studio_visualization_winter_in_brussels_belgium_01.jpg",
  "/apexx/BYVisuals_studio_visualization_winter_in_brussels_belgium_02.jpg",
  "/apexx/BYVisuals_Swiss_Duplex_cam+_06.jpg",
  "/apexx/byvisuals_switzerland.jpg",
  "/apexx/BYVisuals_Utopia_Ekmansgatan.jpg",
  "/apexx/cam_01_final.jpg",
  "/apexx/cam_03_final.jpg",
  "/apexx/cam_04_final.jpg",
  "/apexx/Curater_Development_Bobak_Studio1326_Pandora_Final_POV-1.jpg",
  "/apexx/Curater_Development_Bobak_Studio1326_Pandora_Final_POV-2.jpg",
  "/apexx/Curater_Development_Bobak_Studio1326_Pandora_Final_POV-3.jpg",
  "/apexx/d7cb0069246493.5b7a925da0b88.jpg",
  "/apexx/Fabric+Bobak_Studio_Fold_Winter_Mood.jpg",
  "/apexx/image-asset.jpg",
  "/apexx/image-asset(1).jpg",
  "/apexx/Kolarski+Bobak_Chodo_Luxury_Interior_Livingroom.jpg",
  "/apexx/Luxury_Swedish_Villa_Exterior.jpg",
  "/apexx/Luxury_Swedish_Villa_Livingroom.jpg",
  "/apexx/NO_Bobak_Sadova_Safe_Town_3.0_cam-1_2K.jpg",
  "/apexx/NO_Bobak_Sadova_Safe_Town_3.0_cam-2.jpg",
  "/apexx/NO_Bobak_Sadova_Safe_Town_3.0_cam-4.jpg",
  "/apexx/NO_Sadova_Safe_Town_cam-3.jpg",
  "/apexx/NO_Sadova_Safe_Town_cam-5.jpg",
  "/apexx/pov-1.jpg",
  "/apexx/scandinavian_bedroom_02_2K.jpg",
];

const Home = () => {
  let columns = 2;
  const changeColumns = useMemo(() => adjustColumns(), [window.innerWidth]);
  const effectRan = useRef(false);
  const smoothWrapper = useRef();
  const smoothContent = useRef();
  function adjustColumns() {
    if (window.innerWidth > 0) {
      columns = 2;
    }
    if (window.innerWidth >= 600) {
      columns = 3;
    }
    if (window.innerWidth >= 1000) {
      columns = 4;
    }
  }

  useEffect(() => {
    if (effectRan.current === false) {
      const createImageObjects = () => {
        imagePaths.forEach((image, index) => {
          images.push({
            id: index,
            path: image,
          });
        });
      };
      createImageObjects();
    }

    window.addEventListener("resize", adjustColumns);

    {
      changeColumns;
    }

    return () => {
      window.addEventListener("resize", adjustColumns);
      effectRan.current = true;
    };
  }, []);

  return (
    <>
      <HeroSection />
      <CounterBlock />
      <Strengths />
      <Service />
      <About />
      <ClientList />
      <MasonryGrid columns={columns} data={images} />
      <Contact />
    </>
  );
};

export default memo(Home);
