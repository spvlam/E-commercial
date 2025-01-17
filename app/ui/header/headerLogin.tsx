'use client'
import React, { useState } from 'react'
import ThemeToggle from './lightMode'
import IconsAnnouce from '@/components/admin/announce'
export default function LoginHeader () {
  
  
  return (
    <nav className=' px- bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <a href='#' className='flex'>
          <svg
            className='h-10 mr-3'
            viewBox='0 0 52 72'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z'
              fill='#76A9FA'
            />
            <path
              d='M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z'
              fill='#A4CAFE'
            />
            <path
              d='M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z'
              fill='#1C64F2'
            />
          </svg>
          <span className='self-center text-lg font-semibold whitespace-nowrap dark:text-white'>
            ADMIN
          </span>
        </a>
        <div className='flex md:order-2'>
          
         <div className = 'flex flex-row items-center justify-start space-x-5'>
          <ThemeToggle />
          
          <IconsAnnouce/>
          </div> 
          
        </div>
        <div
          className=' md:flex justify-between items-center w-full md:w-auto md:order-1'
          id='mobile-menu-4'
        >
          <ul className='flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium'>
            <li>
              <a
                href='/'
                className='bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded dark:text-white'
                aria-current='page'
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href='/v1/product'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                PRODUCTS
              </a>
            </li>
            <li>
              <a
                href='/v1/order'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                ORDERS
              </a>
            </li>
            <li>
              <a
                href='/v1/user'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                USERS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
