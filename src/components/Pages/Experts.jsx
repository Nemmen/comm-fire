// App.js
import React from 'react';
import ExpertDefault from './Expert-default'
import OurServices from './OurServices'
import GridLayout from './GridLayout'
import Card from "./Card";

const Expert = () => {
  return (
    <div >
    
      <OurServices/>
      <GridLayout/>   


      <div className="w-full text-center shadow-md  rounded-[20px] py-6 my-4">
        <div >
          <h2 className="text-black font-bold text-4xl text-center">Our <span className="text-[#6964fa]">Experts</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-[12px] lg:gap-6 md:gap-4 lg:p-[60px] md:p-[40px] sm:p-[10px] lg:text-center">
          <div className="lg:w-[81%] md:w-[81%] sm:w-[76%] sm:mt-6 sm:mx-auto sm:text-center">
            <Card/>
          </div>
          <div className="my-auto lg:w-[76%]">
            <p className="text-start sm:ms-8 md:ms-8 lg:ps-16 lg:text-[16px]">Bring a deep understanding of the human mind and emotions to the table. They can provide insights into the psychological impact of abuse and harassment, offer coping strategies, and guide individuals towards healing and resilience.</p>
          </div>
        </div>
      
       
        
      </div>
     <div className=' mx-5  '>
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4"> 
      <div className="min-h-64">
        <ExpertDefault />
      </div>
      <div className="min-h-64">
        <ExpertDefault />
      </div>
      <div className="min-h-64">
        <ExpertDefault />
      </div>
      <div className="min-h-64">
        <ExpertDefault />
      </div>
    </div>
     </div>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  );
};

export default Expert;
