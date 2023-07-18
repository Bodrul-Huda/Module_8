import { useState } from "react";
import Display from "./Display";

const Content = () => {
  const [data, setData] = useState({ title: "", details: "" });
  const [list, setList] = useState([]);

  const onChangeHandler = (property, value) => {
    setData((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    list.push(data);
    setList([...list]);
  };

  const removeHandler = (i) => {
    list.splice(i, 1);
    setList([...list]);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-5 py-24">
          <form
            onSubmit={onSubmit}
            className=" w-2/3 bg-white rounded-lg p-8 shadow-md"
          >
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              ToDo
            </h2>

            <div className="relative mb-4">
              <label
                htmlFor="Title"
                className="leading-7 text-sm text-gray-600"
              >
                Title
              </label>
              <input
                onChange={(e) => onChangeHandler("title", e.target.value)}
                value={data.title}
                type="text"
                id="title"
                name="title"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="Details"
                className="leading-7 text-sm text-gray-600"
              >
                Details
              </label>
              <textarea
                onChange={(e) => onChangeHandler("details", e.target.value)}
                value={data.details}
                id="details"
                name="details"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg"
            >
              Add to List
            </button>
          </form>
        </div>
        <Display todo={list} removeHandler={removeHandler} />
      </div>
    </>
  );
};

export default Content;
