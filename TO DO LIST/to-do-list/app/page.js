"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])

const submitHandler = (e) => {
  e.preventDefault()
  setMainTask([...MainTask, {title, desc}])
  settitle("")
  setdesc("")
  console.log(MainTask)
}

const deleteHandler = (i) => {
  let copyText = [...MainTask]
  copyText.splice(i,1)
  setMainTask(copyText)
}

let render = <h2>No Task Available</h2>
if (MainTask.length > 0) {
  render = MainTask.map((t,i)=>{
    return (
    <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex justify-between w-2/3'>
        <h5 className='text-xl text-semibold'>{t.title}</h5>
        <h6 className='text-lg text-semibold'>{t.desc}</h6>
      </div>
      <button onClick={() => {
        deleteHandler(i)
      }} className='bg-red-500 text-white px-4 py-2 text-2xl'>&times;</button>
    </li>
    
    );
  });
}
  return (
    <>
      <h1 className='bg-green-500 p-8 text-white text-center text-5xl'>My To Do List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" 
          placeholder='Enter Your Title'
          className='px-4 py-2 border-zinc-800 border-4 rounded m-8'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
        />
        <input type="text" 
          placeholder='Enter Your Description'
          className='px-4 py-2 border-zinc-800 border-4 rounded m-5'
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button className='bg-orange-500 text-white px-5 py-3 m-5 rounded'>Add Task</button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
          <ul>
            {render}
          </ul>
      </div>
    </>
  )
}

export default page