import React from "react";
let img_path = "https://image.tmdb.org/t/p/w500";
export default function MovieCard(movie) {
    return (
        <div className='shadow-button p-3 bg-slate-200 rounded'>
            <div className=' w-full'>
                <img
                    className='drop-shadow-sm rounded'
                    src={img_path + movie.info.poster_path}
                    alt='MoviePoster'
                />
            </div>
            <div className='p-2'>
                <h2 className='font-bold text-lg mb-2 text-red-600 text-shadow'>
                    {" "}
                    {movie.info.title}
                </h2>

                <p className='text-sm text-red-600'>{movie.info.overview}</p>
            </div>
        </div>
    );
}
