const initialState = {
    availableAmount : 500
}

const finance = (state = initialState, action) => {
    switch (action.type) {
        case 'PURCHASE_SUCCESS':
            return {
                ...state,
                availableAmount: state.availableAmount - action.amount
            }
        case 'SALES_SUCCESS':
            return {
                ...state,
                availableAmount: state.availableAmount + action.amount
            }
        case 'PRODUCTION_START':
        return {
            ...state,
            availableAmount: state.availableAmount - action.amount
        }
        default:
            return state;
    }
}

export default finance;
