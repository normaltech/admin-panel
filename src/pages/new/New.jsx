import { Navbar } from '../../component/navbar/Navbar'
import { Sidebar } from '../../component/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import './new.scss'
import { useState } from 'react';

export const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
              </div>
              {inputs.map((input) => (
                <div className='formInput' key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              {/* <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='john_doe@gmail.com' />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone number</label>
                <input type="text" placeholder='+1 234 567 89' />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password"  />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Elton St. 234 NewYork'  />
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text"  placeholder='USA' />
              </div> */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
