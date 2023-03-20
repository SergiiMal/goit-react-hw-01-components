import styled from 'styled-components';

export const StatisticsWrap = styled.section`
  text-align: center;
  width: 450px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 25px;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const StatisticsItem = styled.li`
  width: 100%;
  height: 100%;
  border: 1px solid #bababa54;
`;

export const Label = styled.span`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  color: white;
`;

export const Percentage = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
`;
