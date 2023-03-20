import PropTypes from 'prop-types';
import {
  TransactionHhead,
  TransactionhistoriWrap,
  TransactionTbody,
  TransactionTh,
  TransactionTr,
  TransactionTrTbody,
  TransactionTd,
} from './TransactionHistiry.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionhistoriWrap>
      <TransactionHhead>
        <TransactionTr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </TransactionTr>
      </TransactionHhead>

      <TransactionTbody>
        {items.map(item => (
          <TransactionTrTbody key={item.id}>
            <TransactionTd>{item.type}</TransactionTd>
            <TransactionTd>{item.amount}</TransactionTd>
            <TransactionTd>{item.currency}</TransactionTd>
          </TransactionTrTbody>
        ))}
      </TransactionTbody>
    </TransactionhistoriWrap>
  );
};

TransactionHistory.prototypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
