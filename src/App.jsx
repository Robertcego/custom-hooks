import './App.css';
import useFetch from './hooks/useFetch/useFetch';

const url = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const { data, isPending, isError } = useFetch(url);

  return (
    <div className='App'>
      <h1>Fetching data from API</h1>
      {data &&
        data.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>Username: {user.username}</h3>
            <p>
              Address:{' '}
              {`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
            </p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
