import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              <AboutIcon />
            </>
          }
        ></Route>

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </FeedbackProvider>
  );
}
export default App;
