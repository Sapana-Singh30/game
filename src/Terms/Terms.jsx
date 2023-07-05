import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Terms.css";

const Terms = () => {

const[term, setTerm] = useState(false);

const handleterms = () =>{
    console.log(term);
    setTerm(!term);
if(term === true ){
    document.getElementsByClassName("term_cntnt")[0].style.display = "none";
}
else{
    
    document.getElementsByClassName("term_cntnt")[0].style.display = "flex";
}
}

  return (
    <div className='terms'>
       
        <Link to="" className='term' onClick={handleterms}>Terms & Condition</Link>
    
    <div className='term_cntnt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, consequatur,
         praesentium quam quas temporibus repellendus optio odio eligendi a dignissimos quasi,
          facilis cumque ex doloremque quis quisquam beatae dolore! Ipsum odio nemo laudantium et eligendi,
           porro impedit nulla dolores, placeat explicabo quo voluptatem maiores saepeneque aperiam! Sint,
            numquam modi, porro dolorum amet culpa accusantium tempore praesentium non cupiditate saepe.</div>
            </div>
  )
}

export default Terms