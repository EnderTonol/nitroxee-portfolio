function Arts() {
  return (
    <div className="pb-6 h-screen bg-black">
      <h2 className="text-3xl text-center text-greenyellow font-Xwide">
        Tech Arts
      </h2>

      <div className="py-24 bg-gray-50 sm:py-32">
        <div className="px-6 mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
          <div className="grid gap-4 mt-10 sm:mt-16 lg:grid-cols-3 lg:grid-rows-3">
            <div className="relative lg:row-span-3">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] min-h-[30rem]"
                style={{
                  backgroundImage: `url('https://cdn.dribbble.com/userupload/32473724/file/original-848b72329b71aeac7a3a3a252d9cf104.png?resize=1504x1128&vertical=center')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1 lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] min-h-[20rem] items-center justify-center bg-greenyellow">
                <h2 className="text-6xl font-Xwide">Logo</h2>
                <h2 className="text-2xl font-Xwide">Designs</h2>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-3">
              <div className="absolute inset-px bg-white rounded-lg"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] min-h-[10rem] bg-[url('https://cdn.dribbble.com/userupload/13227328/file/original-fe6e12369e688fad7669cfd8dc23d620.jpg?resize=1504x1128&vertical=center')] bg-cover bg-center"></div>
              <div className="absolute inset-px rounded-lg ring-1 shadow pointer-events-none ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2 lg:col-start-3 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] min-h-[20rem] bg-[url('https://blog.logomaster.ai/hubfs/adobe-logo-cover.jpg')] bg-cover bg-center"></div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
            <div className="relative lg:col-start-3 lg:row-start-1">
              <h1 className="text-3xl text-white font-Xwide">Logo Designing</h1>
              <h1 className="text-4xl text-greenyellow font-Xwide">
                Optemized Resolutions
              </h1>
              <h1 className="text-xl text-white font-Xwide">
                3800x2160 , 1920x1080, 1440x900
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Arts;
