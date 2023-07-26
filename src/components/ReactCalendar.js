import React, { useState } from 'react'
import Calendar from 'react-calendar';

const ReactCalendar = () => {
  const [date, setDate] =useState(new Date())

  const onChange =(date) =>{
     setDate(date)
  }

  return (
       <div className='img flex flex-wrap justify-center'>
    <div className=' text-center  
    mt-5 font-serif font-semibold w-[700px] bg-cyan-200 h-[400px] p-5 text-blue-400 mt-5 rounded-md truncate'>
          <div className='mb-7'>
          <h1 className='mb-5 text-5xl'>Calendar App</h1>
           <Calendar
             value={date}
             onChange={onChange}
           />
          </div>
         <div className='text-center'>
           {date.toString()}
         </div>
    </div>
    </div>
  )
}

export default ReactCalendar
