export const sales = (finishedProducts, totalCost) => {
    return {
        type: 'SALES_SUCCESS',
        items: finishedProducts,
        amount: totalCost
    }
}
