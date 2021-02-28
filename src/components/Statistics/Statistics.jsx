import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>
        <span className={s.bold}>Total: </span>
        {total}
      </p>
      <p>
        <span className={s.positive}>Positive feedback: </span>
        {positivePercentage}%
      </p>
    </div>
  );
}

export default Statistics;
