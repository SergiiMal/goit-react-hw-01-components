import styled from 'styled-components';

export const TransactionhistoriWrap = styled.table`
  margin: 0 auto;
  table-layout: fixed;
  width: 500px;
  border-collapse: collapse;
  border: 1px solid #c5c5c5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #187dc0;
`;
export const TransactionHhead = styled.thead``;
export const TransactionTr = styled.tr``;

export const TransactionTh = styled.th`
  padding: 10px;
  border: 1px solid #ffffff;
  color: #ffffff;
`;

export const TransactionTbody = styled.tbody`
  text-align: center;
`;

export const TransactionTrTbody = styled.tr`
  background-color: #ffffff;
  &:not(:nth-of-type(2n-1)) {
    background-color: #ebecec;
  }
`;
export const TransactionTd = styled.td`
  padding: 15px;
  border: 1px solid #c5c5c5;
`;
