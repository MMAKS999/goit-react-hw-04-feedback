import React, { useState } from 'react';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Notification } from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const list = ['good', 'neutral', 'bad'];

  const options = {
    good: () => setGood(prevGood => prevGood + 1),
    neutral: () => setNeutral(prevNeutral => prevNeutral + 1),
    bad: () => setBad(prevBad => prevBad + 1),
  };

  const LeaveFeedback = option => {
    const selectedOption = options[option];
    if (selectedOption) {
      selectedOption();
    }
  };

  
  const countTotalFeedback = () => {
     return bad + neutral + good;
  };

  const countPositiveFeedbackPercentage = () => {
     return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section nameSection="Please leave feedback">
        <FeedbackOptions
          options={list}
          onLeaveFeedback={LeaveFeedback}
        />
      </Section>
      <Section nameSection="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            stateGood={good}
            stateNeutral={neutral}
            stateBad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </div>   
  )

};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   LeaveFeedback = option => {
//     this.setState(state => ({
//       [option]: state[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { bad, neutral, good } = this.state;
//     return bad + neutral + good;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return Math.round((good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section nameSection="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.LeaveFeedback}
//           />
//         </Section>
//         <Section nameSection="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               stateGood={good}
//               stateNeutral={neutral}
//               stateBad={bad}
//               total={this.countTotalFeedback()}
//               percentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification />
//           )}
//         </Section>
//       </div>
//     );
//   }

// }
