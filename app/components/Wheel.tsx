"use client";
import { useEffect, useRef } from "react";

const Wheel = () => {
  const circleRefs = useRef<any[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const angle = window.pageYOffset * 0.01;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const cosRev = Math.cos(-angle);
      const sinRev = Math.sin(-angle);

      const clockwiseMatrix = `matrix3d(${cos}, ${sin}, 0, 0, ${-sin}, ${cos}, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
      const counterMatrix = `matrix3d(${cosRev}, ${sinRev}, 0, 0, ${-sinRev}, ${cosRev}, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;

      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          circle.style.transform =
            index === 1 ? counterMatrix : clockwiseMatrix;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="bg-black lg:py-40 sm:py-20 min-[450px]:py-10 overflow-hidden">
      <div className="wheelBg relative md:h-screen h-[70vh] lg:scale-100 scale-[1.5] overflow-hidden w-full flex justify-center items-center">
        <div
          ref={(el) => {
            circleRefs.current[0] = el;
          }}
          className="bg-[url(/images/blankOuterWheel.png)] bg-no-repeat bg-contain bg-center h-[100vw] w-full aspect-square left-0 absolute"
        />
        <div
          ref={(el) => {
            circleRefs.current[1] = el;
          }}
          className="bg-[url(/images/outerWheel.png)] bg-no-repeat bg-contain bg-center h-[69vw] w-full aspect-square left-0 absolute"
        />
        <div
          ref={(el) => {
            circleRefs.current[2] = el;
          }}
          className="bg-[url(/images/innerWheel.png)] bg-no-repeat bg-contain bg-center h-[47vw] w-full aspect-square left-0 absolute"
        />
        <div className="text-center md:max-w-[250px] max-w-[150px] md:space-y-4 space-y-2 lg:scale-100 scale-50 z-10">
          <div className="md:text-[40px] min-[400px]:text-2xl text-xl font-bold text-white md:leading-[45px]">
            Feels like a good fit?
          </div>
          <p className="md:text-lg text-sm text-white/50">
            Let&apos;s kick some ass together
          </p>
          <button className="block mx-auto bg-[#84a7b1] text-white px-6 py-3 rounded-full text-center font-medium hover:bg-[#6d8a94] hover:shadow-lg hover:shadow-[#84a7b1]/30 transition-all mt-2">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Wheel;
