import { createSelector } from 'reselect';

export const selectItem = (state, props) =>
  state.items.find((item) => item.uuid === props);

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubTotal = createSelector([selectItems], (items) => {
  return items.reduce((sub, items) => (sub += items.price + items.quantity), 0);
});

export const selectTipAmount = createSelector(
  [selectSubTotal, selectTipPercentage],
  (subTotal, tipPercentage) => subTotal + tipPercentage / 100
);

export const selectTotalAmount = createSelector(
  [selectSubTotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);

export const selectTotal = createSelector(
  [selectItem],
  (item) => item.price * item.quantity
);

export const selectAllItms = createSelector([selectItems], (items) => items);
