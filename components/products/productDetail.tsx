'use client'
import { useEffect, useRef, useState } from 'react';

import React from 'react'

function ProductDetail ({ item , onClose  }){
  
  const { name, description, image,id } = item
  let [imageUpload, SetImageUpload] = useState(image)
  let modalRef = useRef(null);
  const [file, setFile] = useState(null);

  async function  uploadimage (){
    if (!imageUpload) {
      alert('Please select a file first');
      return;
    }
    const formData = new FormData();
    formData.append('filename', file); 
    formData.append('id', id);


    try {
      const response = await fetch('http://localhost:3000/product/noauth/addProduct', {
        method: 'POST',
        body: formData,
        // headers: {
        //   "Content-Type": "image/jpeg",
        // },
      });

      if (!response.ok) {
        console.log(response)
        throw new Error(`HTTP error! status: ${response.status}`);
      }else{
        window.location.href = '/'
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        SetImageUpload(reader.result); // Set the uploaded file as the image source
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
    <div  ref={modalRef} className="bg-white rounded-lg shadow-lg p-8 sm:w-70 md:w-70 lg:w-70 xl:w-70"  style={{ width: '70%', height: '70%' }}>
      <div className="flex flex-row  h-full ">
        <div className=" flex justify-center w-1/2 h-full items-center bg-green-400">
        {imageUpload ? (
              <img
                src={imageUpload}
                alt="Uploaded Image"
                className="rounded-lg"
                style={{ maxWidth: '100%', maxHeight: '70%' }}
              />
            ) : (
              <span>No image uploaded</span>
            )}
        </div>
        <div className="w-1/2 pl-4 flex flex-col justify-center">
          <div className="mb-4">
            <input
              type="text"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="Enter name"
              id="name"
              defaultValue={name}
            />
          </div>
          <div className="mb-4">
            <textarea
              id="description"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 resize-y"
              placeholder="Enter description"
              defaultValue={description}
              rows={5} // Initial number of rows (adjust as needed)
            />
          </div>
          <div className="mb-4">
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file" name="filename"
              onChange={handleFileChange}
            />
          </div>
          <button onClick={uploadimage} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            UPDATE 3
          </button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default ProductDetail
