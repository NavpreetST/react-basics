
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <User name = "Navpreet" age = {20} email = "navpreet@hello.com"/>
    </div>
  );
}


const User = (userData) => {

  return (

    <div>
      <h1>My name is {userData.name}</h1>
      <h1> {userData.age}</h1>
      <h1>{userData.email}</h1>
    </div>

  );
};

export default App;
