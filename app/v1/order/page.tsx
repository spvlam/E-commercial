
'use client'
import ListOrder, { OrderTypeDisplay } from '@/components/orders/orderlist'
import { API_CALL } from '@/config/API_CALL'
import { OrderListInterface } from '@/config/dataInterface/order'


export default async function OrderList () {
  let orList = []
 

 
  let res = await fetch(API_CALL.getALLOrderByMonth, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (res.status == 200) {
    orList = await res.json()
    console.log(orList)
  }

  return (
    <>
      <link
        href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap'
        rel='stylesheet'
      />
      <style
        dangerouslySetInnerHTML={{
          __html: "\n  * {\n  font-family: 'Source Sans Pro';\n  }\n"
        }}
      />
      <div className='mx-auto max-w-screen-xl bg-white'>
        <h1 className='mt-20 mb-10 ml-5 text-2xl font-bold text-gray-900'>
          Order Management
        </h1>
       < OrderTypeDisplay order={orList}/>
      </div>
      <div className='w-screen bg-gray-50'>
        {orList.length ? (
          <ListOrder  />
        ) : (
          <div className='flex items-center justify-center h-32'>
            <span className='text-gray-500 text-lg font-medium bg-gray-200 px-4 py-2 rounded-md shadow-md'>
              No Order For This Month
            </span>
          </div>
        )}
      </div>
     
    </>
  )
}
