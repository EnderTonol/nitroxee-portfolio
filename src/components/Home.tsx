import Spline from "@splinetool/react-spline";
import ui_logo from "../assets/icons/ui.svg";
import code_logo from "../assets/icons/code.svg";
function Home() {
  return (
    <div className="flex flex-col p-5 w-full h-svh">
    
      <div className="z-10 mt-10">
        <h1 className="font-mono text-5xl tracking-wide text-white">I AM</h1>
        <h1 className="text-6xl text-white font-fihover">Abdul Quddus</h1>
        <h1 className="font-mono text-2xl text-white">Full Stack Developer</h1>
        <h1 className="text-9xl tracking-wider text-greenyellow font-Xwide">
          Portfolio.
        </h1>

        <div className="flex flex-row gap-2">
          <picture>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/4957/4961/files/redragon_m808_gaming_mouse_7_ab0a92f4-816e-44c8-b421-b0d27df0768e.jpg?v=1605171295"
              alt=""
            />
            <figcaption className="text-2xl font-Xwide">UI/UX</figcaption>
          </picture>
          <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center px-2 w-56 h-12 bg-customgreen">
            <img
              src={ui_logo}
              alt="UX Design Icon"
              width="24"
              height="24"
            />
            <h1 className="font-Xwide">Designing</h1>
          </div>
          <div className="flex flex-row gap-2 items-center px-2 w-56 h-12 bg-customgreen">
            <img
              src={code_logo}
              alt="UX Design Icon"
              width="24"
              height="24"
            />
            <h1 className="font-Xwide">Developement</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
