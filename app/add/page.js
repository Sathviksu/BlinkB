"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Adder = () => {
  const searchParams = useSearchParams();
  const [links, setlinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get('handle') || "");
  const [picture, setpicture] = useState("");
  const [desc, setdesc] = useState("")

  const addlink = (index, value, field) => {
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setlinks(newLinks);
  }

  const addNewLink = () => {
    setlinks([...links, { link: "", linktext: "" }]);
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.info('Link copied!'))
      .catch(() => toast.error('Failed to copy link'));
  };

  const handleHandleChange = (e) => {
    const newHandle = e.target.value.replace(/\s/g, ''); // Remove any spaces
    sethandle(newHandle);
  };

  const submitlink = async () => {
    // Add space validation
    if (handle.includes(' ')) {
      toast.error('Handle cannot contain spaces', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }

    if (handle.length < 3 || picture.length < 5 || links.some(link => link.link.length < 5 || link.linktext.length < 3)) {
      toast.error('Please ensure all fields meet the minimum length requirements.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      handle,
      links,
      picture,
      desc
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    let r = await fetch("Http://localhost:3000/api/add", requestOptions);
    let result = await r.json();
    if (result.success) {
      const blinkLink = `http://localhost:3000/${handle}`;
      
      toast.success(
        <div className="min-w-[400px] w-full">
          <div className="text-xl font-semibold mb-3">Link added successfully! 🎉</div>
          <div className="mt-2 p-4 bg-gray-800 rounded-lg flex justify-between items-center gap-4">
            <span className="text-base text-gray-300 break-all">{blinkLink}</span>
            <button 
              onClick={() => copyToClipboard(blinkLink)}
              className="px-4 py-2 text-sm bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
            >
              Copy
            </button>
          </div>
        </div>,
        {
          position: "top-center",
          autoClose: 15000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style: {
            maxWidth: "600px",
            width: "70vw"
          }
        }
      );
    } else {
      toast.error(result.message || 'Something went wrong!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    sethandle("");
    setpicture("");
    setdesc("");
    setlinks([{ link: "", linktext: "" }]);
  }

  return (
    <div>
      <div className='bg-[url("/pagebg.jpg")] flex items-center justify-center min-h-screen bg-cover'>        
        <div className='left gap-4 w-[55%] flex flex-col min-h-screen pt-[140px] ml-[200px]'>
          <div className='text-2xl font-bold text-[#f6f684]'>Create your Blink</div>
          <h1 className='text-[#FFEB00]'>Step 1:Claim your handle</h1>
          <input 
            value={handle || ""} 
            onChange={handleHandleChange}
            type='text' 
            placeholder='Choose a handle' 
            className='bg-[#d9f1fa] w-[250px] pl-4 h-[40px] rounded-2xl text-[#232323]'
          />
          <h1 className='text-[#FFEB00]'>Step 2:Add your links</h1>
          {links && links.map((link, index) => {
            return <div className='flex gap-4' key={index}>
              <input value={link.linktext || ""} onChange={(e) => addlink(index, e.target.value, 'linktext')} type='text' placeholder='Enter link Text' className='bg-[#d9f1fa] pl-4 h-[40px] w-[250px] rounded-2xl text-[#232323]'></input>
              <input value={link.link || ""} onChange={(e) => addlink(index, e.target.value, 'link')} type='text' placeholder='Enter link' className='bg-[#d9f1fa] pl-4 h-[40px] w-[250px] rounded-2xl text-[#232323]'></input>
            </div>
          })}
          <button onClick={addNewLink} className='h-[50px]  mt-3 bg-[#57ee75] text-[#16423C] text-[20px] font-semibold rounded-2xl w-[200px] hover:bg-[#73EC8B] hover:shadow-[0_0_10px_#54C392] ml-[150px]'>Add Link</button>
          <h1 className='text-[#FFEB00]'>Step 3:Add picture and Description</h1>
          <input value={picture || ""} onChange={(e) => setpicture(e.target.value)} type='text' placeholder='Enter link to your picture' className='bg-[#d9f1fa] w-[400px] pl-4 h-[40px] rounded-2xl text-[#232323]'></input>
          <input value={desc || ""} onChange={(e) => setdesc(e.target.value)} type='text' placeholder='Enter your description' className='bg-[#d9f1fa] w-[400px] pl-4 h-[40px] rounded-2xl text-[#232323]'></input>

          <button disabled={handle=="" || picture==""}  onClick={submitlink} className='disabled:bg-[#436149] h-[50px] ml-[100px] mt-3 bg-[#57ee75] text-[#16423C] text-[20px] font-semibold rounded-2xl w-[300px] hover:bg-[#73EC8B]  hover:shadow-[0_0_10px_#54C392] mb-7'>Create Blink</button>
        </div>
        <div className='right w-[45%] min-h-screen flex flex-col items-center justify-center'>
          <img src='/image7.png' className='h-[550px] rounded-3xl mt-[130px] floating fixed'></img>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  )
}

export default Adder