import {
    GET_APPOINTMENT,
    SET_APPOINTMENT,
    EDIT_APPOINTMENT,
    DELETE_APPOINTMENT,
    UPDATE_STATUS_APPOINMENT,
    SET_ACTIVE_SESSION,
    GET_ERROR
} from './types'

const initialState = {
    taskCards: {
        data: [],
        error: [],
        loading: false,
    },
    user: {
        hasAccess: false,
        token: {}
    }
};

const getAppointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APPOINTMENT:
            return {
                ...state,
                taskCards: {
                    ...state.taskCards,
                    data: action.payload,
                    loading: false
                }
            };
        case GET_ERROR:
            return {
                ...state,
                taskCards: {
                    ...state.taskCards,
                    error: action.payload,
                    loading: false
                }
            }
        case DELETE_APPOINTMENT:
            return {
                ...state,
                taskCards: {
                    data: state.taskCards.data.filter(item => item.id !== action.payload)
                }
            }
        case SET_APPOINTMENT:
            return {
                ...state,
                taskCards: {
                    ...state.taskCards,
                    data: [...state.taskCards.data, action.payload]
                }
            }
        case UPDATE_STATUS_APPOINMENT:
            return {
                ...state,
                taskCards: {
                    ...state.taskCards,
                    data: state.taskCards.data.map((item) =>
                        item.id === action.payload.id ? action.payload : item
                    )
                }
            }
        case EDIT_APPOINTMENT:
            
            return {
                ...state,
                taskCards: {
                    ...state.taskCards,
                    data: state.taskCards.data.map((item) =>
                        item.id === action.payload.id ? action.payload : item
                    )
                }
            }
        case SET_ACTIVE_SESSION:
            return {
                ...state,
                user: {
                    ...state.user,
                    hasAccess: true,
                    token: action.payload
                }
            }
        default:
            return state

    }
}

export default getAppointmentReducer