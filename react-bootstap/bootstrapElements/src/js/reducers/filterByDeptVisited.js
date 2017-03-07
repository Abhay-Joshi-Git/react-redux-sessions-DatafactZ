const initialState = false

const filterByDeptVisited = (state = initialState, action) => {
    var pattern = new RegExp(/\/employees\/\w/);
    if (action.payload && action.payload.pathname &&
        action.payload.pathname.match(pattern)
    ) {
        return true;
    }
    return state;
}

export default filterByDeptVisited;
