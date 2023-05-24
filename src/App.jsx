import Login from "./Components/Auth/Login";
import CounterCard from "./Components/Counter/CounterCard";
import WithSubnavigation from "./Components/Navbar/Nav";
import UserCard from "./Components/User/UserCard";

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <CounterCard />
      <UserCard />
      <Login />
    </div>
  );
}

export default App;
