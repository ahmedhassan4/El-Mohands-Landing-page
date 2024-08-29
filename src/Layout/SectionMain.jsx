import { useEffect, useRef, useState } from "react";
import Content from "./Content";
import { data } from "../data";
import Canvas from "./Canvas";
import gsap from "gsap";
function SectionMain() {
  const banner = useRef();

  const [activeData, setactiveData] = useState(data[0]);

  const handleSwatchClick = (item) => {
    if (activeData.id !== item.id) setactiveData(item);
  };

  useEffect(() => {
    gsap.to(banner.current, {
      background: activeData.background,
      ease: "power3.inOut",
      duration: 0.8,
    });

    gsap.to(".header", {
      color: activeData.headingColor,
      ease: "power3.inOut",
      duration: 0.8,
    });
    return () => {};
  }, [activeData]);

  return (
    <div ref={banner} className="w-full h-4/5">
      <div className="header absulute my-2 ml-6 text-left text-2xl font-bold tracking-widest md:ml-28 lg:ml-[12vw] lg:my-8 uppercase">
        owr work
      </div>

      <div className="w-full h-full flex justify-between items-center flex-col lg:flex-row-reverse">
        <Canvas
          activeData={activeData}
          swatchData={data}
          handleSwatchClick={handleSwatchClick}
        />
        <Content activeData={activeData} />
      </div>
    </div>
  );
}

export default SectionMain;
