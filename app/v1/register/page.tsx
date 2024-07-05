"use client"
import {LoginForm, loginProps} from "@/app/ui/v1/login/loginForm"
import { InputTagProps, InputListProps } from "@/app/ui/v1/login/inputForm";
let inputTag0: InputTagProps = {
  id: 'email',
  type: 'email',
}
let inputTag1: InputTagProps = {
  id: 'username',
  type: 'text',
}
let inputTag2 : InputTagProps = {
  id: 'password',
  type: 'password',
  
}
let inputTag3 : InputTagProps = {
  id: 'reTypepassword',
  type: 'password',
  
}
let inputTag4 : InputTagProps = {
  id: 'Date Of Birth',
  type: 'date',
  
}
let inputTag5: InputTagProps = {
  id: 'Address',
  type: 'text',
}
let inputListProps: InputListProps = {
  inputInfor: [inputTag0,inputTag1, inputTag2,inputTag3,inputTag4,inputTag5],
};

let loginData: loginProps ={
  listInfor : inputListProps,
  API_endpoint : "https://ebe3d93d-8e0c-4fe6-b0e7-81680b06c56e.mock.pstmn.io/login"
}


export default function register(){
    return (
        
  <div className=" bg-gray-400 dark:bg-gray-900">
    {/* Container */}
    <div className="mx-auto">
      <div className="flex justify-center px-6 py-12">
        {/* Row */}
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          {/* Col */}
          <div
            className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")'
            }}
          />
          {/* Col */}
          <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
            <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
              Create an Account!
            </h3>
            <LoginForm {...loginData}/>
          </div>
        </div>
      </div>
    </div>
  </div>


    )
}