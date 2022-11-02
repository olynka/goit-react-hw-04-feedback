import { useState } from 'react';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Feedback } from './feedback/feedback';





export function App() { 
  const [good, setGood] =useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


    const countTotalFeedback=()=> {
    return neutral + good + bad
  }

   const  countPositiveFeedbackPercentage = good => {
     const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };
  
  const IncrementStatistics = btnName => {
    switch (btnName) {
      case 'good':
        return setGood(prev => prev + 1);

      case 'neutral':
        return setNeutral(prev => prev + 1);

      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

    const total = countTotalFeedback();
    const goodPercent = countPositiveFeedbackPercentage(good);
   

  
  return (
  
  <>
    <Section title="Please leave feedback">
        <Feedback IncrementStatistics={IncrementStatistics} />
       </Section>
      <Section title="Statistics">
       
  {countTotalFeedback() === 0 ? (
            <Notification />
          ) : (
          <Statistics
          good={good}
  neutral={neutral}
  bad={bad}
  total={total}
  goodPercent={goodPercent}
  neutralPercent={countPositiveFeedbackPercentage}
          
          />
          )}
</Section>
     </>
  )
}