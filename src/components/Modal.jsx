import React, { useState } from "react";
import customAxios from "../config/customAxios.js";
import { useDispatch } from "react-redux";

import InputComponent from "./InputComponent.jsx";
import SelectComponent from "./SelectComponent.jsx";
import { setAppointment, editAppointment } from "../store/actions.js";
import { MODALTYPE } from "../config/config.js";
import ButtonComponent from "./ButtonComponent.jsx";

const Modal = (props) => {
  const dispatch = useDispatch();
  const { handleCloseModal, type, data } = props;
  const [appointmentName, setAppointmentName] = useState();
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentStatus, setAppointmentStatus] = useState("Pending");
  const onAppoinmentDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };
  const onAppointmentNameChange = (e) => {
    setAppointmentName(e.target.value);
  };
  const addAppointment = async () => {
    const response = await customAxios.post(
      "/appointment",
      {
        name: appointmentName,
        date: appointmentDate,
        status: appointmentStatus,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    try {
      dispatch(setAppointment(response.data));
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  const updateAppointment = async () => {
    const response = await customAxios.put(
      `appointment/${data.id}`,
      {
        name: appointmentName,
        date: appointmentDate,
        status: appointmentStatus,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    try {
      dispatch(editAppointment(response.data));
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:items-start sm:w-full">
                  <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    {type === MODALTYPE.UPDATE ? "EDIT" : "ADD"} APPOINTMENT
                  </h2>
                  <InputComponent
                    id={"appoinment"}
                    name={"appoinment"}
                    title={"Appointment Name:"}
                    onChange={onAppointmentNameChange}
                    type={"text"}
                    value={
                      type === MODALTYPE.UPDATE ? data.name : appointmentName
                    }
                  />
                  <InputComponent
                    id={"date"}
                    name={"date"}
                    title={"Appointment Date:"}
                    onChange={onAppoinmentDateChange}
                    type={"date"}
                    value={
                      type === MODALTYPE.UPDATE ? data.date : appointmentDate
                    }
                  />
                  <SelectComponent
                    title={"Status: "}
                    id={"status"}
                    name={"status"}
                    options={["Pending", "Completed"]}
                    setAppointmentStatus={(e) => setAppointmentStatus(e)}
                    value={
                      type === MODALTYPE.UPDATE
                        ? data.status
                        : appointmentStatus
                    }
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex sm:flex-row-reverse sm:px-6">
                {type === MODALTYPE.ADD ? (
                  <button
                    type="button"
                    className="mt-3 mr-2 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={addAppointment}
                  >
                    Add
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="mt-3 mr-2 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                      onClick={updateAppointment}
                    >
                      Update
                    </button>
                  </>
                )}
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:w-auto"
                  onClick={() => handleCloseModal()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
