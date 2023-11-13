import React, { useState } from 'react';

const FeedbackSystem = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const submitFeedback = () => {
    // TODO: Send feedback to the backend
    console.log('Feedback submitted:', feedback);
    setFeedback(''); // Clear the feedback input after submission
  };

  return (
    <div className='feedback-system'>
      <h2>Feedback</h2>
      <textarea
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder='Enter your feedback here...'
        rows='4'
        className='w-full p-2 border rounded'
      />
      <button onClick={submitFeedback} className='mt-2 p-2 bg-blue-500 text-white rounded'>Submit Feedback</button>
    </div>
  );
};

export default FeedbackSystem;
