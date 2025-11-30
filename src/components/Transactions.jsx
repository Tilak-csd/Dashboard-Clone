import React from 'react'
import {transaction} from '../store/data.js'

export default function Transactions() {
  console.log(transaction);
    const heading = ["Order ID", "Status", "Transaction ID", "Refund Date", "Order Amount"]
    
  return (
    <div>
        <div id="heading"
        className='flex justify-between items-center py-2 px-2 bg-gray-200 mt-5'
        >
          {heading.map((title, idx)=>{
            return <div key={idx}>
              {title}
            </div>
          })}
        </div>
    </div>
  )
}
