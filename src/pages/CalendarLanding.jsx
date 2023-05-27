import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import customAxios from "../config/customAxios";
import {
  getAppointment,
  editStatusAppointment,
  deleteAppointment,
} from "../store/actions";
import ListComponent from "../components/ListComponent";
import { MODALTYPE, STATUSTYPE } from "../config/config";
import SearchComponent from "../components/SearchComponent";
import AddUpdateComponent from "../components/AddUpdateComponent";

const CalendarLanding = () => {
  const [openAddTask, setOpenAddTask] = useState(false);
  const [modalType, setModalType] = useState();
  const [selectedTask, setSelectedTask] = useState(null);
  const [searchTask, setSearchTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const dispatch = useDispatch();

  const appointmentList = useSelector((state) => state.taskCards.data);

  const getAppointmentList = async (path) => {
    try {
      const response = await customAxios.get(path);
      dispatch(getAppointment(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAppointmentTask = async (path, id) => {
    try {
      const response = await customAxios.get(`${path}/${id}`);
      setSelectedTask(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAppointmentTask = async (path, id) => {
    const response = await customAxios.delete(`${path}/${id}`);
    try {
      dispatch(deleteAppointment(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointmentList("/appointment");
  }, []);

  useEffect(() => {
    setTaskList(appointmentList);
  }, [appointmentList]);

  const handleUpdateButton = (e, id) => {
    if (e.target.name === "deleteButton") {
      e.preventDefault();
      e.stopPropagation();
    } else if (e.target.name === "toggleStatus") {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setModalType(MODALTYPE.UPDATE);
      fetchAppointmentTask("/appointment", id);
      setOpenAddTask(!openAddTask);
    }
  };

  const handleAddButton = () => {
    setOpenAddTask(!openAddTask);
    setModalType(MODALTYPE.ADD);
  };
  const handleCloseModal = () => {
    setOpenAddTask(!openAddTask);
    setSelectedTask(null);
  };

  const handleDeleteButton = (id) => {
    deleteAppointmentTask("/appointment", id);
    getAppointmentList("/appointment");
  };

  const updateStatusAppointment = async (path, id, nextStatus) => {
    try {
      const response = await customAxios.patch(
        `${path}/${id}`,
        {
          status: nextStatus,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(editStatusAppointment(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleStatus = (id, currentStatus) => {
    const nextStatus =
      currentStatus.toUpperCase() === STATUSTYPE.PENDING
        ? STATUSTYPE.COMPLETED
        : STATUSTYPE.PENDING;
    updateStatusAppointment("/appointment", id, nextStatus);
    getAppointmentList("/appointment");
  };

  const handleSearchChange = (e) => {
    setSearchTask(e.target.value);
  };

  const filteredTaskList = taskList.filter((task) => {
    return task.name.toLowerCase().includes(searchTask.toLowerCase());
  });

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <ul role="list" className="divide-y divide-gray-100 rounded-sm">
        <SearchComponent
          onHandleChange={handleSearchChange}
          value={searchTask}
        />
        {filteredTaskList.map((item, i) => (
          <ListComponent
            key={i}
            id={item.id}
            name={item.name}
            status={item.status}
            date={item.date}
            onClick={(e) => handleUpdateButton(e, item.id)}
            handleDeleteButton={() => handleDeleteButton(item.id)}
            toggleStatus={() => toggleStatus(item.id, item.status)}
          />
        ))}
      </ul>
      <div className=" px-4 py-3 flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleAddButton}
        >
          ADD TASK
        </button>
      </div>
      {openAddTask &&
        (selectedTask !== null || modalType === MODALTYPE.ADD) && (
          <AddUpdateComponent
            handleCloseModal={handleCloseModal}
            type={modalType}
            data={modalType === MODALTYPE.UPDATE ? selectedTask : {}}
          />
        )}
    </div>
  );
};

export default CalendarLanding;
