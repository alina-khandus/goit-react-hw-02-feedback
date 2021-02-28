import { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Section from './components/Section';
import Statistics from './components/Statistics';

import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = prop => {
    this.setState(prevState => {
      return { [prop]: prevState[prop] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good = 0 } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <div className={s.Appcontainer}>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        {total !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given." />
        )}
      </div>
    );
  }
}

export default App;
