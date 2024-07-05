import {LoginForm, loginProps} from "@/app/ui/v1/login/loginForm"
import { InputTagProps, InputListProps } from "@/app/ui/v1/login/inputForm";
let inputTag1: InputTagProps = {
    id: 'username',
    type: 'text',
    
   
}
let inputTag2 : InputTagProps = {
    id: 'password',
    type: 'password',
    
}
let inputListProps: InputListProps = {
    inputInfor: [inputTag1, inputTag2],
};

let loginData: loginProps ={
    listInfor : inputListProps,
    API_endpoint : "https://ebe3d93d-8e0c-4fe6-b0e7-81680b06c56e.mock.pstmn.io/login"
}

export default function login() {
    
   
    return (
        <section className="bg-gray-50 dark:bg-gray-900 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    Flowbite
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <LoginForm {...loginData}/>
                        <div>
                        <p className="text-sm font-black text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                    href="register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                    Sign up
                </a>
            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}