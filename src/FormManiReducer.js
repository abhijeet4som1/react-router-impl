import initialState from './store/initialState';

const FormManiReducer = (state = initialState.formmani, action) => {
    switch(action.type){
        case "ADD_NAMES":
            let newNames = [...state.names];
            newNames.push(action.nameEntry);
            return {
                ...state,
                names: newNames
            }
        case "DELETE_NAMES":
            let nNames = [...state.names];
            nNames.splice(action.index, 1);
            return {
                ...state,
                names: nNames
            }
        default:
            return state
    }
}

export default FormManiReducer;