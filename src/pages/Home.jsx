import React from "react";
import LogoImg from "../assets/LogoImg.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className='mainContainer gap-2'>
                <img className=' w-3/4 lg:w-2/4 mx-auto ' src={LogoImg} alt='Logo' />
                <div className=' text-center mb-20 mt-5'>
                    <Link className="button2 shadow-button" to="/year">Start</Link>
                </div>
            </div>

        </>
    );
}
