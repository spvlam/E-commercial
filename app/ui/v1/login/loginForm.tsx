"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputList from './inputForm';
import { InputListProps } from './inputForm';

export interface loginProps{
    listInfor : InputListProps,
    API_endpoint : string
}

export const LoginForm : React.FC<loginProps> = (loginform)=>  {

    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    loginform.listInfor.inputInfor.forEach((input,index)=>{
        loginform.listInfor.inputInfor[index].handleChange = handleChange;
    })
    const handleSubmit = async (e) => {
        router.push('/'); 
        e.preventDefault();
        try {
            const response = await fetch(loginform.API_endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if(response.status == 200){
                router.push('/'); 
            }else{
                console.log("wrong password")
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" >
            <InputList {...loginform.listInfor}/>
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label
                            // htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                        >
                            Remember me
                        </label>
                    </div>
                </div>
                <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                    Forgot password?
                </a>
            </div>
            <button
                type="submit"
                className="  w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
      font-medium rounded-lg text-sm px-5 py-2.5 text-center
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Log In
            </button>
           
        </form>
    )
}