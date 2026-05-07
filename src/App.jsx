import FileUpload from './Components/FileUpload';
import FileList from './Components/FileList';
import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'


function App() {
  let[files,setFiles]=useState([]);
    let getFiles = async () =>{
      let response = await axios.get("http://localhost:8080/files");
      setFiles(response.data);
    }
    useEffect(()=>{
      getFiles();
    },[]);
  return (
    <>
    <FileUpload getFiles={getFiles}/>
    <br />
    <FileList files={files}/>
    </>
  )
}

export default App
