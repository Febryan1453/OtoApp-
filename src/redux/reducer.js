import { combineReducers } from "redux";

// const initialState = {
//     name: 'Febryan',
// };

const initialStateRegister = {
    title: 'Register Page',
    desc: 'Please fill in some data to process your list.',
};

const initialStateLogin = {
    info: 'Enter your password',
    isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
    return state;
};

const LoginReducer = (state = initialStateLogin, action) => {
    return state;
};

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
});

export default reducer;