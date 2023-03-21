import PropTypes from 'prop-types';
import {
  StatisticsWrap,
  Title,
  StatisticsList,
  StatisticsItem,
  Percentage,
  Label,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem
            style={{ backgroundColor: getRandomHexColor() }}
            key={stat.id}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
