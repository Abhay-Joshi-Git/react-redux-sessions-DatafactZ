const initialState = [
    {
        name: 'table',
        availableAmount: 0
    }
];

const inventory = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTION_SUCCESS':
            return state.map(item => {
                let finalItemAmount = action.items[item.name] ?
                    item.availableAmount + action.items[item.name] :
                    item.availableAmount;
                return {
                    name: item.name,
                    availableAmount: finalItemAmount
                }
            })
        case 'SALES_SUCCESS':
            return state.map(item => {
                let finalItemAmount = action.items[item.name] ?
                    item.availableAmount - action.items[item.name] :
                    item.availableAmount;
                return {
                    name: item.name,
                    availableAmount: finalItemAmount
                }
            })
        default:
            return state;
    }
}

export default inventory;
