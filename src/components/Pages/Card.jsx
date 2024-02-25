
import React from 'react'

const Card = (props) => {
  const img = props.img
  const text = props.text
  return (
    <div>
        <div className="card-body relative w-[80%]">
            <div className="card">
                <img src={img} alt="Professional Image" />
            </div>
            <div className="content absolute bottom-[10%] w-[max-content] rounded-md p-3 left-[70%] bg-[#6964fa] text-white shadow-md hover:mb-3 transition-all duration-200">
                <p className='ps-3'>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Card