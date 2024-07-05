'use client'
import { useEffect, useState } from 'react'
import { useBetween } from 'use-between'
import { OrderListInterface } from '@/config/dataInterface/order'
import { API_CALL } from '@/config/API_CALL'
import { toast } from 'react-hot-toast'
let orListCurrent = []

const useShareableState = () => {
  const [orderListUpdate, setOrder] =
    useState<OrderListInterface[]>(orListCurrent)
  return {
    orderListUpdate,
    setOrder
  }
}
export const OrderTypeDisplay: React.FC<{ order: OrderListInterface[] }> = ({
  order
}) => {
  const [activeTab, setActiveTab] = useState('incoming')
  const { orderListUpdate, setOrder } = useBetween(useShareableState)
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1

  orListCurrent = order
  const handleTabClick = state => {
    setActiveTab(state)
    if (state == 'total') {
      setOrder(order)
    } else {
      if (order) {
        orListCurrent = order.filter(item => item.status == state)
        setOrder(orListCurrent)
        console.log(orderListUpdate)
      }
    }
  }

  return (
    <div className='bg-white py-2 px-3'>
      <nav className='flex flex-wrap gap-4'>
        <span
          onClick={() => handleTabClick('incoming')}
          className={`inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm  text-gray-600 transition-all duration-200 ease-in-out ${
            activeTab === 'incoming'
              ? 'text-gray-800 border-b-purple-600 font-semibold'
              : 'hover:border-b-purple-600 hover:text-purple-600 font-medium'
          }`}
        >
          INCOMING ORDER
        </span>
        <span
          onClick={() => handleTabClick('preparing')}
          className={`inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm  text-gray-600 transition-all duration-200 ease-in-out ${
            activeTab === 'preparing'
              ? 'text-gray-800 border-b-purple-600 font-semibold'
              : 'hover:border-b-purple-600 hover:text-purple-600 font-medium'
          }`}
        >
          PREPARING ORDER
        </span>
        <span
          onClick={() => handleTabClick('delivering')}
          className={`inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm  transition-all duration-200 ease-in-out ${
            activeTab === 'delivering'
              ? 'text-purple-600 border-b-purple-600 font-semibold'
              : 'hover:border-b-purple-600 hover:text-purple-600'
          }`}
        >
          SHIPPING ORDER
        </span>
        <span
          onClick={() => handleTabClick('cancel')}
          className={`inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm  text-gray-600 transition-all duration-200 ease-in-out ${
            activeTab === 'cancel'
              ? 'text-gray-800 border-b-purple-600 font-semibold'
              : 'hover:border-b-purple-600 hover:text-purple-600 font-medium'
          }`}
        >
          CANCEL REQUIREMENT
        </span>
        <span
          onClick={() => handleTabClick('total')}
          className={`inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm  text-gray-600 transition-all duration-200 ease-in-out ${
            activeTab === 'total'
              ? 'text-gray-800 border-b-purple-600 font-semibold'
              : 'hover:border-b-purple-600 hover:text-purple-600 font-medium'
          }`}
        >
          TOTAL
        </span>
      </nav>
    </div>
  )
}
const RenderRowOrder = ({ order }) => {
  let { order_date, id, ProductName, user_id, total_price, status } = order
  return (
    <tr className='hover:bg-gray-50'>
      <td className='whitespace-normal py-4 text-sm font-medium text-gray-900 sm:px-3'>
        {order_date}
      </td>
      <td className='orderId whitespace-normal py-4 text-sm font-medium text-gray-900 sm:px-3'>
        {id}
      </td>
      <td className='whitespace-normal py-4 text-sm font-medium text-gray-900 sm:px-3'>
        Noi chien
      </td>
      <td className=' CustomerId whitespace-normal py-4 text-sm font-medium text-gray-900 sm:px-3'>
        {user_id}
      </td>
      <td className='whitespace-normal py-4 text-sm font-medium text-gray-900 sm:px-3'>
        ${total_price}
      </td>
      <td className='status whitespace-normal py-4 text-sm font-medium text-gray-900 sm:px-3'>
        {status}
      </td>
      <td className='whitespace-normal py-4 text-sm font-medium text-gray-900 sm:px-3'>
        <input
          id='default-checkbox2'
          type='checkbox'
          defaultValue=''
          className='myclassName w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
      </td>
    </tr>
  )
}
const RenderHead = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = event => {
    const { checked } = event.target
    setIsChecked(checked)
    // Set the second checkbox based on the first checkbox's state
    const checkbox2 = document.getElementsByClassName('myclassName')
    if (checkbox2) {
      Array.from(checkbox2).forEach((checkbox: HTMLInputElement) => {
        checkbox.checked = checked
      })
    }
  }
  return (
    <tr className=''>
      <td className='whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3'>
        Order Date
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='float-right mt-1 h-3 w-3'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='3'
        >
          <path
            strokeLinecap='round' // Use camelCase instead of stroke-linecap='round'
            strokeLinejoin='round' // Use camelCase instead of stroke-linejoin='round'
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </td>

      <td className='whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3'>
        Order ID
      </td>
      <td className='whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3'>
        Product
      </td>

      <td className='whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3'>
        Customer
      </td>
      <td className='whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3'>
        Price
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='float-right mt-1 h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M8 9l4-4 4 4m0 6l-4 4-4-4'
          />
        </svg>
      </td>

      <td className=' whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3'>
        Status
      </td>
      <td className='whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3'>
        <div className='flex items-center mb-4'>
          <input
            id='default-checkbox'
            type='checkbox'
            defaultValue=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor='default-checkbox'
            className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Select all
          </label>
        </div>
      </td>
    </tr>
  )
}

