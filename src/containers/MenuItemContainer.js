import { connect } from 'react-redux';
import { MenuItem } from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { selectTotal } from '../store/Selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    total: selectTotal(state, ownProps.uuid)
  };
};

const matchStateToDispatch = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};

export const MenuItemContainer = connect(
  mapStateToProps,
  matchStateToDispatch
)(MenuItem);
