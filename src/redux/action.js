export const setForm = (value, input) => {
    // type adalah parameter yang wajib pada dispatch untuk keperluan di reducer
    return ({
        type: 'SET_FORM', 
        inputType: input, 
        inputValue: value
    });
};