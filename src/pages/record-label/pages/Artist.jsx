import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import artists from "../data/artists";
import styles from "../style.module.css";

function Artist() {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  const hero = useRef(null);
  const header = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentArtist, setCurrentArtist] = useState({});
  const { contextSafe } = useGSAP({ scope: container });
  const [isSwitching, setIsSwitching] = useState(false);
  const defaultEase = "power4.inOut";
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      parseInt(id) > artists.length ||
      parseInt(id) <= 0 ||
      isNaN(parseInt(id))
    ) {
      return navigate("/record-label/notfound");
    }
    if (artists) {
      setCurrentArtist(artists[parseInt(id) - 1]);
    }
  }, [id]);

  const initializeHero = contextSafe(() => {
    if (hero.current && header.current && isSwitching === false) {
      gsap.set(hero.current, { yPercent: 100, opacity: 0 });
      gsap.set(header.current, { y: 40, opacity: 0 });
      gsap.to(hero.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        delay: 0.1,
        ease: "power3.inOut",
      });
      gsap.to(header.current, {
        y: 0,
        opacity: 1,
        duration: 1.25,
        delay: 0.2,
        ease: "power3.inOut",
      });

      if (isSwitching === false) {
        gsap.set(["#logo", "#menu-open", "#next", "#prev"], { opacity: 0 });
        gsap.to(["#logo", "#menu-open", "#next", "#prev"], {
          opacity: 1,
          duration: 1,
          delay: 0.55,
          stagger: 0.15,
          ease: "power3.inOut",
        });
      }
    }
    if (container.current !== null) {
      gsap.set(".menu-link p", { x: 80, opacity: 0 });
      gsap.set(".menu-sub-item p", { x: 60, opacity: 0 });
      gsap.set(["#img-2", "#img-3", "#img-4"], { top: "150%" });
      gsap.set(["#menu-logo", "#menu-close"], {
        opacity: 0,
      });
    }
  });

  const handleRedirect = contextSafe(() => {
    gsap.to(header.current, {
      y: 0,
      opacity: 0,
      duration: 1.25,
      ease: "power3.inOut",
    });
    gsap.to(hero.current, {
      yPercent: 100,
      opacity: 0,
      duration: 0.85,
      delay: 0.25,
      ease: "power3.inOut",
    });
    gsap.to(["#logo", "#menu-open", "#next", "#prev"], {
      opacity: 0,
      duration: 1,
      delay: 0.4,
      stagger: 0.15,
      ease: "power3.inOut",
      onComplete: () => {
        navigate("/livedemo/record-label");
      },
    });
  });

  const handleNext = contextSafe(() => {
    if (parseInt(id) < artists.length) {
      gsap.to(hero.current, {
        opacity: 0,
        yPercent: -100,
        duration: 0.75,
        ease: "power3.inOut",
        onComplete: () => {
          navigate(`/livedemo/record-label/artist/${parseInt(id) + 1}`);
          setIsSwitching(true);
          gsap.set(hero.current, { yPercent: 100, opacity: 0 });
          gsap.set(header.current, { y: 40, opacity: 0 });
          gsap.to(hero.current, {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            delay: 0.15,
            ease: "power3.inOut",
          });
          gsap.to(header.current, {
            y: 0,
            opacity: 1,
            duration: 1.25,
            delay: 0.25,
            ease: "power3.inOut",
          });
        },
      });
    }
    return;
  });
  const handlePrev = contextSafe(() => {
    if (parseInt(id) > 1) {
      gsap.to(hero.current, {
        opacity: 0,
        yPercent: 100,
        duration: 0.75,
        ease: "power3.inOut",
        onComplete: () => {
          navigate(`/livedemo/record-label/artist/${parseInt(id) - 1}`);
          setIsSwitching(true);
          gsap.set(hero.current, { yPercent: -100, opacity: 0 });
          gsap.set(header.current, { y: 40, opacity: 0 });
          gsap.to(hero.current, {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            delay: 0.15,
            ease: "power3.inOut",
          });
          gsap.to(header.current, {
            y: 0,
            opacity: 1,
            duration: 1.25,
            delay: 0.25,
            ease: "power3.inOut",
          });
        },
      });
    }
    return;
  });

  const openMenu = contextSafe(() => {
    if (isMenuOpen) return;
    gsap.to("#menu-open", {
      opacity: 0,
      y: "-100px",
      duration: 0.75,
      ease: defaultEase,
    });
    gsap.to("#menu", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      pointerEvents: "all",
      duration: 1.25,
      ease: defaultEase,
    });
    gsap.to(hero.current, {
      top: "-50%",
      opacity: 0,
      duration: 1.25,
      ease: defaultEase,
    });
    gsap.to(["#menu-logo", "#menu-close"], {
      opacity: 1,
      duration: 1.5,
      delay: 0.25,
      stagger: 0.1,
      ease: defaultEase,
    });
    gsap.to(".menu-link p", {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      delay: 0.25,
      ease: "power3.out",
    });
    gsap.to(".menu-sub-item p", {
      x: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.05,
      delay: 0.15,
      ease: "power3.out",
    });
    gsap.to(["#img-2", "#img-3", "#img-4"], {
      top: "0%",
      duration: 1.75,
      ease: defaultEase,
      stagger: 0.05,
      delay: 0.05,
      onComplete: () => {
        gsap.set(hero.current, {
          top: "50%",
        });
        gsap.set("#menu-open", {
          opacity: 1,
          y: 0,
        });
        setIsMenuOpen(!isMenuOpen);
      },
    });
  });
  const closeMenu = contextSafe(() => {
    if (isMenuOpen == false) return;
    gsap.to("#menu", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      pointerEvents: "none",
      duration: 1.25,
      ease: defaultEase,
    });
    gsap.to(".menu-items", {
      top: "-300px",
      opacity: 0,
      duration: 1.25,
      ease: defaultEase,
    });
    gsap.to(hero.current, {
      top: "0%",
      opacity: 1,
      duration: 1.25,
      ease: defaultEase,
      onComplete: () => {
        gsap.to("#menu", {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.set(".menu-link p", { x: 80, opacity: 0 });
        gsap.set(".menu-sub-item p", { x: 60, opacity: 0 });
        gsap.set(".menu-items", {
          opacity: 1,
          top: "0px",
        });
        gsap.set(["#img-2", "#img-3", "#img-4"], { top: "150%" });
        gsap.set(["#menu-logo", "#menu-close"], {
          opacity: 0,
        });
        setIsMenuOpen(!isMenuOpen);
      },
    });
  });

  if (artists && currentArtist.id !== undefined)
    return (
      <>
        <div
          onLoad={initializeHero}
          className={`${styles["rc-container"]} ${styles.artist}`}
          ref={container}
        >
          <nav className={styles["rc-nav"]}>
            <div onClick={handleRedirect} className={styles.logo} id="logo">
              <h1>Young-</h1>
            </div>
            <p onClick={openMenu} className={styles["menu-open"]} id="menu-open">
              Menu
            </p>
          </nav>
          <section
            style={{
              backgroundImage: `url("/images/${currentArtist.photos[0]}")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%",
              backgroundSize: "cover",
            }}
            ref={hero}
            className={styles.hero}
          >
            <div className={styles.header}>
              <h1 ref={header}>{currentArtist.name}</h1>
            </div>
            <div className={styles.overlay}></div>
          </section>
          <div className={styles["slider-nav"]}>
            <div onClick={handlePrev} className={styles.prev} id="prev">
              Prev
            </div>
            <div onClick={handleNext} className={styles.next} id="next">
              Next
            </div>
          </div>
          <div className={styles.menu} id="menu">
            <div className={styles["menu-nav"]}></div>
            <div className={`${styles["menu-col"]} ${styles["menu-img"]}`}>
              <img
                src={`/images/${currentArtist.photos[1]}`}
                alt=""
                id="img-1"
              />
              <img
                src={`/images/${currentArtist.photos[1]}`}
                alt=""
                id="img-2"
              />
              <img
                src={`/images/${currentArtist.photos[1]}`}
                alt=""
                id="img-3"
              />
              <img
                src={`/images/${currentArtist.photos[1]}`}
                alt=""
                id="img-4"
              />
            </div>
            <div className={`${styles["menu-col"]} ${styles["menu-items"]} menu-items`}>
              <div className={styles["menu-top-nav"]}>
                <div className={styles["menu-logo"]} id="menu-logo">
                  <h1>{currentArtist.name}</h1>
                </div>
                <p onClick={closeMenu} className={styles["menu-close"]} id="menu-close">
                  Close
                </p>
              </div>
              <div className={styles["menu-links"]}>
                <div className={`${styles["menu-link"]} menu-link`}>
                  <p>
                    <a href="#">About</a>
                  </p>
                </div>
                <div className={`${styles["menu-link"]} menu-link`}>
                  <p>
                    <a href="#">Tours</a>
                  </p>
                </div>
                <div className={`${styles["menu-link"]} menu-link`}>
                  <p>
                    <a href="#">Merchs</a>
                  </p>
                </div>
                <div className={`${styles["menu-link"]} menu-link`}>
                  <p>
                    <a href="#">Releases</a>
                  </p>
                </div>
              </div>
              <div className={styles["menu-footer"]}>
                <div className={styles["menu-sub-col"]}>
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Follow</p>
                  </div>
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Young -</p>
                  </div>
                  <br />
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Instagram</p>
                  </div>
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Youtube</p>
                  </div>
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Spotify</p>
                  </div>
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Mixcloud</p>
                  </div>
                  <br />
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Explore</p>
                  </div>
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Our Shop</p>
                  </div>
                </div>
                <div className={styles["menu-sub-col"]}>
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Contact Us</p>
                  </div>
                  <br />
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>17-19 Alma Road</p>
                  </div>
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>London</p>
                  </div>
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>SW18 1AA</p>
                  </div>
                  <br />
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Email</p>
                  </div>
                  <br />
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>Phone</p>
                  </div>
                  <div className={`${styles["menu-sub-item"]} menu-sub-item`}>
                    <p>+44 (0) 20 8870 9912</p>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Artist;
