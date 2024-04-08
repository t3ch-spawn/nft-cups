import loading from "../assets/loader-word.svg";
import platform from "../assets/loader-platform.png";
import pinkfluff from "../assets/pink-fluffy.svg";
import cupFriends from "../assets/cup-friends.svg";
import fluffCup from "../assets/fluff-inCup.svg";
import rainbow from "../assets/Rainbow.svg";
import gsap from "gsap";
import { useEffect } from "react";

function Loader() {
  useEffect(() => {
    gsap.fromTo(
      ".loader-word",
      {
        x: "100%",
        y: "-50%",
      },
      {
        x: "0%",
        y: "-50%",
        duration: 1,
      }
    );

    gsap
      .timeline()
      .fromTo(
        ".platform-container",
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
          onComplete: () => {
            // document
            //   .querySelector(".platform-container")
            //   .classList.add("active");
          },
        }
      )
      .to(".platform-container", {
        y: "-80px",
        duration: 1,
        onStart: () => {
          gsap.to(".loader-word", {
            x: "-300px",
            duration: 1,
          });

          gsap.to(".pink-pluff", {
            scale: 1,
          });
        },
      })
      .to(".platform-container", {
        y: "60px",
        duration: 1,
      })
      .to(".platform-container", {
        y: "-80px",
        duration: 1,
        onStart: () => {
          gsap.to(".background-2", {
            scaleX: 1,
            duration: 1,
          });
          gsap.to(".loader-word", {
            opacity: 0,
          });
        },
      })
      .to(".platform-container", {
        y: "60px",
        duration: 1,
        onStart: () => {
          gsap.to(".cup-friends", {
            scale: 1,
            opacity: 1,
            ease: "elastic.out",
            duration: 2.5,
          });

          gsap.to(".fluff-inCup", {
            y: "-50%",
            opacity: 1,
            ease: "elastic.out",
            duration: 2.5,
          });

          gsap.fromTo(
            ".path",
            {
              opacity: 0,
              clipPath: "ellipse(100% 100% at -90% 100%)",
            },
            {
              opacity: 1,
              clipPath: "ellipse(100% 100% at 50% 50%)",
              duration: 1.5,
              ease: 'power1.out'
            }
          );
        },
      });
  }, []);

  return (
    <>
      <div className="bg-[#99DF96] min-h-[100vh] w-[100%] relative overflow-hidden">
        {/* This is the image for the word 'loading' */}
        <img
          className="loader-word absolute origin-left translate-y-[-50%] scale-[3]  left-[0%] top-[50%]"
          src={loading}
          alt=""
        />

        {/* This is the second background that covers the loader word */}
        <div className="background-2 bg-[#99DF96] origin-left scale-x-0 z-[10] absolute h-[100%] w-[100%]"></div>

        {/* This is the rainbow svg that animates in */}
        <div className="path z-[15] relative">
          <img src={rainbow} alt="" />
        </div>

        {/* This is a container that houses the pink fluff and the platform the fluff sits on */}
        <div className="platform-container absolute w-[100%] z-[40] h-[100%] translate-x-[-50%] translate-y-[-50%]  left-[50%] top-[50%]">
          <img
            src={fluffCup}
            className="fluff-inCup translate-x-[-50%] translate-y-[-150%] opacity-0  left-[49%] top-[20%] absolute z-[40]"
            alt=""
          />

          {/* This is the image of the "cup friends*/}
          <img
            src={cupFriends}
            className="cup-friends translate-x-[-50%] translate-y-[-50%] opacity-0 scale-0  left-[50%] top-[25%] absolute z-[30] max-w-[500px]"
            alt=""
          />

          {/* This is the image of the fluff that is fishing */}
          <img
            className="pink-pluff scale-0 absolute max-w-[400px] translate-x-[-50%] translate-y-[-50%] z-[20] left-[38%] top-[50%]"
            src={pinkfluff}
            alt=""
          />

          {/* This is the image of the platform the fluff sits on */}
          <img
            className="platform absolute max-w-[600px] translate-x-[-50%] translate-y-[-30%] left-[50%] top-[50%]"
            src={platform}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Loader;
