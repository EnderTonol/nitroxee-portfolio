export default function Grid() {
    return (
      <div className="py-24 bg-gray-50 sm:py-32">
        <div className="px-6 mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
          <h2 className="text-xl text-center text-greenyellow font-Xwide md:text-3xl">Claude Sonnet x nitroXee</h2>
          <p className="mx-auto mt-2 max-w-lg text-4xl text-center text-white font-Xwide text-gray-950 sm:text-5xl">
            Everything you need to develope faster your app 
          </p>
          <div className="grid gap-4 mt-10 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight font-poppins text-gray-950 max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-gray-600 font-poppins text-sm/6 max-lg:text-center">
                    User Friendly UI/UX Design for your App and Ease for Developers
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="object-cover object-top size-full"
                      src="https://cdn.dribbble.com/userupload/42745397/file/original-2a13e07f19eb9156e2ff324b277a975c.png?resize=752x&vertical=center"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight font-poppins text-gray-950 max-lg:text-center">Performance</p>
                  <p className="mt-2 max-w-lg text-gray-600 font-poppins text-sm/6 max-lg:text-center">
                    Improved performance and speed for your App with optimized code, next.js, tailwindcss and many more.
                  </p>
                </div>
                <div className="flex flex-1 justify-center items-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px bg-white rounded-lg"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight font-poppins text-gray-950 max-lg:text-center">Security</p>
                  <p className="mt-2 max-w-lg text-gray-600 font-poppins text-sm/6 max-lg:text-center">
                    Level up your security with next-auth, jwt, bcrypt, and De-centrelization with next.js
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute inset-px rounded-lg ring-1 shadow pointer-events-none ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight font-poppins text-gray-950 max-lg:text-center">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-gray-600 font-poppins text-sm/6 max-lg:text-center">
                    Performant APIs with next.js, Express, Prisma ORMs with high performance DBMS.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="overflow-hidden absolute right-0 bottom-0 top-10 left-10 bg-gray-900 rounded-tl-xl shadow-2xl">
                    <div className="flex ring-1 bg-gray-800/40 ring-white/5">
                      <div className="flex -mb-px font-medium text-white bg-slate-800 text-sm/6">
                        <div className="px-4 py-2 text-white border-r border-b border-b-white/20 border-r-white/10 bg-white/5">
                          NotificationSetting.jsx
                        </div>
                        <div className="px-4 py-2 border-r border-gray-600/10">Router.js</div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-4 bg-slate-800">
                      <pre className="font-mono font-bold text-slate-100 text-sm/6">
                       {
                        "const express = require('express');\n" +
                        "const router = express.Router();\n" +
                        "const { PrismaClient } = require('@prisma/client');\n" +
                        "const prisma = new PrismaClient();\n" +
                        "\n" +
                        "router.get('/', async (req, res) => {\n" +
                        "  try {\n" +
                        "    const notifications = await prisma.notification.findMany();\n" +
                        "    res.json(notifications);\n" +
                        "  } catch (error) {\n" +
                        "    res.status(500).json({ error: 'Failed to fetch notifications' });\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "module.exports = router;\n"
                        
                       }
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }