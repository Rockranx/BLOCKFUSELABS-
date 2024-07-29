import React from "react";

const Home = ({ task, onEdit, onDelete }) => {
  return (
    <>
   
      <div className="full">
        <span>{task.title}</span>
        <span>{task.desc}</span>
        <span>{task.id}</span>
        {/* <button onClick={() => onEdit(task)}>Edit</button> */}

        <button className="btn" onClick={() => onEdit(task)}>
          <p className="paragraph"> Edit </p>
          <span className="icon-wrapper">
            <svg
              className="svg-icon"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#a649da" strokeLinecap="round" strokeWidth="2">
                <path d="m20 20h-16"></path>
                <path
                  clipRule="evenodd"
                  d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z"
                  fillRule="evenodd"
                ></path>
              </g>
            </svg>
          </span>
        </button>

        {/* <button onClick={() => onDelete(task.id)}>Delete</button> */}

        <button className="btn" onClick={() => onDelete(task.id)}>
          <p className="paragraph"> delete </p>
          <span className="icon-wrapper">
            <svg
              className="icon"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default Home;
