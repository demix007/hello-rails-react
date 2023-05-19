import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomMessage } from '../actions/messageActions';

const Greeting = ({ message, fetchRandomMessage }) => {
  useEffect(() => {
    fetchRandomMessage();
  }, [fetchRandomMessage]);
  console.log(message);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

const mapStateProps = (state) => ({
  message: state.message,
});

export default connect(mapStateProps, { fetchRandomMessage })(Greeting);
