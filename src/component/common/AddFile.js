import React, {useState} from "react";
import {instance} from "../../api/api";

const AddFile=(props)=>{

    const [file,setFile]=useState();
    const [fileURL, setFileURL] = useState();
    const [fileData,setFileData]=useState();

  const load=(e)=> {
      const formData = new FormData();
      const newFile = e.target.file && e.target.files[0];
      if(newFile){
          setFile(newFile);
          setFileURL(window.URL.createObjectURL(newFile));
          formData.append('myFile',newFile,newFile.name);
          setFileData(formData);
      }
  };
    const returnFileSize = (n) => {
        if (n < 1024) {
            return n + 'bytes';
        } else if (n > 1024 && n < 1048576) {
            return (n / 1024).toFixed(2) + 'KB';
        } else if (n > 1048576) {
            return (n / 1048576).toFixed(2) + 'MB';
        }
    };

  const send=()=>{
      const response= instance.post('/file',fileData);
  };
    return(
        <div>
            <img src={fileURL} alt="file" width={'200px'}/>
            <div>
            <div>name:{file && file.name}</div>
            <div>lastModified:{file && file.lastModified}</div>
            <div>size:{file && file.size}</div>
            <div>type:{file && file.type}</div>
            </div>
            {/* eslint-disable-next-line no-undef */}
           <input  ref={inRef} type="file" onChange={e=>load(e)} />
            {/* eslint-disable-next-line no-undef */}
           <button onClick={()=>inRef && inRef.current && inRef.current.click()}>add</button>
        </div>
    )
}
export default AddFile;

