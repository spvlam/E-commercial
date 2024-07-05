import React from 'react';
export interface InputTagProps {
 
    id: string;
    type: string;
    formData ?: { username: string, password: string };
    handleChange ?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTag: React.FC<InputTagProps> = (input) =>{

    return (
        <div>
            <label
                htmlFor={input.id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
               {input.id}
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type={input.type}
                id={input.id} 
                name={input.id}
                onChange={input.handleChange}
            />
        </div>
    );
}

export interface InputListProps {
    inputInfor: Array<
        InputTagProps
    >;
}

const  InputList : React.FC<InputListProps> = (inputArray) =>{
    return (
        <div>
            {inputArray.inputInfor.map((input,index) => (
                <InputTag
                key = {index} 
                 {...input}
                />
            ))}
        </div>

    );
}


export default  InputList ;