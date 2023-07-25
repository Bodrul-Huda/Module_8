import React from "react";
import Layout from "../Layout/Layout";
import { FaPlus } from "react-icons/fa";
import Table from "../component/Table";
import { useState } from "react";

const Income = () => {
  const [data, setData] = useState({
    date: "",
    title: "",
    details: "",
    amount: "",
  });
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);

  const onChangeHandler = (property, value) => {
    setData((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const total = React.useMemo(() =>
    list.reduce((sum, row) => parseFloat(row.amount) + parseFloat(sum), 0)
  );

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
    <Layout>
      <div>
        <h1 className="text-xl font-semibold text-center pt-4">
          Income Statement
        </h1>
        <div className="container mx-auto">
          {show === true ? (
            <div className="flex justify-center px-5 py-24">
              <form className=" w-2/3 bg-white rounded-lg p-8 shadow-md">
                <div
                  onClick={() => setShow(false)}
                  className=" flex justify-end py-2 cursor-pointer "
                >
                  <span>X</span>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="Date"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Date
                  </label>
                  <input
                    onChange={(e) => onChangeHandler("date", e.target.value)}
                    value={data.date}
                    type="date"
                    id="date"
                    name="date"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
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
                <div className="relative mb-4">
                  <label
                    htmlFor="Amount"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Amount
                  </label>
                  <input
                    onChange={(e) => onChangeHandler("amount", e.target.value)}
                    value={data.amount}
                    type="text"
                    id="amount"
                    name="amount"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  className="btn btn-neutral"
                  onClick={(e) => {
                    onSubmit(e);
                    setShow(false);
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div className="pt-12">
              {show === false && (
                <button
                  onClick={() => setShow(true)}
                  className="bg-sky-600 py-2 px-16 font-semibold text-white rounded-md hover:bg-sky-400 flex items-center gap-2"
                >
                  Add <FaPlus />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto pt-6">
        <Table list={list} removeHandler={removeHandler} total={total} />
      </div>
    </Layout>
  );
};

export default Income;
