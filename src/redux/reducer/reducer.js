let initialState = {
    contact: [],
    keyword: ""
};

function reducer(state=initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case "ADD_CONTACT":
            return {...state, contact:[...state.contact, {name:payload.name, phoneNumber:payload.phoneNumber}]};
        case "SEARCH_BY_USERNAME":
            state.keyword = payload.keyword;
            break;
        default:
            return {...state};
    }
}

export default reducer;