import artists from "../data/artists";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style.module.css";
export default function RecordLabelHome() {
  const container = useRef(null);
  const menu = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });
  const navigate = useNavigate();

  const initializeHomepage = contextSafe(() => {
    if (container.current !== null) {
      gsap.set("#homepage-menu li", {
        opacity: 0,
        x: 500,
        pointerEvents: "none",
      });
      gsap.set(["#logo", "#footer-left", "#footer-right li"], { opacity: 0 });
    }
    if (menu.current) {
      gsap.to("#homepage-menu li", {
        opacity: 1,
        x: 0,
        pointerEvents: "auto",
        duration: 0.75,
        stagger: 0.15,
        delay: 0.25,
        ease: "power3.inOut",
      });
      gsap.to(["#logo", "#footer-left", "#footer-right li"], {
        opacity: 1,
        duration: 1.75,
        stagger: 0.1,
        ease: "power3.inOut",
      });
    }
  });
  const goToArtistPage = contextSafe((e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    gsap.to(["#logo", "#footer-left", "#footer-right li"], {
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power3.inOut",
    });
    gsap.to("#homepage-menu li", {
      opacity: 0,
      y: 225,
      duration: 0.75,
      stagger: 0.15,
      ease: "power4.inOut",
      onComplete: () => {
        navigate(`./artist/${id}`);
      },
    });
  });

  const menuItemEnter = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      width: "70vw",
      duration: 0.25,
      ease: "power4.inOut",
    });
  });
  const menuItemLeave = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      width: 280,
      duration: 0.25,
      ease: "power2.inOut",
    });
  });
  useGSAP(
    () => {
      initializeHomepage();
    },
    { scope: container }
  );

  if (artists)
    return (
      <div ref={container} className={`${styles.homepage} ${styles["rc-container"]}`}>
        <nav className={styles["rc-nav"]}>
          <div className={styles.logo} id="logo">
            <h1>Young-</h1>
          </div>
        </nav>
        <ul ref={menu} className={styles["homepage-menu"]} id="homepage-menu">
          {artists.map((artist) => (
            <li
              onMouseEnter={menuItemEnter}
              onMouseLeave={menuItemLeave}
              key={artist.id}
            >
              <a
                onClick={(e) => {
                  goToArtistPage(e);
                }}
                id={artist.id}
                href={`record-label/artist/${artist.id}`}
              >
                <div
                  style={{
                    backgroundImage: `url(/images/banner-${artist.id}.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50% 50%",
                    backgroundSize: "cover",
                  }}
                  className={styles["menu-item-bg"]}
                ></div>
                <p className={styles.name}>{artist.name}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.footer}>
          <div className={styles["footer-left"]} id="footer-left">&copy; 2024 Young Records</div>
          <div className={styles["footer-right"]} id="footer-right">
            <ul>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookies Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
