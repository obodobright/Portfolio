import { socialIcons } from "./Social";
import "./home.css";

const Contact = () => {
  return (
    <div className="py-[20px] px-[8.5vw]">
      <div>
        <h3 className="text-4xl font-bold text-[#020617]  mb-4">
          My working <span className="text-[#00488C]">career</span>
        </h3>
        <div>
          <p className="text-base my-1 font-bold">
            <span className="text-[#00488C]">Frontend Engineer </span> @ Yebox. 2022 - Present{" "}
          </p>
          <p className="text-base my-1 font-bold">
            <span className="text-[#00488C]">Software Developer</span> @ Riby. 2021 - 2023{" "}
          </p>
          <p className="text-base my-1 font-bold">
            <span className="text-[#00488C]">Frontend Engineer</span> @ Codesandbots. 2020 - 2021{" "}
          </p>
        </div>
      </div>
      <div className="mt-12 mobile-socials">
        <div className="flex items-center justify-center">
          {socialIcons.map((icon) => (
            <a href={icon.link} className="p-3 linkText">
              {icon.social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Contact;
