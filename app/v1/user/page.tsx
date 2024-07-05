import Userlist from "@/components/user/userList"
import { API_CALL } from "@/config/API_CALL"
export default async function User(){
   let Users = []
   let res = await fetch(API_CALL.getAllUser,
      {method:'GET',
      headers:{
         'content-Type':'application'
      }})
      
   if(res.status == 200){
      Users = await res.json()
   }
     return (
        <>
       {Users.length ? (
          <Userlist userLi={Users}  />
        ) : (
          <div className='flex items-center justify-center h-32'>
            <span className='text-gray-500 text-lg font-medium bg-gray-200 px-4 py-2 rounded-md shadow-md'>
              No User 
            </span>
          </div>
        )}
        </>
     )
}