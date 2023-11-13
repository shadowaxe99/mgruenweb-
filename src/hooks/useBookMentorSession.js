import { useState, useEffect } from 'react';
import { getAvailableSessions, bookSessionById } from '../services/mentorSessionService';

export const useBookMentorSession = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const data = await getAvailableSessions();
        setSessions(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  const bookSession = async (sessionId) => {
    try {
      await bookSessionById(sessionId);
      // Update the sessions state to reflect the booked session
      setSessions(sessions.map(session => session.id === sessionId ? { ...session, booked: true } : session));
    } catch (err) {
      setError(err);
    }
  };

  return { sessions, bookSession, loading, error };
};
