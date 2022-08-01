import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [marketplace, setMarketplace] = useState(null);

  const makeApiCall = async () => {
    const url = "http://localhost:3500/marketplace";
    const res = await fetch(url);
    const Marketplace = await res.json();
    setMarketplace(Marketplace);
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  return (
    <div className="App">
      <h1>placeholder</h1>
      {marketplace && <p>{marketplace[0].name}</p>}
      <Routes>
        <Route to="/marketplace" />
        <Route to="/signup" />
        <Route to="/login" />
        <Route to="/marketplace/:itemID" />
        <Route to="/marketplace/:itemID/edit" />
        <Route to="/newItem" />
        <Route to="/profile" />
      </Routes>
    </div>
  );
}

export default App;
