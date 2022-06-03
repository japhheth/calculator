import { connect } from 'react-redux';
import { MenuItems } from '../components/MenuItems';
import { selectAllItms } from '../store/Selectors';

const mapStateToProps = (state) => {
  const items = selectAllItms(state);

  return { items };
};

export const MenuItemsContainer = connect(mapStateToProps)(MenuItems);
