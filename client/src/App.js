import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Marketitem from "./components/Marketitem";
import MarketItemEdit from "./components/MarketItemEdit";
import Marketplace from "./components/Marketplace";
import NewItemForm from "./components/NewItemForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import TheNavbar from "./components/TheNavbar";

function App() {
  const [marketplace, setMarketplace] = useState(null);
  const [authorised, setAuthorised] = useState(null);

  const navigate = useNavigate();

  const handleAuth = (authed) => {
    setAuthorised(authed);
    navigate("/marketplace");
  };

  const handleLogout = () => {
    setAuthorised(null);
    navigate("/marketplace");
  };

  useEffect(() => {
    const checkIfloggedIn = async () => {
      const res = await fetch("http://localhost:3500/users/isauthorised");
      const data = await res.json();
      setAuthorised(data.authorised);
    };
    checkIfloggedIn();
  }, []);

  const makeApiCall = async () => {
    const url = "http://localhost:3500/marketplace";
    const res = await fetch(url);
    const Marketplace = await res.json();

    setMarketplace(Marketplace);
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const handleCreate = async (fields) => {
    const url = "http://localhost:3500/marketplace";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    const newItem = await res.json();
    setMarketplace([...marketplace, newItem]);
    navigate("/marketplace");
  };

  const handleDelete = async (id) => {
    const deleteURL = `http://localhost:3500/marketplace/${id}`;
    const res = await fetch(deleteURL, {
      method: "DELETE",
      header: `Content-Type: application/json`,
    });
    await res.json();

    const arrayMinusItem = marketplace.filter((item) => {
      return item._id !== id;
    });
    setMarketplace(arrayMinusItem);
    navigate("/marketplace");
  };

  const handleEdit = async (id, fields, index) => {
    const editURL = `http://localhost:3500/marketplace/${id}`;

    const res = await fetch(editURL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    const editedItem = await res.json();
    setMarketplace([
      ...marketplace.slice(0, index),
      editedItem,
      ...marketplace.slice(index + 1),
    ]);
    navigate("/marketplace");
  };

  return (
    <div className="App">
      <TheNavbar authorised={authorised} />
      {marketplace ? (
        <Routes>
          <Route
            path="/marketplace"
            element={
              <Marketplace marketplace={marketplace} authorised={authorised} />
            }
          />
          <Route
            path="/register"
            element={<Register handleRegister={handleAuth} />}
          />
          <Route path="/login" element={<Login handleLogin={handleAuth} />} />
          <Route
            path="/logout"
            element={<Logout handleLogout={handleLogout} />}
          />

          <Route
            path="/marketplace/:itemID"
            element={
              <Marketitem
                marketplace={marketplace}
                handleDelete={handleDelete}
              />
            }
          />

          <Route
            path="/marketplace/:itemID/edit"
            element={
              <MarketItemEdit
                marketplace={marketplace}
                handleEdit={handleEdit}
              />
            }
          />

          <Route
            path="/marketplace/newitem"
            element={<NewItemForm handleCreate={handleCreate} />}
          />

          <Route path="/profile" />
        </Routes>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default App;
