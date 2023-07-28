import React from "react";
import "./home.css";
// import Skills from "./Skills";
import profileImg from "../image/profile.svg";
// import Fade from "react-reveal/Fade";
const Home = () => {
  return (
    <>
      <div className="containerDiv py-[40px] px-[8.5vw] flex gap-4">
        {/* <Fade bottom> */}
        <div>
          {/* <Typist cursor={{ hideWhenDone: true, show: false }} startDelay={3}> */}
          <h1 className="text-slate-950 heroText">
            Hi, I'm <span className="text-[#00488C]">Bright</span>{" "}
          </h1>
          {/* </Typist> */}
          {/* <Typist cursor={{ hideWhenDone: true, show: false }}>
          <Typist.Delay ms={2000} /> */}
          <p className="text-3xl font-bold mb-4 text-[#00488C]">Front-end Engineer.</p>

          {/* </Typist> */}
          <button className="py-2 px-6 bg-[#00488C] text-white font-bold text-base rounded my-6">
            <a href="mailto:obodobright0@gmail.com">Contact me</a>
          </button>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom> */}
        <div className="w-[100px] h-[100px] rounded-[50%] border border-[#00488C]">
          <img src={profileImg} alt="" />
        </div>
        {/* </Fade> */}

        {/* </Typist> */}
      </div>
      <div className="py-[20px] px-[8.5vw]" id="about">
        {/* <Fade bottom> */}
        <div>
          <h3 className="text-4xl font-bold text-[#020617]  mb-2">
            Get to know <span className="text-[#00488C]">me</span>
          </h3>
          <p className="text-lg text-slate-950 font-light">
            Pixel-perfect Frontend Engineer, creating digital wonders with an unyeilding passion for
            precision and perception. Meticulously crafting visually stunning websites and seamless
            user experiences through a masterful command web technologies.
          </p>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom> */}
        <div className="my-8">
          <h3 className="text-4xl font-bold text-[#00488C] mb-2">Get 💩 done. Fast.</h3>
          <p className="text-lg text-slate-950 font-light">
            Skilled in crafting clean and maintainable JavaScript/TypeScript code, adept at thriving
            in collaborative agile environments, and dedicated to ensuring on-time project delivery
            with excellence.
          </p>
        </div>
        {/* </Fade> */}
      </div>
    </>
  );
};
export default Home;
