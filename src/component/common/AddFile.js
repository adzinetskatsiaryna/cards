import React, {useCallback, useRef, useState} from "react";
import {getFile, instance, writeFile, baseURL} from "../../api/api";
import {useDispatch} from "react-redux";
import {loadAvatar} from "../../redux/profileReducer";



const AddFile=(props)=>{
    const inRef=useRef(null);
    const [file,setFile]=useState();
    const [fileURL, setFileURL] = useState();
    // const [fileData,setFileData]=useState();
    // const [code, setCode] = useState(false);
    // const [base64, setBase64] = useState(true); // base64 - true, text - false
    const [text, setText] = useState('');
    const [file64, setFile64] = useState();
    const dispatch=useDispatch();

  const load=(e)=> {
      // const formData = new FormData();  создаем для передачи файлов
      const reader = new FileReader();
      const newFile = e.target.files && e.target.files[0];

      if (newFile) {
          setFile(newFile);
          setFileURL(window.URL.createObjectURL(newFile));
          // formData.append('myFile',newFile,newFile.name); если нужно передать  в виде файла
          // setFileData(formData);
          // }{// reader
          reader.onloadend = () => {
                  setFile64(reader.result);
              };
          newFile && reader.readAsDataURL(newFile);// превращение файлов в строку
              // newFile && reader.readAsText(newFile);// чтение текстовых фалйлов
      };
  }


  // const send=()=>{
  //     const response= instance.post(`/file`,file64);
  // };
  //
    const send=useCallback(()=>{
        dispatch( loadAvatar(file64))
    },[]);



    const returnFileSize = (n) => {
        if (n < 1024) {
            return n + 'bytes';
        } else if (n > 1024 && n < 1048576) {
            return (n / 1024).toFixed(2) + 'KB';
        } else if (n > 1048576) {
            return (n / 1048576).toFixed(2) + 'MB';
        }
    };

    return(
        <div>
            {/*<input type="file" accept=".jpg, .jpeg, .png" multiple/>*/}
            {/*<hr style={{width: '100%'}}/>*/}
            {/*/!*<label>*!/*/}
            {/*/!*    reader*!/*/}
            {/*/!*    <input type={'checkbox'} checked={code} onChange={e => setCode(e.currentTarget.checked)}/>*!/*/}
            {/*/!*</label>*!/*/}
            {/*/!*<label>*!/*/}
            {/*/!*    base64*!/*/}
            {/*/!*    <input type={'checkbox'} checked={base64} onChange={e => setBase64(e.currentTarget.checked)}/>*!/*/}
            {/*/!*</label>*!/*/}
            {/*<img src={fileURL} alt="file" width={'200px'}/>*/}
            {/*<div>*/}
            {/*<div>name:{file && file.name}</div>*/}
            {/*<div>lastModified:{file && file.lastModified}</div>*/}
            {/*<div>size:{file && file.size}</div>*/}
            {/*<div>type:{file && file.type}</div>*/}
            {/*</div>*/}
            {/*/!* eslint-disable-next-line no-undef *!/*/}
           {/*<input  ref={inRef} type="file" onChange={e=>load(e)} />*/}
            {/* eslint-disable-next-line no-undef */}
           <button onClick={()=>inRef && inRef.current && inRef.current.click()}>add</button>
            {/*<textarea value={text} onChange={e => setText(e.currentTarget.value)}/>*/}
            {/*<pre>{file64}</pre>*/}
            <div>
                {/* eslint-disable-next-line no-undef */}
                {/*<button onClick={() => writeFile('Text.txt', text + `\r\n` + file64)}>save</button>*/}
                <button onClick={send}>save avatar</button>
                {/* eslint-disable-next-line no-undef */}
                {/*<button onClick={() => getFile(baseURL + 'file', 'newFile.jpg')}>get</button>*/}
            </div>

            <hr style={{width: '100%'}}/>

            {/*<Video fileURL={fileURL}/>*/}
        </div>
    )
}
export default AddFile;

