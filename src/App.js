import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './pages/AboutPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutIcon from './components/AboutIcon';




function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <FeedbackForm handleAdd={<addFeedback />} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={ <deleteFeedback/> } />
            <AboutIcon />
          </>
        }
      ></Route>
      
      <Route path="/about" element={ <AboutPage/> } />
     
    
    </Routes>
  );
}
export default App;
