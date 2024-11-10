"use client";
import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-500 text-white h-12 py-2 px-3 flex justify-between'>
        <div>
            <h1 className='text-2xl font-semibold'>
                <a href='#!'>Ayesha</a>
            </h1>
            </div>
        <div>
            <ul className='flex space-x-5'>
                <li><Link href="/"className='hover:text-red-600'>Home</Link></li>
                <li><Link href="/about"className='hover:text-red-700'>About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/skill"className="hover:bg-red-600">Skill</Link></li>

            </ul>
        </div>
           
        <div>
            <ul className='flex space-x-3'>
                <li><Link href='#!'className='hover:text-red-700'>login</Link></li>
                <li><Link href='#!'className='hover:text-red-700'>sign up</Link></li>


            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
 