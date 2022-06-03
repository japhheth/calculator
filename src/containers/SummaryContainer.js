import { Summary } from '../components/Summary';
import { connect } from 'react-redux';
import {
  selectSubTotal,
  selectTipAmount,
  selectTotalAmount
} from '../store/Selectors';

const mapStateToProps = (state) => {
  const subtotal = selectSubTotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotalAmount(state);

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
