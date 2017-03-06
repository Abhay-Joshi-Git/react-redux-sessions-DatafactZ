const initialState = {
    availableAmount : 5000
}

const finance = (state = initialState, action) => {
    switch (action.type) {
        case 'PURCHASE_SUCCESS':
        case 'PRODUCTION_SUCCESS':
            return {
                ...state,
                availableAmount: state.availableAmount - action.amount
            }
        case 'SALES_SUCCESS':
            return {
                ...state,
                availableAmount: state.availableAmount + action.amount
            }
        default:
            return state;
    }
}

export default finance;
