import './App.css';
import Login from './componets/Login.jsx/Login';
import Profile from './componets/Profile.jsx/Profile';
import UserContext from './context/UserContext';
import UserContextProvider from './context/Usercontextprovider';


function App() {
  return (
    <UserContextProvider>
      <h1>React with me</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
