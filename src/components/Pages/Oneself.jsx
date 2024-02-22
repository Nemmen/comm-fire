import React from 'react'

const Oneself = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 bg-gradient-to-tl from-[#ffe5f9] to-[#6964fa8e]'>
            <div className=' p-3 my-auto '>
                <h2 className='text-white [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-slate-600 font-bold text-3xl text-center'>Child<br/>Abuse</h2>
            </div>
            <div className='lg:col-span-2 md:col-span-2 sm:col-span-1  p-3 realtive'>
                <div className='my-auto'>
                <div className='flex gap-3 justify-center items-center '>
                    <div className='p-2 bg-white rounded-md shadow-lg border-2 border-black w-1/3 lg:w-64 lg:h-72 md:h-48 md:w-56'>
                    <h3 className='font-semibold text-xl'>Trauma-Informed Care</h3>
                    <br />
                    <p>Implement trauma-informed techniques to address the emotional and psychological impact of child abuse, focusing on safety, trustworthiness, choice, collaboration, and empowerment.</p>
                    </div>
                    <div className='flex lg:flex-col md:flex-col gap-3 my-auto sm:flex-row'>
                        <div className='p-2 bg-white rounded-md shadow-lg border-2 border-black my-auto w-full lg:w-64 lg:h-72 md:h-48 md:w-56'>
                        <h3 className='font-semibold text-xl'>Art Therapy</h3>
                        <br />
                        <p>Implement cognitive-behavioral strategies to help individuals reframe negative thought patterns and develop coping mechanisms to address the psychological impact of harassment.</p>
                        </div>
                        <div className='p-2 bg-white rounded-md shadow-lg border-2 border-black my-auto w-full lg:w-64 lg:h-72 md:h-48 md:w-56'>
                        <h3 className='font-semibold text-xl'>Play Therapy</h3>
                        <br />
                        <p>Establish support groups to provide a sense of community, validation, and understanding for individuals who have experienced harassment, fostering a supportive environment for healing.</p>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 bg-gradient-to-bl from-[#ffe5f9] to-[#6964fa8e]'>
            
            <div className='lg:col-span-2 md:col-span-2 sm:col-span-1  p-3 realtive'>
                <div className='my-auto'>
                <div className='flex gap-3 justify-center items-center '>
                    <div className='p-2 bg-white rounded-md shadow-lg border-2 border-black w-1/3 lg:w-64 lg:h-72 md:h-48 md:w-56'>
                    <h3 className='font-semibold text-xl'>Mindfulness and Meditation</h3>
                    <br />
                    <p>Introduce mindfulness and meditation practices to help individuals manage stress, anxiety, and trauma resulting from harassment, promoting emotional regulation and resilience.</p>
                    </div>
                    <div className='flex lg:flex-col md:flex-col gap-3 my-auto sm:flex-row'>
                        <div className='p-2 bg-white rounded-md shadow-lg border-2 border-black my-auto w-full lg:w-64 lg:h-72 md:h-48 md:w-56'>
                            <h3 className='font-semibold text-xl'>Cognitive Behavioral Techniques</h3>
                            <br />
                            <p>Implement cognitive-behavioral strategies to help individuals reframe negative thought patterns and develop coping mechanisms to address the psychological impact of harassment.</p>
                        </div>
                        <div className='p-2 bg-white rounded-md shadow-lg border-2 border-black my-auto w-full lg:w-64 lg:h-72 md:h-48 md:w-56'>
                        <h3 className='font-semibold text-xl'>Support Groups</h3>
                        <br />
                        <p>Establish support groups to provide a sense of community, validation, and understanding for individuals who have experienced harassment, fostering a supportive environment for healing.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className=' p-3 my-auto '>
                <h2 className='text-white [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-slate-600 font-bold text-3xl text-center'>Harrassment</h2>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 bg-gradient-to-tl from-[#ffe5f9] to-[#6964fa8e]'>
            <div className=' p-3 my-auto '>
                <h2 className='text-white [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-slate-600 font-bold text-3xl text-center'> Family and <br/>Relationship Stress</h2>
                
            </div>
            <div className='lg:col-span-2 md:col-span-2 sm:col-span-1  p-3 realtive'>
                <div className='my-auto'>
                <div className='flex gap-3 justify-center items-center '>
                    <div className='p-2 bg-white rounded-md shadow-lg border-2 border-black w-1/3 lg:w-64 lg:h-72 md:h-48 md:w-56'>
                        <h3 className='font-semibold text-xl'>Communication Skills Training</h3>
                        <br />
                        <p>Offer workshops or resources focused on improving communication and conflict resolution skills within family and relationship dynamics to promote healthier interactions.</p>
                    </div>
                    <div className='flex lg:flex-col md:flex-col gap-3 my-auto sm:flex-row'>
                        <div className='p-2 bg-white rounded-md shadow-lg border-2 border-black my-auto w-full lg:w-64 lg:h-72 md:h-48 md:w-56'>
                        <h3 className='font-semibold text-xl'>Couples Therapy Techniques</h3>
                        <br />
                        <p>Integrate couples therapy techniques to address relationship stress, enhance emotional connection, and foster understanding and empathy between partners</p>
                        </div>
                        <div className='p-2 bg-white rounded-md shadow-lg border-2 border-black my-auto w-full lg:w-64 lg:h-72 md:h-48 md:w-56'>
                        <h3 className='font-semibold text-xl'>Stress Management Workshops</h3>
                        <br />
                        <p>Provide stress management workshops to equip individuals and families with practical tools for coping with stress, promoting emotional well-being and harmony within the family unit.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Oneself