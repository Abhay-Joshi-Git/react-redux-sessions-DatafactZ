const initialState = [
    {
        name: 'table',
        rawItemsReq: [
            {
                name: 'steel',
                qty: 2
            },
            {
                name: 'glass',
                qty: 1
            }
        ],
        productionCost: 500,
        price: 1500
    }
];

const catelogue = (state = initialState, action) => {
    return state;
}

export default catelogue;
