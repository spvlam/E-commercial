// MessagingIcon.tsx
'use client'
import React from 'react'
const getMessage =()=>{
    console.log(1111)
}
const MessagingIcon: React.FC = () => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <path d='M2 2h20v20H2z' fill='none' />
    <path d='M12 4C7.59 4 4 7.59 4 12s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z' />
  </svg>
)

const NotificationsIcon: React.FC = () => (
  <button className='flex flex-row items-center justify-center' onClick={getMessage}>
    <svg width='24' height='24' viewBox='0 0 24 24'>
      <path d='M2 2h20v20H2z' fill='none' />
      <path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-2.97-2.16-5.43-5-5.91V4c0-.55-.45-1-1-1s-1 .45-1 1v1.09c-2.84.48-5 2.94-5 5.91v5l-1 1v1h16v-1l-1-1z' />
    </svg>
  </button>
)

const MeIcon: React.FC = () => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <path d='M2 2h20v20H2z' fill='none' />
    <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
  </svg>
)

const IconsAnnouce: React.FC = () => {
  return (
    <div className="flex flex-row" style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '20px' }}>
        <MessagingIcon />
      </div>
      <div style={{ marginRight: '20px' }}>
        <NotificationsIcon />
      </div>
      <div>
        <MeIcon />
      </div>
    </div>
  )
}

export default IconsAnnouce
