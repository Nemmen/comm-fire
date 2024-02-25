import React from 'react';

function AyurHome() {
  return (
    <div className="container relative flex flex-col justify-between h-full lg:h-[100vh] max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900 text-center"><span className='text-[#6a65ff]'>Ayurvedic</span> Approach</h2>
      <p className="mb-12 text-lg text-gray-500 text-center mt-4">We embrace the wisdom of Ayurveda, an ancient system of medicine that offers profound insights into mental and emotional well-being. Through our Ayurvedic approach, we aim to provide additional tools for survivors to find balance, restoration, and a renewed sense of purpose</p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg" style={{ borderColor: '#6964fa' }}>
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Pranayama and Meditation</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">Controlled breathing exercises and meditation can help manage stress, anxiety, and trauma, providing a sense of calm and emotional balance.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#6964fa] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#6964fa] rounded-lg" style={{ borderColor: '#6964fa' }}>
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Aromatherapy</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-[#6964fa] uppercase">------------</p>
                <p className="mb-2 text-gray-600">The use of essential oils, such as lavender or chamomile, can create a soothing environment, promoting relaxation and emotional well-being.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#6964fa] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#6964fa] rounded-lg" style={{ borderColor: '#6964fa' }}>
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Herbal Remedies</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-[#6964fa] uppercase">------------</p>
                <p className="mb-2 text-gray-600"> Ayurvedic herbs like Ashwagandha and Tulsi are known for their adaptogenic properties, which can help reduce stress, support mental clarity, and emotional resilience.
</p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#6964fa] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#6964fa] rounded-lg" style={{ borderColor: '#6964fa' }}>
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Yoga and Mindfulness Practices</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-[#6964fa] uppercase">------------</p>
                <p className="mb-2 text-gray-600">Engaging in yoga asanas, mindfulness meditation, and yoga nidra can help release emotional tension, improve mental focus, and restore inner equilibrium.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#6964fa] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#6964fa] rounded-lg" style={{ borderColor: '#6964fa' }}>
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Mindfulness and Meditation</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-[#6964fa] uppercase">------------</p>
                <p className="mb-2 text-gray-600"> Introduce mindfulness and meditation practices to help individuals manage stress, anxiety, and trauma resulting from harassment, promoting emotional regulation and resilience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AyurHome;
