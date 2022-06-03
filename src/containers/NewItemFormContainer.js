import { NewItemForm } from '../components/NewItemForm';
import { addItem } from '../store/items/actions';
import { connect } from 'react-redux';

const mapStateToDispatch = {
  onSubmit: (name, price) => addItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapStateToDispatch
)(NewItemForm);
