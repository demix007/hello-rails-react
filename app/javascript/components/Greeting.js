import { useSelector } from 'react-redux';

function Greeting() {
  const greetings = useSelector((state) => state.greeting);
  return (
    <div>
      <h1>Some One Says:</h1>
      <h2>
        {greetings}
      </h2>
    </div>
  );
}

export default Greeting;
