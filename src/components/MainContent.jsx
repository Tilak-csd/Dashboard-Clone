import React from 'react'
import DropdownMonth from './DropdownMonth'
import NextPayout from './amount/NextPayout'
import AmountPending from './amount/AmountPending'
import AmountProcessed from './amount/AmountProcessed'
import Button from './UI/Button'
import Filter from './Filter'
import Transactions from './Transactions'

export default function MainContent() {
  return (
    <div className='h-auto overflow-y-scroll scroll-hide p-3 bg-[#f1efe9] '>
      {/* top line of the main content side */}
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold text-gray-700'>Overview</h1>
        {/* dropdown for selecting the months */}
        <DropdownMonth />
      </div>
      {/* card option amount of transaction  */}
      <div className='flex justify-center items-start mt-5 gap-5 flex-col'>
        <NextPayout />
        <AmountPending />
        <AmountProcessed />
      </div>

      {/* Transaction This month */}
      <div className='mt-6'>
        {/* headings section */}
        <h1 className='text-xl font-semibold text-gray-700'>Transactions | This Month</h1>
        {/* buttond for payouts and refunds */}
        <div className='flex gap-2 my-5'>
          <Button content={"Payouts (22)"} bgcolor={"#e5e7eb"} color={"#6B7280"} />
          <Button content={"Refunds (8)"} bgcolor={"#1E40AF"} color={"#ffff"} />
        </div>
        {/* search bar and filtering for transactions ID or Order ID */}
        <Filter />

        {/* datas of the transaction and billing */}
      </div>
        <Transactions />
    </div>
  )
}
