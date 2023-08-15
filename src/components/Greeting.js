import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  const handleRefreshClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="homepage">
      <h1>Greeting</h1>
      {greeting.isLoading ? (
        <div className="top-gap">Loading...</div>
      ) : (
        <>
          <p className="top-gap">{greeting.greeting?.message ?? 'No message available'}</p>
          <button type="button" className="message-btn" onClick={handleRefreshClick}>
            Get a new message
          </button>
          <p className="small-gap"><NavLink to="/">Home</NavLink></p>
        </>
      )}
    </div>
  );
};

export default Greeting;
