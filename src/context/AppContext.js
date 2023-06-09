import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
   
    let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.expenses.map((expense)=>{
                if(expense.department === action.payload.name) {
                    expense.AllocatedBudget = expense.AllocatedBudget + action.payload.quantity;
                    updatedqty = true;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

            case 'RED_QUANTITY':
                state.expenses.map((expense)=>{
                    if(expense.department === action.payload.name) {
                        expense.AllocatedBudget = expense.AllocatedBudget - action.payload.quantity;
                    }
                    expense.AllocatedBudget = expense.AllocatedBudget < 0 ? 0: expense.AllocatedBudget;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.department === action.payload.name) {
                    expense.AllocatedBudget -= 10;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

            case 'ADD_ITEM':
                state.expenses.map((expense)=>{
                    if(expense.department === action.payload.name) {
                        expense.AllocatedBudget += 10;
                    }
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
    case 'CHG_LOCATION':
            action.type = "DONE";
            state.Location = action.payload;
            return {
                ...state
            };

            case 'CHG_BUDGET':
                action.type = "DONE";
                state.budgetValue = action.payload;
                return {
                    ...state
                };

                case 'CHG_BUDGET_LOWER':
                    action.type = "DONE";
                    state.budgetValue = action.payload;
                    return {
                        ...state
                    };


                case ' INCREASE_BUDGET':
                    action.type = "DONE";
                    state.budgetValue = action.payload +10;
                    return {
                        ...state
                    };
                      

                    case ' DECREASE _BUDGET':
                        action.type = "DONE";
                        state.budgetValue = action.payload -10;
                        return {
                            ...state
                        };
                          

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    expenses: [
        { id: "Marketing", department: 'Marketing', AllocatedBudget: 750 },
        { id: "Finance", department: 'Finance', AllocatedBudget: 300 },
        { id: "Sales", department: 'Sales', AllocatedBudget: 70 },
        { id: "Human Resource", department: 'Human Resource', AllocatedBudget: 40},
        { id: "IT", department: 'IT', AllocatedBudget: 500 },
    ],
    Location: '£' ,
    budgetValue : 2000
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total += (item.AllocatedBudget));
    }, 0);


const remaining = state.budgetValue - totalExpenses;
    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                spent: totalExpenses,
                dispatch,
                Location: state.Location,
                budget: state.budgetValue,
                remaining
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};