export const produce = (items, rawItems, totalCost) => {
    return {
        type: 'PRODUCTION_SUCCESS',
        items: items,
        rawItems: rawItems,
        amount: totalCost
    }
}
