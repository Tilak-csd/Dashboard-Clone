import React from 'react'

export default function Button({bgcolor, content, color}) {
  return (
    <button className='rounded-3xl px-5 py-2 text-md font-semibold' style={{backgroundColor:`${bgcolor}`, color:`${color}`}}>
      {content}
    </button>
  )
}
