import React, { useState, lazy, Suspense } from 'react';

// Lazy load the Spline component
const LazySpline = lazy(() => import('@splinetool/react-spline'));

const skills = [
  // Languages
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', category: 'Language' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', category: 'Language' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg', category: 'Language' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/cplusplus/cplusplus-original.svg', category: 'Language' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/csharp/csharp-original.svg', category: 'Language' },
  
  // Libraries
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg', category: 'Library' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg', category: 'Library' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'Library' },
  { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', category: 'Library' },
  { name: 'Plotly.js', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', category: 'Library' },
  
  // Frameworks
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vitejs/vitejs-original.svg', category: 'Framework' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nextjs/nextjs-original.svg', category: 'Framework' },
  { name: 'Astro', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/astro/astro-original.svg', category: 'Framework' },
  
  // ORM
  { name: 'Mongoose', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', category: 'ORM' },
  { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/prisma/prisma-original.svg', category: 'ORM' },
  
  // Databases
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', category: 'Database' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', category: 'Database' },
  
  // Deployment
  { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/netlify/netlify-original.svg', category: 'Deployment' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vercel/vercel-original.svg', category: 'Deployment' },
  
  // Testing
  { name: 'Vitest', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vitejs/vitejs-original.svg', category: 'Testing' },
  { name: 'Playwright', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg', category: 'Testing' },
  
  // Version Control
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', category: 'Version Control' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/github/github-original.svg', category: 'Version Control' },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showSpline, setShowSpline] = useState(false);
  
  // Get unique categories
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  // Filter skills based on active category or show all if none selected
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

  return (
    <div className="flex justify-center items-center px-6 py-16 min-h-screen">
      <section className="p-2 w-full bg-white rounded-xl lg:p-4 max-w-9xl">
        <h2 className="mb-10 text-4xl font-Xwide text-center text-gray-800 md:text-5xl md:mb-16 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-[50px] after:h-[3px] after:bg-gray-800">
          Skills
        </h2>  
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeCategory === null ? 'bg-gray-800 font-Xwide' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeCategory === category ? 'bg-gray-800 font-Xwide' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}s
            </button>
          ))}
        </div>
        
        {/* Category Sections */}
        {activeCategory === null ? (
          // Show all categories when no filter is active
          <>
            {categories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              return (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="pb-2 mb-1 text-xl font-bold text-gray-800 md:text-2xl font-poppins">
                    {category}s
                  </h3>
                  <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
                    {categorySkills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-12 h-12 sm:w-16 sm:h-16" 
                          title={skill.name}
                          loading="lazy"
                          width="64"
                          height="64"
                        />
                        <span className="hidden mt-2 text-sm text-gray-800 font-poppins md:block">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          // Show only filtered skills when a category is selected
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12 sm:w-16 sm:h-16" 
                  title={skill.name}
                  loading="lazy"
                  width="64"
                  height="64"
                />
                <span className="hidden mt-2 text-sm font-medium text-gray-800 md:block">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}
        
        {/* Optional Spline loading */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => setShowSpline(!showSpline)}
            className="hidden px-4 py-2 text-sm font-medium bg-gray-200 rounded-full transition-all hover:bg-gray-300 md:block"
          >
            {showSpline ? "Hide 3D View" : "Show 3D View"}
          </button>
          
          {showSpline && (
            <div className="mt-4 rounded-lg">
              <Suspense fallback={<div className="flex justify-center items-center w-full bg-gray-100">Loading 3D view...</div>}>
                <LazySpline scene="https://prod.spline.design/LD8qoNLuaB8zmvSZ/scene.splinecode" />
              </Suspense>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;