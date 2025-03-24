import Main from "./components/Main.jsx";
import NavBar from "./components/NavBar.jsx";

export default function App() {
  return (
    <div className="text-neutral-300 overflow-x-hidden relative">
      {/* Background Elements */}
      <div className="fixed top-0 left-0 h-full w-full -z-10 bg-neutral-950"></div>
      <div className="absolute top-0 left-0 h-screen w-screen -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Content */}
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <NavBar />
        <Main />
      </div>
    </div>
  );
}
