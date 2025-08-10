import React, { useState } from 'react';

const App = () => {
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  return (
    <>




{/* Nav Section */}
<nav className="bg-red-500 h-14 flex items-center justify-between px-4 md:px-8">
  {/* Logo o Nombre */}
  <div className="text-midnight font-bold text-lg ">
    MiSitio
  </div>

  {/* Menú de navegación */}
  <ul className="hidden md:flex space-x-6 text-white font-medium">
    <li><a href="#" className="hover:underline">Inicio</a></li>
    <li><a href="#" className="hover:underline">Servicios</a></li>
    <li><a href="#" className="hover:underline">Contacto</a></li>
  </ul>

  {/* Botón de menú hamburguesa (visible solo en móvil) */}
  <div className="md:hidden">
    <button className="text-white focus:outline-none">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>










<div class="relative h-[400px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
    <div class="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            McqMate
        </h1>
        <p class="text-gray-300">
            For Students, From Students
        </p>


        <div class="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
    

            <button type="submit" class="absolute right-6 top-6">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>

        </div>
    </div>

</div>



      {/* Hero Section */}
      <div>
        <section className="relative z-10 overflow-hidden bg-indigo-600 py-16 px-8 mt-40">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="text-center lg:text-left">
                  <div className="mb-10 lg:mb-0">
                    <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight text-white">
                      Start building automated serverless forms
                    </h1>
                    <p className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                      Create powerful forms without the hassle of backend management
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="text-center lg:text-right">
                  <a
                    className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90 text-indigo-600 transition duration-300"
                    href="#"
                  >
                    Create Your First Form
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative SVG elements */}
          <span className="absolute top-0 right-0 -z-10">
            <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path>
              <defs>
                <linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse">
                  <stop offset="0.520507" stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          
          <span className="absolute top-4 left-4 -z-10">
            <svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle>
                <circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle>
                <circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle>
                <circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle>
                <circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle>
                <circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle>
                <circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle>
                <circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle>
                <circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle>
                <circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle>
                <circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle>
                <circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle>
                <circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle>
                <circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle>
                <circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle>
                <circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle>
                <circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle>
                <circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle>
                <circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle>
                <circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle>
              </g>
            </svg>
          </span>
        </section>
      </div>

      {/* Sticky Scroll Sections */}
      <div className="relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
          <p className="font-bold text-3xl mb-8">
            this is fancy
            <span className="text-green-500 mx-1 font-extrabold text-4xl relative inline-block">
              underline
              <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2" stroke="currentColor" fill="none"></path>
              </svg>
            </span>
            text
          </p>
          <h2 className="text-4xl font-bold">The First slide</h2>
          <p className="mt-2">Scroll Down for next slide</p>
        </div>
        
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
          <h2 className="text-4xl font-bold">The Second slide</h2>
          <p className="mt-2">Scroll Down for next slide</p>
        </div>
        
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
          <h2 className="text-4xl font-bold">The Third slide</h2>
          <p className="mt-2">Scroll Down</p>
        </div>
        
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
          <h2 className="text-4xl font-bold">The Fourth slide</h2>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Featured Projects</h2>
       
          {/* Filter and Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                  className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span>🔽</span>
                  <span>Filters</span>
                </button>
                
                {filterDropdownOpen && (
                  <div className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50 w-64 top-full left-0">
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2 dark:text-white">Category</h3>
                      <select title="Filter by category" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option>All Categories</option>
                        <option>Web Application</option>
                        <option>Mobile App</option>
                        <option>Library</option>
                        <option>Utility</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2 dark:text-white">Language</h3>
                      <select title="Filter by language" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option>All Languages</option>
                        <option>JavaScript</option>
                        <option>Python</option>
                        <option>Java</option>
                        <option>C++</option>
                      </select>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 dark:text-white">Difficulty</h3>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="dark:text-white">Beginner</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="dark:text-white">Intermediate</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="dark:text-white">Advanced</span>
                        </label>
                      </div>
                    </div>
                    <button 
                      onClick={() => setFilterDropdownOpen(false)}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      Apply Filters
                    </button>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="dark:text-white">Sort by:</span>
                <select className="bg-white dark:bg-gray-800 dark:text-white p-2 rounded border" title="Sort projects">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Recently Updated</option>
                  <option>Most Stars</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="dark:text-white">View:</span>
              <button type="button" title="Grid View" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="text-lg">⚏</span>
              </button>
              <button type="button" title="List View" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="text-lg">☰</span>
              </button>
            </div>
          </div>
          
          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-LG shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-6xl">📊</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">React Dashboard</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">A modern admin dashboard built with React and Tailwind CSS with customizable components.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Tailwind CSS</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">JavaScript</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <span className="mr-1 text-yellow-400">⭐</span>
                    <span>1.2k</span>
                    <span className="mx-2">•</span>
                    <span>MIT</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Details</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" title="View on GitHub">
                      <span>🔗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-LG shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                <span className="text-white text-6xl">🤖</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">AI Chatbot</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Beta</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">A conversational AI chatbot using Python and TensorFlow for natural language processing.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">TensorFlow</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">NLP</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <span className="mr-1 text-yellow-400">⭐</span>
                    <span>856</span>
                    <span className="mx-2">•</span>
                    <span>Apache 2.0</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Details</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" title="View on GitHub">
                      <span>🔗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-LG shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-6xl">📱</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Flutter E-Commerce</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Stable</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">A complete e-commerce mobile application built with Flutter and Firebase backend.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Flutter</span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Firebase</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Dart</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <span className="mr-1 text-yellow-400">⭐</span>
                    <span>2.3k</span>
                    <span className="mx-2">•</span>
                    <span>GPL-3.0</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Details</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" title="View on GitHub">
                      <span>🔗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-blue-600 text-white">
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            Ready to get your productivity back? Start your free trial today.
          </h2>
          <a className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-FULL shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-300"
            href="#">
            Get started
          </a>
          <div className="mt-14 xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
              <div className="px-5 py-2"><a href="#" className="hover:text-blue-200 transition-colors">Contact</a></div>
              <div className="px-5 py-2"><a href="#" className="hover:text-blue-200 transition-colors">Pricing</a></div>
              <div className="px-5 py-2"><a href="#" className="hover:text-blue-200 transition-colors">Privacy</a></div>
              <div className="px-5 py-2"><a href="#" className="hover:text-blue-200 transition-colors">Terms</a></div>
              <div className="px-5 py-2"><a href="#" className="hover:text-blue-200 transition-colors">Twitter</a></div>
            </nav>
            <p className="mt-7 text-base">© 2023 XYZ, LLC</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;