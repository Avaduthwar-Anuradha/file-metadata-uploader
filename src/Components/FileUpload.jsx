import React from 'react'
import { useState } from 'react';
import axios from "axios";

const FileUpload = ({getFiles}) => {
    let [file,setFile] = useState(null);

    let handleChange =(e)=>{
        setFile(e.target.files[0]);
    }
    let handleUpload = async ()=>{
        if(!file){
            alert("Please select file");
            return;
        }
    
        let fileData = {
            name : file.name,
            size:(file.size/1024).toFixed(2)+"KB",
            type:file.type,
            uploadedAt:new Date().toLocaleString()
        }
        await axios.post("http://localhost:8080/upload",fileData);
        await getFiles();
        alert("File Uploaded");
    }
  return (
    <>
    <h2 className='text-3xl font-bold text-center text-blue-500 mb-8'>File Metadata Uploader</h2>
    <div className='flex items-center gap-4 mb-6'>
        <input type="file" id='FileUpload'  onChange={handleChange} className='hidden'/>
        <label htmlFor='FileUpload' className='flex items-center w-60 h-20 border-2 border-dashed border-blue-400 rounded-2xl cursor-pointer bg-blue-50 hover:bg-blue-100 p-5'>
            <div className='text-center' >
                <p className='text-xl font-semibold text-blue-500 '>Click to Upload File</p>
                <p className='text-gray-500 mt-2 '>JPG,PNG,PDF files</p>
            </div>
        </label>
        {
            file && (
                <div className='bg-green-100 text-green-700 rounded-xl p-2 font-bold'>Selected File :
                    <span className='font-bold ml-2'>{file.name} </span>
                </div>
            )
        }
    
        <button onClick={handleUpload} className='border bg-blue-400 text-white rounded-xl p-2  cursor-pointer hover:bg-blue-600'>Upload</button>
    </div>
    </>
  )
}

export default FileUpload
