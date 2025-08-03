import React from 'react';
// No need to import Link for external URLs, we will use the standard <a> tag.

export default function AfricaSection1() {
  const Aficanmovies = [
    {
      // We can use a simple string for the title
      Titles: 'THABALALA',
      href: 'https://www.pinterest.com/pin/363525001187538499/',
      // Reference images from the `public` folder
      image: '/ThabalaMovies.jpg',
      producer: 'Produce in South Africa',
      year: 'JUNE 2024',
    },
    {
      Titles: 'MOSI',
      href: 'https://www.pinterest.com/pin/137430226133362473/',
      image: './Mosi Movie.jpg',
      producer: 'Produce in Wakanda',
      year: 'DECEMBER 2025',
    },
    {
      // For multi-line titles, we can pass an array or handle it in the JSX
      Titles: ['JAGUN JAGUN', 'The Warrior'],
      href: 'https://www.pinterest.com/pin/810577632970807275/',
      image: '/movie poster.jpg',
      producer: 'Produce in Nigeria',
      year: 'FEBUARY 2024',
    },
    {
      Titles: 'FAR FROM HOME',
      href: 'https://www.pinterest.com/pin/304696731056703751/',
      image: '/farfromhomeMovie.jpg',
      producer: 'Produce in Nigeria',
      year: 'OCTOMBER 2024',
    },
    {
      Titles: 'WOMAN KING',
      href: 'https://www.pinterest.com/pin/80783387061649019/',
      image: '/WomankingMovie.jpg',
      producer: 'Produce in Kenya',
      year: 'JANUARY 2025',
    },
    {
      Titles: 'KIRK GENESIS',
      href: 'https://www.pinterest.com/pin/913456736925635489/',
      image: '/KirkMovie.jpg',
      producer: 'Produce in Ghana',
      year: 'MAY 2025',
    },
    {
      Titles: 'KABIYESI',
      href: 'https://www.showmax.com/ng/stream/series/kabiyesi/2063007b-6a98-333e-9749-7b9a33d4a227',
      image: '/kabiyesi-movie.webp',
      producer: 'Produce in Nigeria',
      year: 'JULY 2025',
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-pink-500 sm:text-5xl md:text-5xl">
          Extraordinary African Movies
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
          Even more of the biggest original shows you won't find anywhere else.
        </p>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* --- CORRECTED .map() FUNCTION --- */}
        {Aficanmovies.map((movie, index) => (
          // Use the href for the key for stability, or index as a fallback
          <div key={movie.href} className="group relative overflow-hidden rounded-lg shadow-lg">
            <a href={movie.href} target="_blank" rel="noopener noreferrer">
              {/* Image with hover effect */}
              <img
                src={movie.image}
                alt={`Poster for ${movie.Titles}`}
                className="w-full h-96  transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Gradient Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              {/* Movie Details */}
              <div className="absolute bottom-0 left-0 p-4">
                <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-pink-500">
                  {/* Handle single or multi-line titles */}
                  {Array.isArray(movie.Titles) ? (
                    <>
                      {movie.Titles[0]}
                      <span className="block text-lg font-normal">{movie.Titles[1]}</span>
                    </>
                  ) : (
                    movie.Titles
                  )}
                </h2>
                <p className="text-sm text-gray-300 mt-1">{movie.producer}</p>
                <p className="text-xs font-semibold uppercase tracking-wider bg-pink-500/80 inline-block px-2 py-1 rounded mt-2">
                  {movie.year}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <a href="/" className="text-pink-400 hover:underline justify-center flex items-center text-xl font-semibold mt-6">View more</a>

    </div>
  );
}