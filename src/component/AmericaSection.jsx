import React from 'react'

export default function AmericaSection() {
    const AmericaMovies = [
        {
            Title:'COMING TO AMERICA',
            href: 'https://www.pinterest.com/pin/56435801576934067/',
            image:'https://i.pinimg.com/736x/ae/f2/9c/aef29c8528d6d52f18e0e9d299e2e783.jpg',
            producer:'Produce in america',
            year:'febuary 2023',
        },

        {
            Title:['INDEPENDENCE DAY 3' ,'NEW BEGINING'],
            href: 'https://www.pinterest.com/pin/47710077299255602/',
            image:'https://i.pinimg.com/736x/b7/ff/da/b7ffda813b2b2def4012768d7a81bdfd.jpg',
            producer:'Produce in america',
            year:'0ctomber 2024',
        },

        {
            Title:'CIVIL WAR',
            href: 'https://www.pinterest.com/pin/10625749106235713/',
            image:'https://i.pinimg.com/736x/d3/3e/91/d33e9151826bb4faf5066842d042eb4e.jpg',
            producer:'Produce in america',
            year:'May 2024',
        },

        {
            Title:['AVENGERS','INFINITY WAR'],
            href: 'https://www.pinterest.com/pin/21603273196464863/',
            image:'https://i.pinimg.com/1200x/88/f0/88/88f0886f19f7ca6b7e1aa9bc9f4536c3.jpg',
            producer:'Produce in america',
            year:'Aprill 2025',
        },

        {
            Title:'THE ALOMO',
            href: 'https://www.pinterest.com/pin/45528646227581757/',
            image:'https://i.pinimg.com/736x/ca/e5/79/cae57953a206a9ed0c2636b1e541f778.jpg',
            producer:'Produce in america',
            year:'January 2025',
        },

        {
            Title:' CAPTAIN AMERICA',
            href: 'https://www.pinterest.com/pin/322570392077768923/',
            image:'https://i.pinimg.com/1200x/fe/29/10/fe291008fb97a0e467e83b7992a50637.jpg',
            producer:'Produce in america',
            year:'july 2025',
        },

        {
            Title:'BLACK PANTER',
            href: 'https://www.pinterest.com/pin/58195020179009701/',
            image:'https://i.pinimg.com/1200x/16/9d/c0/169dc0d7ae339ee4d70ffec16cb94c28.jpg',
            producer:'Produce in america',
            year:'March 2024',
        },

        {
            Title:'BLACL X WIDOW',
            href: 'https://www.pinterest.com/pin/140806229582662/',
            image:'https://i.pinimg.com/1200x/44/ec/3c/44ec3ca5b6e8a2568d75c80fb131ae85.jpg',
            producer:'Produce in america',
            year:'May 2024',
        },
    ]
  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-pink-500 sm:text-5xl md:text-5xl">
        Intresting America Action Movies
      </h1>
      <p className="mt-3 max-w-md mx-auto text-lg text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
        Even more of the biggest original shows you won't find anywhere else.
      </p>
    </div>

    {/* Movies Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {/* --- CORRECTED .map() FUNCTION --- */}
      {AmericaMovies.map((movie, index) => (
        // Use the href for the key for stability, or index as a fallback
        <div key={movie.href} className="sticky top-8 group relative overflow-hidden rounded-lg shadow-lg">
          <a href={movie.href} target="_blank" rel="noopener noreferrer">
            {/* Image with hover effect */}
            <img
              src={movie.image}
              alt={`Poster for ${movie.Title}`}
              className="w-full h-96  transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {/* Gradient Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            
            {/* Movie Details */}
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-pink-500">
                {/* Handle single or multi-line titles */}
                {Array.isArray(movie.Title) ? (
                  <>
                    {movie.Title[0]}
                    <span className="block text-lg font-normal">{movie.Title[1]}</span>
                  </>
                ) : (
                  movie.Title
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
  )
}
