import { createContext, useReducer } from "react";

import db from '../db.json'

// actions
const SET_SESSION_ROLE = 'SET_SESSION_ROLE';
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
// const ADMIN_ROLE = 'ADMIN_ROLE';
// const ADMIN_ROLE = 'ADMIN_ROLE';

export const Context = createContext();

const defaultState = {
    sessionRole: '',
    empleados: db.empleados
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

        default:
            return state;
    }
}

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const addEmployee = (empleado) => {
        dispatch({
            type: ADD_EMPLOYEE,
            payload: empleado
        })
    }

    return (
        <Context.Provider
            value={{
                ...state,
                addEmployee
            }}
        >
            { children }
        </Context.Provider>
    )
}