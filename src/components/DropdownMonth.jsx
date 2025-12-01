import React, { useState } from 'react'

export default function DropdownMonth() {
    const [yes, setYes] = useState(false)
    const [month, setMonth] = useState("This Month")
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
        <div className='relative'>
            <div
                onClick={() => setYes(prev => !prev)}
                className='w-35 flex justify-center items-center p-2 bg-[#f5f5f5] border-1 border-gray-300 rounded-md text-md text-gray-500 cursor-pointer'>
                {month} <svg xmlns="http://www.w3.org/2000/svg" className='text-gray-600 w-6 h-6 font-bold size-1 ml-1' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {yes && <Month months={months} setMonth={setMonth} setYes={setYes} />}
        </div>
    )
}

function Month({ months, setMonth, setYes }) {
    return (
        <div className='w-35 p-2 absolute border-[1px] border-gray-300 bg-white  rounded-md'>
            {months.map((month, idx) => {
                return <li key={idx}
                    onClick={() => {
                        setYes(prev => !prev)
                        setMonth(month)
                    }}
                    className='w-full text-center text-gray-500 hover:bg-gray-300 text-md rounded-md list-none cursor-pointer'>{month}</li>

            })}

        </div>
    )
}