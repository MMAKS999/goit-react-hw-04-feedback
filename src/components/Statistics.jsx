import PropTypes from 'prop-types';

// Компонент відображення статистики
export const Statistics = ({
  stateGood,
  stateNeutral,
  stateBad,
  total,
  percentage,
}) => {
  return (
    <ul className="stats">
      <li>
        <span className="label">Good:</span>
        <span className="quantity">{stateGood}</span>
      </li>
      <li>
        <span className="label">Neutral:</span>
        <span className="quantity">{stateNeutral}</span>
      </li>
      <li>
        <span className="label">Bad:</span>
        <span className="quantity">{stateBad}</span>
      </li>
      <li>
        <span className="label">Total:</span>
        <span className="quantity">{total}</span>
      </li>
      <li>
        <span className="label">Positive feedback:</span>
        <span className="quantity">{percentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  stateGood: PropTypes.number.isRequired,
  stateNeutral: PropTypes.number.isRequired,
  stateBad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