const ListOrder = () => {
  const ClickButton = async (action: string) => {
    const checkbox = document.getElementsByClassName('myclassName')
    let checkbox2: any
    if (checkbox) {
      const checkbox2 = Array.from(
        document.getElementsByClassName(
          'myclassName'
        ) as HTMLCollectionOf<HTMLInputElement>
      )
        .filter((checkbo: HTMLInputElement) => checkbo.checked)
        .map((checkedCheckbox: HTMLInputElement) => {
          const parentElement = checkedCheckbox.parentElement
            ?.parentElement as HTMLElement | null // Get parent element (td)

          if (parentElement) {
            const orderId =
              parentElement.getElementsByClassName('orderId')[0]?.textContent ??
              ''
            const status =
              parentElement.getElementsByClassName('status')[0]
                ?.textContent ?? ''
            return { orderId, status }
          }
        })
        // console.log(checkbox2)
      
        const url = new URL(API_CALL.orderBaseAction);
        url.searchParams.append('orderID', checkbox2[0].orderId);
        url.searchParams.append('status', checkbox2[0].status);

        let res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (res.status === 200) {
          window.location.href = '/v1/order';
        } else {
          console.log(res);
        }
    } else {
      toast('CHOOSE At least one order')
    }
  }
  const { orderListUpdate, setOrder } = useBetween(useShareableState)
  useEffect(() => {}, [orderListUpdate])
  return (
    <>
      <div className='mx-auto max-w-screen-xl px-2 py-10'>
        <div className='mt-4 w-full'>
          <div className='flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0'>
            <form className='relative flex w-full max-w-2xl items-center'>
              <svg
                className='absolute left-2 block h-5 w-5 text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx={11} cy={11} r={8} className='' />
                <line x1={21} y1={21} x2='16.65' y2='16.65' className='' />
              </svg>
              <input
                type='name'
                name='search'
                className='h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2'
                placeholder='Search by Order ID, Date, Customer'
              />
            </form>
            <button
              type='button'
              className='relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0'
            >
              <span className='absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500' />
              <svg
                className='mr-2 h-3 w-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
                />
              </svg>
              Filter
            </button>
          </div>
        </div>
        <div className='mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4'>
          <table className='min-w-full border-collapse border-spacing-y-2 border-spacing-x-2'>
            <thead className='hidden border-b lg:table-header-group'>
              <RenderHead />
            </thead>
            <tbody className='bg-white lg:border-gray-300'>
              {orderListUpdate && orderListUpdate.length > 0 ? (
                orderListUpdate.map((item, index) => (
                  <RenderRowOrder key={index} order={item} />
                ))
              ) : (
                <tr>
                  <td colSpan={6} className='py-4 text-center text-gray-500'>
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className='flex items-center justify-center space-x-10 '
        style={{ marginBottom: '20px', marginTop: '20px' }}
      >
        <button
          onClick={() => ClickButton('delete')}
          className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        >
          DELETE
        </button>
        <button
         onClick={() => ClickButton('reject')}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
          REJECT
        </button>
        <button 
         onClick={() => ClickButton('passTo')}
         className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
          PASS NEXT PROCESS
        </button>
        <button
         onClick={() => ClickButton('accept')}
        className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
          ACCEPCT CANCEL
        </button>
      </div>
    </>
  )
}

export default ListOrder
