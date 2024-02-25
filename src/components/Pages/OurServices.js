import React from "react";
import img1 from "../img/4bac.jpg";
import Hero from '../img/empower.png';

function OurServices() {
  return (
    <section>
      <div style={{ position: 'relative', width: '100vw' }}>
        <img src={img1} alt="img1" style={{ width: '99vw' }}></img>
        <div style={{ position: 'absolute', top: '160px', left: '100px', width: '40vw' }}>
          <h2 style={{ marginTop: '20px', paddingTop: '30px', fontSize: '2.25rem' }}>
            Bring a deep understanding of the human mind and emotions to the table.
          </h2>
          <p style={{ marginTop: '20px', fontSize: '1rem' }}>
            Welcome to <b>Empowermend</b>, your trusted platform for support, guidance, and empowerment. We understand that the journey to justice and emotional well-being can often be a daunting one, and that's why we're here to make it easier for you.

            At SolutionNexus, we believe in a world where every individual has the right to live free from harassment, discrimination, and fear. Our mission is to provide a safe and welcoming space for those who seek assistance, whether it's in the form of legal advice, emotional support, or valuable resources.
          </p>
        </div>
        <div style={{ position: 'absolute', top: '160px', left: '50vw', width: '40vw' }}>
          <img
            src={Hero}
            style={{ width: '100%', height: 'auto' }}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default OurServices;
