import {
    GET_APPOINTMENT,
    SET_APPOINTMENT,
    EDIT_APPOINTMENT,
    DELETE_APPOINTMENT,
    UPDATE_STATUS_APPOINMENT,
    SET_ACTIVE_SESSION,
    GET_LOGIN_ERROR
} from './types'

export const getAppointment = (payload) => {
    return {
        type: GET_APPOINTMENT,
        payload: payload
    }
}

export const getLoginError = (payload) => {
    return {
        type: GET_LOGIN_ERROR,
        payload: payload
    }
}

export const setAppointment = (payload) => {
    return {
        type: SET_APPOINTMENT,
        payload: payload
    }
}

export const deleteAppointment = (id) => {
    return {
        type: DELETE_APPOINTMENT,
        payload: id
    }
}

export const editAppointment = (payload) => {
    console.log(payload)
    return {
        type: EDIT_APPOINTMENT,
        payload: payload
    }
}

export const editStatusAppointment = (payload) => {
    return {
        type: UPDATE_STATUS_APPOINMENT,
        payload: payload
    }
}

export const setActiveSession = (payload) => {
    return {
        type: SET_ACTIVE_SESSION,
        payload: payload
    }
}