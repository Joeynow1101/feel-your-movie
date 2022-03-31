import React from "react";
import { useNavigate } from "react-router-dom";

export default function Year({ year, setYear }) {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/select");
  };

  return (
    <div className='mainContainer text-red-600 gap-6 '>
      <div className='container flex items-center justify-center'>
        <h1 className='text-3xl md:text-4xl text-center '>
          Aus welchen Jahr soll dein Film sein?
        </h1>
      </div>
      <form
        className='w-full h-1/4 flex flex-col items-center justify-around'
        onSubmit={handleSubmit}>
        <div className=' mx-auto'>
          <label htmlFor='birth'>
            Jahr
            <input
              onChange={(event) => setYear(event.target.value)}
              required
              value={year}
              type='text'
              id='year'
              maxLength='4'
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              className='block w-64 h-8 p-1 rounded-md my-1'
            />
          </label>
        </div>
        <div className=' text-center '>
          <button className='button2 shadow-button' type='submit'>
            weiter
          </button>
        </div>
      </form>
    </div>
  );
}
