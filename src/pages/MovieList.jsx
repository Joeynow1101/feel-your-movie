import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function MovieList({ props }) {

    return (
        <>
            <div className='p-5 grid mx-auto gap-10  md:gap-5 md: md:grid-cols-2 lg:grid-cols-4 '>
                {props.movieData.length == 0 ? (
                    <p>Not Found</p>
                ) : (
                    props.movieData.map((res, pos) => {
                        return <MovieCard info={res} key={pos} />;
                    })
                )}
            </div>
            <div className=' text-center my-10'>
                <Link className='button2 shadow-button' to='/'>
                    neu
                </Link>
            </div>
        </>
    );
}
