'use client'
import React, { useState } from 'react';
import ProductDetail from '@/components/products/productDetail';
export default function Card ({ item }) {
  
  let { name, description, image } = item
  const [showProductDetail, setShowProductDetail] = useState(false);

  const handleUpdateClick = () => {
    setShowProductDetail(true);
  };

  const handleCloseProductDetail = () => {
    setShowProductDetail(false);
  };

  return (
    <div
      style={{ margin: '20px', width: '100%' }}
      className='  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
     
    >
      <a href='#'>
        <img className='rounded-t-lg ' src={image} alt='' style={{ width: '100%', height:'60%'  }} />
      </a>
      <div className='p-5  flex-1'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {name}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400' style={{  minHeight: '60px' ,textOverflow: 'ellipsis' }} >
          {description}
        </p>
        <button
        
          className='inline-flex justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          style={{ marginTop: 'auto' }}
          onClick={handleUpdateClick}
       >
          UPDATE 2
          <svg
            className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </button>
      </div>
      {
        showProductDetail  && <ProductDetail item={item} onClose={handleCloseProductDetail}/>
      }
    </div>
  )
}
