import React from "react";
import Modal from "./Modal";

const ErrorComponent = ({ errorData, handleCloseModal }) => {
  const { data, statusText } = errorData;
  return (
    <Modal>
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:items-start sm:w-full">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              {statusText}
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{data}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:w-auto"
            onClick={() => handleCloseModal()}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorComponent;
