import React from 'react'
import Button from './Button'
import Hero from '../svgs/Mental health-bro.svg'
import AyurCards from './AyurCards'
import Oneself from './Oneself'
import ScrollCarousell from './ScrollCarousel'


const Ayurveda = () => {
  return (
    <div>
      <div className="flex w-[87%] justify-center items-center m-auto lg:h-[100vh] md:h-[100vh] sm:h-[100vh]">
        <div className="flex gap-5 flex-wrap-reverse w-full sm:px-0  px-3 sm:mt-0 justify-center sm:flex-nowrap items-center">
          <div className="lg:w-[50%] md:w-[50%]">
            <h1 className=" text-[40px] font-bold leading-10">
            Heal With
              <br /><span className="text-[48px]" style={{ color: "#6964fa" }}>Ayurveda</span><span className="text-black text-[48px]"></span>
            </h1>
            <hr className="block h-[2px] bg-violet-950"/>
            <br />
            <p className="font-medium ">
            We offer a<span className="text-[#6964fa]"> holistic approch to solve your problem</span>  
            <br/>
            <br/>
            <span className="font-normal">Join us in breaking the silence, finding strength in solidarity, and reclaiming hope for a brighter future.</span>
            </p>
            <br/>
            <Button style="text-[18px]" name="Know us" />
          </div>
          <div className="lg:w-[50%] md:w-[50%]">
            <img
            src={Hero}
            className="object-contain"
            alt=""
          />
          </div>
          
        </div>
      </div>
      <div className="spacer p-6"></div>
      <AyurCards/>
      <div className="spacer p-6"></div>
      <Oneself/>
      <div className="spacer p-6"></div>
      <div className="w-full text-center shadow-md  rounded-[20px] py-6">
      <div >
          <h2 className="text-black font-bold text-4xl text-center pt-4 pb-4">Creating a Safe Space:<span className="text-[#6964fa]"> Communicating with Your Child</span></h2>
          <div className="h-[1px] w-[70%] mx-auto bg-[#6964fa]"></div>
          <p className="mx-auto text-balance lg:w-[70%] text-center lg:mt-[40px] md:mt-[20] sm:mt-[10px] mb-5 ">Dear Parents, <br />
          As we navigate the complexities of parenting, it's crucial to establish an open and supportive environment for our children. By actively listening and engaging in meaningful conversations, we can help protect them from potential harm and provide the necessary support if they encounter distressing situations.</p>
        </div>
        <ScrollCarousell/>
      </div>
      <div className="spacer p-6"></div>
      
    </div>
  )
}

export default Ayurveda