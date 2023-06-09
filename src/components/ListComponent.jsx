import React from "react";

const ListComponent = (props) => {
  const {
    id,
    name,
    date,
    status,
    key,
    onClick,
    handleDeleteModal,
    toggleStatus,
  } = props;

  const handleDelete = () => {
    handleDeleteModal(id);
  };
  const colorStatus =
    status.toUpperCase() === "PENDING" ? "bg-orange-400" : "bg-green-300";
  return (
    <li
      key={key}
      className={`flex justify-between gap-x-6 py-5 px-5 focus-visible:outline hover:cursor-pointer max-w-sm mx-auto rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300}`}
      onClick={(e) => onClick(e, id)}
    >
      <div className="flex gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-md font-semibold leading-10 text-gray-900">
            {name}
          </p>
          <p className="mt-1 mb-2  truncate text-sm leading-5 text-gray-500">
            {date}
          </p>
          <button
            type="button"
            name="toggleStatus"
            className={`flex justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm ${colorStatus} hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
            onClick={() => toggleStatus(key, status)}
          >
            {status.toUpperCase()}
          </button>
        </div>
      </div>
      <div className="px-2 py-2">
        <button
          type="button"
          name="deleteButton"
          className="flex justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={handleDelete}
        >
          DELETE
        </button>
      </div>
    </li>
  );
};

export default ListComponent;
