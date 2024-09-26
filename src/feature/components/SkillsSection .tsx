import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-6xl lg:text-7xl text-blue-600" />,
  },
  {
    name: "Golang",
    icon: <FaGolang className="text-6xl lg:text-7xl text-blue-400" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-6xl lg:text-7xl text-cyan-500" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-6xl lg:text-7xl text-green-500" />,
  },
  {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill className="text-6xl lg:text-7xl text-blue-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-6xl lg:text-7xl text-black " />,
  },
];

const SkillsSection = () => {
  return (
    <div className="w-full py-8">
      <h2 className="text-2xl font-bold text-center mb-10 sm:mb-12">
        使用技術
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white border-2 border-black rounded-lg"
          >
            {skill.icon}
            <p className="mt-2 text-lg font-semibold text-gray-700 ">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
