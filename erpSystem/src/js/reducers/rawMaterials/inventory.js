const initialState = [
    {
        name: 'steel',
        availableAmount: 0
    },
    {
        name: 'glass',
        availableAmount: 0
    }
];

const inventory = (state = initialState, action) => {
    switch (action.type) {
        case 'PURCHASE_SUCCESS':
            return state.map(item => {
                let finalItemAmount = action.rawItems[item.name] ?
                    item.availableAmount + action.rawItems[item.name] :
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
