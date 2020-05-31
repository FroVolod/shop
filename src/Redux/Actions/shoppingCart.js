export const CHANGE_COUNT_ITEM = 'CHANGE_COUNT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const changeCountAction = (index, count) => ({
  type: CHANGE_COUNT_ITEM,
  index,
  count
});
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
});
