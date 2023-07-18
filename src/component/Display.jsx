const Display = (props) => {
  // eslint-disable-next-line react/prop-types
  const { todo, removeHandler } = props;

  return (
    <>
      {todo.length > 0 && (
        <div>
          <div className="flex justify-center px-5 py-24">
            <div className=" w-2/3 bg-slate-300 rounded-lg p-8 shadow-md">
              <div>
                {todo.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded flex justify-between my-2 p-2 h-full items-center"
                  >
                    <div className="flex items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs p-4">{item.details}</p>
                    <button
                      onClick={() => removeHandler(i)}
                      className="text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
