import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import SaladMaker from "./Components/SaladMaker/SaladMaker";
import UserContext from "./Components/User/User";

const user = {
  name: "Kwame",
  favorites: ["avocado", "carrot"],
};
// context is used for sharing properties across components
function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;
