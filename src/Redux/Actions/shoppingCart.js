export const CHANGE_COUNT_ITEM = 'CHANGE_COUNT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
// export const changeCountAction = (product) => ({
//   type: CHANGE_COUNT_ITEM,
//   product
// })
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
