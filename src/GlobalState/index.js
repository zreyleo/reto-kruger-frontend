import { createContext, useReducer } from "react";

import db from '../db.json'

// actions
const SET_SESSION_ROLE = 'SET_SESSION_ROLE';
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const SET_EMPLOPYEE_SESSION = 'SET_EMPLOPYEE_SESSION';
// const ADMIN_ROLE = 'ADMIN_ROLE';

export const Context = createContext();

const defaultState = {
    sessionRole: '',
    empleados: db.empleados,
    sessionEmpleado: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_SESSION_ROLE:
            return {
                ...state,
                sessionRole: action.payload
            }
    
        case ADD_EMPLOYEE:
            if (!state.empleados.length) {
                return {
                    ...state,
                    empleados: [action.payload]
                }
            } else {
                if (state.empleados.some(empleado => {
                    return empleado.cedula === action.payload.cedula
                })) {
                    return state;
                } else {
                    return {
                        ...state,
                        empleados: [...state.empleados, action.payload]
                    };
                }
            }

        case SET_EMPLOPYEE_SESSION:
            return {
                ...state,
                sessionEmpleado: action.payload
            }

        default:
            return state;
    }
}

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const setSessionRole = (role) => {
        dispatch({
            type: SET_SESSION_ROLE,
            payload: role
        })
    }

    const addEmployee = (empleado) => {
        dispatch({
            type: ADD_EMPLOYEE,
            payload: empleado
        })
    }

    const setEmployeeSession = (empleado) => {
        dispatch({
            type: SET_EMPLOPYEE_SESSION,
            payload: empleado
        })
    }

    return (
        <Context.Provider
            value={{
                ...state,
                setSessionRole,
                addEmployee,
                setEmployeeSession
            }}
        >
            { children }
        </Context.Provider>
    )
}