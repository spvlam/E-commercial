'use client'
import userAction from "@/router/users"


function UserRow ({ user }) {
  let { user_name, user_id, email, number_device } = user
  const handleDeleteClick = (event) => {
    // Find the grandparent element of the button
    const grandParentElement = event.target.closest('.grand-parent');

    // Hide the grandparent element
    if (grandParentElement) {
      grandParentElement.style.display = 'none';
    }
  };
  return (
    <tr className="grand-parent">
      <td className=' px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            <img
              className='h-10 w-10 rounded-full'
              src='https://i.pravatar.cc/150?img=1'
              alt=''
            />
          </div>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>{user_name}</div>
            <div className='text-sm text-gray-500'>{email}</div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>{user_id}</div>
        <div className='text-sm text-gray-500'>Optimization</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
          {number_device ? 'active' : 'inactive'}
        </span>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        User
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {email}
      </td>
      <td className='px-6 py-4 whitespace-nowrap  text-sm font-medium'>
        <button className='text-indigo-600 hover:text-indigo-900'>Edit</button>
        <button   onClick={handleDeleteClick} className='ml-2 text-red-600 hover:text-red-900'>Delete</button>
      </td>
    </tr>
  )
}

export default function Userlist ({ userLi }) {
  return (
    <div className="flex justify-center items-center " style={{margin:'20px',   padding: "20px" ,border:'border: 15px solid black'}}>
       <table className='min-w-full divide-y divide-gray-200 overflow-x-auto'>
      <thead className='bg-gray-50'>
        <tr>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Name
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Title
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Status
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Role
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Email
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        {userLi.map((item, index) => {
          return <UserRow key={index} user={item} />
        })}
      </tbody>
    </table>
    </div>
   
  )
}
