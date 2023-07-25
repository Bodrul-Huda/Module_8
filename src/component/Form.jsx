import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    date: "",
    title: "",
    details: "",
    amount: "",
  });
  console.log(data);
  const [list, setList] = useState([]);
  // const [show, setShow] = useState(false);

  //   const displayHandler = () => {
  //     setShow(!show);
  //   };

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

  //   const removeHandler = (i) => {
  //     list.splice(i, 1);
  //     setList([...list]);
  //   };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-5 py-24">
          <form
            onSubmit={onSubmit}
            className=" w-2/3 bg-white rounded-lg p-8 shadow-md"
          >
            <div className="relative mb-4">
              <label htmlFor="Date" className="leading-7 text-sm text-gray-600">
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
            <button type="submit" className="btn btn-neutral">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
