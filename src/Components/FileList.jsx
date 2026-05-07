import React from 'react'

const FileList = ({files}) => {
  return (
    <div className='overflow-x-auto'>
        <h2 className='text-3xl font-bold text-center text-orange-500 mb-8'>Uploaded Files</h2>
        <table className='w-full border-collapse shadow-md rounded-lg overflow-hidden'>
            <thead className='bg-blue-500 text-white'>
                <tr>
                    <th className='p-3 text-center'>File Name</th>
                    <th className='p-3 text-center'>Size</th>
                    <th className='p-3 text-center'>Type</th>
                    <th className='p-3 text-center'>Uploaded Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    files.map((file,id)=>(
                        <tr key={id} className='border-b hover:bg-gray-100 transition'>
                            <td className='p-3 text-center'>{file.name} </td>
                            <td className='p-3 text-center'>{file.size}</td>
                            <td className='p-3 text-center'>{file.type}</td>
                            <td className='p-3 text-center'>{file.uploadedAt}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default FileList
