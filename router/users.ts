import { API_CALL } from "@/config/API_CALL";
import { toast } from 'react-hot-toast'
export default async function userAction({userId}){
     let res = await fetch(API_CALL.deleteUserById+userId,{
        method:'GET',
        headers:{
            'content-Type':'application'
        }
     })
     if (res.status == 200){
        window.location.href = '/user'
     }else{
        toast('some thing wrong - try again')
     }
}