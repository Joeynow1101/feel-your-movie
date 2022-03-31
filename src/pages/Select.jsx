import React from "react";
import { Link } from "react-router-dom";

export default function Select({ props }) {
  let arr = [
    "gespannt",
    "ängstlich",
    "kindisch",
    "gerührt",
    "musikalisch",
    "nostalgisch",
    "wissbegierig",
    "verträumt",
  ];

  return (
    <>
      <div className='mainContainer text-red-600 '>
        <div className='container h-32 flex items-center justify-center'>
          <h1 className='text-3xl md:text-4xl'>Wie fühlst du dich?</h1>
        </div>
        <ul className='mx-auto grid grid-cols-2 p-5 text-base gap-6 md:grid-cols-4 '>
          {arr.map((value, index) => {
            return (
              <button
                key={index}
                className='button shadow-button '
                onClick={(e) => {
                  props.getData(e.target.name);
                }}
                name={value}>
                {value}{" "}
              </button>
            );
          })}
        </ul>
        <div className=' text-center my-10'>
          <Link className='button2 shadow-button' to='/MovieList'>
            weiter
          </Link>
        </div>
      </div>
    </>
  );
}
