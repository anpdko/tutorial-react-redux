
const defaultState = {
   cash: 0,
}
 
//Праметры: состояние,
//action - объект с обязательным полем type для определения как сосояние будет меняться
export const cashReducer = (state = defaultState, action) => {
   switch (action.type) {
     case "ADD_CASH":
       return {...state, cash: state.cash + action.payload}
     case "GET_CASH":
       return {...state, cash: state.cash - action.payload}
     default:
       return state
   }
 }
 