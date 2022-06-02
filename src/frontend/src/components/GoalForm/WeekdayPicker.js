import React from 'react'

const WeekdayPicker = (props) => {
  return (
    <div className='grid grid-cols-7 border text-center text-gray-800 font-medium text-sm'>
      {props.weekdayCell.map(item => (
        <div 
          key={item.id}
          className={`p-2 cursor-pointer ${item.selected ? 'bg-slate-300' : ''}`}
          onClick={() => props.updateState(item.id)}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  )
}

export default WeekdayPicker