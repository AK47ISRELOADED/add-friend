import React from 'react'

const Button = ({data, handleRequest, index}) => {
    const {name, age , img, f} = data;
  return (
    <>
    <div id="card" className='h-60 w-52 m-1  p-2 border-slate-700 border-2 rounded-xl'>
        
        <div id="img" className='h-[70%] w-full overflow-hidden object-center'>
            <img className='h-full w-full' src={img} alt="" />
        </div>
        <div  id="theory">
            <h4 className='text-base'>{name}</h4>
            <h6 className='text-xs'>{age}</h6>
            <button onClick={()=>handleRequest(index)}  className={`w-full rounded my-1  ${f ? "bg-green-500" : "bg-blue-500" }`}>{f ? "friend" : "add friend" }</button>
        </div>
    </div>
    </>
  )
}

export default Button
 