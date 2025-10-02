import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import axios from 'axios';
import { serverUri } from '../App';
import { useLocation } from 'react-router-dom';

const Write = () => {
  const state = useLocation().state
  const [value, setValue] = useState(state?.content || '');
  const [title, setTitle] = useState(state?.title || '');
  const [cat, setCat] = useState(state?.cat || '');
  const [description, setDescription] = useState(state?.description || '');
  const [file, setFile] = useState(null);


  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file)
      const res = await axios.post(`${serverUri}/api/upload`, formData, { withCredentials: true })
      console.log(res.data);

    } catch (error) {
      console.log(error);

    }
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    const imgUrl = upload()
    try {
      state ? await axios.put(`${serverUri}/api/posts/${state.id}`, { title, description, content: value, cat, image: file ? imgUrl : '' }, { withCredentials: true }) : await axios.post(`${serverUri}/api/posts`, { title, description, content: value, cat, image: file ? imgUrl : '' }, { withCredentials: true }) 
    } catch (error) {

    }
  }
  return (
    <div>
      <Navbar />

      <div className="add flex flex-col lg:flex-row gap-5 p-4 lg:p-10 max-w-7xl mx-auto mt-5 text-black">

        <div className="content flex-grow lg:w-3/4 flex flex-col gap-5">

          <input
            type="text"
            placeholder="Title"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-black"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            placeholder="Short Description / Summary (Appears on Home Page)"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none h-24"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <div className="editorContainer h-80 overflow-y-auto border border-gray-300 rounded-md">
            <ReactQuill
              className="editor h-full border-none "
              theme="snow"
              value={value}
              onChange={setValue}
              placeholder='Start writing content here....'
            />
          </div>

        </div>

        <div className="menu lg:w-1/4 flex flex-col gap-5">

          <div className="item border border-gray-300 rounded-md p-4 flex flex-col gap-3 text-sm text-gray-600">
            <h1 className="text-xl font-bold text-gray-800">Publish</h1>

            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>

            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <label
              className="file cursor-pointer underline text-teal-600 hover:text-teal-800"
              htmlFor="file"
            >
              Upload Image
            </label>

            <div className="buttons flex justify-between mt-3">
              <button className="cursor-pointer text-teal-600 bg-white border border-teal-600 rounded px-3 py-1 text-xs hover:bg-teal-50 transition">
                Save as a draft
              </button>
              <button onClick={handleSubmit} className="cursor-pointer text-white bg-teal-600 border border-teal-600 rounded px-3 py-1 text-xs hover:bg-teal-700 transition">
                Publish
              </button>
            </div>
          </div>

          <div className="item border border-gray-300 rounded-md p-4 flex flex-col gap-2 text-sm text-gray-600">
            <h1 className="text-xl font-bold text-gray-800 mb-2">Category</h1>

            {['art', 'science', 'technology', 'cinema', 'design', 'food'].map((category) => (
              <div className="cat flex items-center gap-1.5 hover:text-teal-600 transition" key={category}>
                <input
                  type="radio"
                  checked={cat === category}
                  name="cat"
                  value={category}
                  id={category}
                  className="form-radio text-teal-600 w-4 h-4 cursor-pointer"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor={category} className="cursor-pointer capitalize text-base">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Write;