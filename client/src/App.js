import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Marketitem from "./components/Marketitem";
import MarketItemEdit from "./components/MarketItemEdit";
import Marketplace from "./components/Marketplace";
import NewItemForm from "./components/NewItemForm";

function App() {
  const [marketplace, setMarketplace] = useState(null);

  const navigate = useNavigate();

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
    const res = await fetch("http://localhost:3500/marketplace", {
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
    const DeletedItem = await res.json();
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
    console.log(fields);
    console.log(editedItem);
    setMarketplace([
      ...marketplace.slice(0, index),
      editedItem,
      ...marketplace.slice(index + 1),
    ]);
    navigate(`/marketplace/${id}`);
  };

  return (
    <div className="App">
      <h1>placeholder</h1>
      {marketplace ? (
        <Routes>
          <Route
            path="/marketplace"
            element={<Marketplace marketplace={marketplace} />}
          />
          <Route path="/signup" />
          <Route path="/login" />
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
