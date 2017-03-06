export const purchase = (rawItems, totalCost) => {
    return {
        type: 'PURCHASE_SUCCESS',
        rawItems: rawItems,
        amount: totalCost
    }
}
