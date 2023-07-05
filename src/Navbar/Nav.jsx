import React, { useState } from 'react'
import "./Nav.css";
import { Link } from "react-router-dom";


var logo = require("../Resources/logo.jpeg")

const Nav = () => {

    const [click, setClick] = useState(false);
    const [btn, setbtn] = useState(false);

   

    const handleClick = () => {
       
        // e.prevenDefault();
        setClick(!click);
        console.log("click", click)
        if (click === true) {

            document.getElementsByClassName("about_cntnt")[0].style.display = "none";
        }
        else {
            if (btn === true) {
                document.getElementsByClassName("contact_cntnt")[0].style.display = "none";
                setbtn(!btn);
            }

            document.getElementsByClassName("about_cntnt")[0].style.display = "flex";

        }

    };

    const handlebtn = () => {
        setbtn(!btn);
        console.log("click", click)
        if (btn === true) {
            // if (click === true) {
            //     document.getElementsByClassName("about_cntnt")[0].style.display = "none";
            //     setClick(!click);
            // }
            document.getElementsByClassName("contact_cntnt")[0].style.display = "none";
        }
        else {

            if (click === true) {
                document.getElementsByClassName("about_cntnt")[0].style.display = "none";
                setClick(!click);
            }


            document.getElementsByClassName("contact_cntnt")[0].style.display = "flex";

        }
    }

    return (
        <div className='xxx'>

            <div className="home_container">
                <div className='logo'>
                    <img src={logo} />
                </div>
                <div className="nav-heading">
                    <p>Gaming Platform</p>
                </div>
                <div className='about'>
                    <Link to="" className='abt' onClick={handleClick}>About</Link>
                    <Link to="" className='cntct' onClick={handlebtn}>Contact</Link>
                    {/* <button onClick={handleClick}>About</button> */}
                </div>

            </div>
           
            <div className="about_cntnt">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat tempore natus, sapiente nisi, voluptatibus optio repellendus quis necessitatibus rerum ut quia?
                    Quia aut nihil pariatur hic reiciendis corrupti facere perspiciatis ipsum labore non,
                    cum, beatae veritatis recusandae assumenda animi inventore magni error molestias nulla numquam aliquid quam.
                    Cupiditate provident adipisci maxime quos unde! Alias velit sit quo magnam, porro unde in,
                    ducimus quod laboriosam ratione ad blanditiis fuga, commodi aperiam. Vitae molestias
                    dignissimos sint incidunt optio quibusdam earum obcaecati nobis asperiores repellat beatae perspiciatis id repudiandae in doloremque a, pariatur,
                    corporis delectus deserunt excepturi qui necessitatibus eligendi repellendus quas? Rerum?</p>
            </div>
            
            <div className='contact_cntnt'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem assumenda maiores sequi vitae ratione cumque
                temporibus quam soluta eligendi rem, natus animi porro hic ut voluptas excepturi eos libero deleniti ipsam repudiandae
                facere similique ab veniam suscipit. Quasi maxime libero velit? Unde esse adipisci similique quod, repellat qui neque
                dolores dolore tempore aperiam eligendi dolorem sapiente
            </div>
            
        </div>
    )
}

export default Nav