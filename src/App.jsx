import React, { useState } from 'react'
import Button from './assets/Button'

const App = () => {

  const raw = [
    {name: "adarsh" , age : "21", f : false ,img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" } , 
    {name: "varun" , age : "8" , f : false, img: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }  ,
    {name: "yash" , age : "23" , f : false, img: "https://images.unsplash.com/photo-1442328166075-47fe7153c128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }  ,
    {name: "goti" , age : "20" , f : false,img: "https://images.unsplash.com/photo-1442328166075-47fe7153c128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  }  ,
    {name: "vivek" , age : "19" , f : false, img: "https://images.unsplash.com/photo-1442328166075-47fe7153c128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }  
  ]

  const [data , setData] = useState(raw);
  const handleRequest = (indexx) =>{
    setData((prev)=>{
      return prev.map((item , index)=>{
        if(index == indexx ) return{...item, f: !item.f }
        return item
      })
    })
  }

  return (
    
    <div className='  w-full h-screen py-4 flex items-center justify-center px-12 bg-slate-900 text-white' >
      <h1 className=' absolute top-5 uppercase  text-2xl font-bold'>adarsh kaurav</h1>
        {data.map((item,index)=>(
          <Button key={index} handleRequest={handleRequest} index={index} data={item} />
        ))}
  </div>
  )
}

export default App
