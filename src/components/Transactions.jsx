import React from 'react'
import { transaction } from '../store/data.js'
import { useRecoilState } from 'recoil'
import { StatusAtom } from '../store/atoms/main.js'

export default function Transactions() {
  // const [color, setColor] = useRecoilState(StatusAtom)
  console.log(transaction);
  const heading = ["Order ID", "Status", "Transaction ID", "Refund Date", "Order Amount"]

  return (
    <div>
      <div className="grid grid-cols-5 gap-5 py-2 px-2 bg-gray-200 mt-5">
        {heading.map((title, idx) => (
          <div key={idx}
          className={idx === heading.length - 1 ? "justify-self-end" : ""}
          >{title}</div>
        ))}
      </div>

      {transaction.map((details, idx)=> (
        <div
          key={idx}
          className="grid grid-cols-5 gap-5 py-2 px-2"
        >
          <div className='text-blue-700'>#{details.OrderId}</div>
          {details.Status === "Processing" && <div className='flex items-center gap-1'>
            <div className='w-2.5 h-2.5 rounded-full bg-gray-400'></div>
            {details.Status}
          </div>}
          {details.Status === "Successfull" && <div className='flex items-center gap-1'>
            <div className='w-2.5 h-2.5 rounded-full bg-green-600'></div>
            {details.Status}
          </div>}

          <div>{details.TransactionId}</div>
          <div>{details.RefundDate}</div>
          <div className='justify-self-end'>{details.OrderAmount}</div>
        </div>
      ))}

    </div>
  )
}
