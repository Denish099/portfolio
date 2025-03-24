import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between mb-20 py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl font-bold">Denish</h1>
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <FaGithub />
        <FaLinkedin />
        <FaXTwitter />
        <FaInstagram />
      </div>
    </div>
  );
}
