function Home() {
  return (
    <div className="flex flex-col p-5 w-full h-svh">
    
      <div className="z-10 mt-10">
        <h1 className="font-mono text-xl tracking-wide text-white md:text-5xl">I AM</h1>
        <h1 className="text-2xl text-white font-fihover md:6xl">Abdul Quddus</h1>
        <h1 className="font-mono text-xl text-white md:text-2xl">Full Stack Developer</h1>
        <h1 className="text-5xl tracking-wider text-greenyellow font-Xwide md:9xl">
          Portfolio.
        </h1>
        
        <div className="flex flex-row gap-2 mt-8 lg:mt-0">
          <picture>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/4957/4961/files/redragon_m808_gaming_mouse_7_ab0a92f4-816e-44c8-b421-b0d27df0768e.jpg?v=1605171295"
              alt=""
            />
            <figcaption className="text-2xl font-Xwide">UI/UX</figcaption>
          </picture>
          </div>
        </div>
      </div>
  );
}
export default Home;
