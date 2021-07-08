import { combineReducers } from "redux";

// const initialState = {
//     name: 'Febryan',
// };

const initialStateRegister = {
    form:{
        fullName: '',
        email: '',
        password: '',
    },
    title: 'Register Page',
    desc: 'Desc Register',
};

const initialStateLogin = {
    form:{
        email: '',
        password: '',
    },
    info: 'Enter your password',
    isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
    if(action.type === 'SET_TITLE'){
        return{
            ...state,
            title: 'Ganti',
        };
    }

    if(action.type === 'SET_FORM'){
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]: action.inputValue,
            }
            
        };
    }

    return state;
};

const LoginReducer = (state = initialStateLogin, action) => {
    
    if(action.type === 'SET_FORM'){
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]: action.inputValue,
            }
            
        };
    }

    return state;
};

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
});

export default reducer;