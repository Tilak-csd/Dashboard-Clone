import React from 'react'

export default function SideBar() {
  return (
    <div>
      <div>
        <img src="./logo.png" alt="" />
        <div>
          <h1>Tilak-csd</h1>
          <a href="#">Visit Store</a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className='text-black w-5 h-5 size-1' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div>
        home
        orders
        products
      </div>

      <div>
        Available credits
      </div>

    </div>
  )
}
