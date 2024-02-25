import React from "react";
import img1 from "../img/4bac.jpg";
import Hero from '../img/empower.png'
import "bootstrap";
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function OurServices(){
  return(
    <section>
    <div className="container-fluid">
      <img src={img1} alt="img1" style={{width:'99vw'}} ></img>
      <div style={{position:'absolute', top:'160px',marginLeft:'100px' , width:'40vw'}}>
      <h2 className='mt-5 pt-3 fs-1'>
      Bring a deep understanding of the human mind and emotions to the table.

                </h2>
                <p className='mt-5 fs-6'>
                Welcome to <b>Empowermend </b>, your trusted platform for support, guidance, and empowerment. We understand that the journey to justice and emotional well-being can often be a daunting one, and that's why we're here to make it easier for you.

At SolutionNexus, we believe in a world where every individual has the right to live free from harassment, discrimination, and fear. Our mission is to provide a safe and welcoming space for those who seek assistance, whether it's in the form of legal advice, emotional support, or valuable resources.

                </p>
      </div >
      <div style={{position:'absolute', top:'160px',marginLeft:'50vw' , width:'40vw'}}>
      <img
            src={Hero}
            className="object-contain"
            alt=""
          />
    </div>
    </div>
  </section>
  
  )
  
}

export default OurServices;
