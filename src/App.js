import { useState } from "react";
import CardList from "./components/cards/card-list";
import Header from "./components/Header";
import Login from "./components/Login";
import { AuthContext } from "./lib/auth.context";

const App = () => {
  const [auth, setAuth] = useState();

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Header />
        {auth ? <CardList /> : <Login />}
      </AuthContext.Provider>
      <footer></footer>
    </>
  );
};

export default App;
