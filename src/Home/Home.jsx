import React from 'react'
import Lottie from "lottie-react";
import gamer from "../Resources/gamer.json";
import "./Home.css";
import bg from "../Resources/bg.jpeg";
import { Link } from 'react-router-dom';

// var bg = require("../Resources/bg.jpeg")


const Home = () => {
    return (
        <>
            <div className='home-container'>

                {/* <div className='logo-cntnt'> */}
                    {/* <div className='nn'><p>Play and win</p> */}
                    <div className="gg">
                    <p>Play & Win</p>
                    <div className='result_btn'>
                    <button><a href={bg} download>View Result</a></button>
                    <button><a href={bg} download>View Result 1</a></button>
                    </div>
                    </div>
                {/* </div> */}

                {/* </div> */}
                <div className="home">

                    <Lottie className="chef-gif" animationData={gamer} loop={true} hello />
                   
                </div>
                {/* <div>
                <Link className='tc'>terms</Link>
                </div> */}
            </div>
            
        </>
    )
}

export default Home