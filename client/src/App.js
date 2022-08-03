import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
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

  };

  const handleLogout = () => {
    setAuthorised(null);
    navigate("/login");
  };

  useEffect(() => {
    const checkIfloggedIn = async () => {
      const res = await fetch("/users/isauthorised");
      const data = await res.json();
      setAuthorised(data.authorised);
    };
    checkIfloggedIn();
  }, []);

  const makeApiCall = async () => {
    const url = "/marketplace";
    const res = await fetch(url);
    const Marketplace = await res.json();
    setMarketplace(Marketplace);
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const handleCreate = async (fields) => {
    const url = "/marketplace";
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
    const deleteURL = `/marketplace/${id}`;
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
    const editURL = `/marketplace/${id}`;

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

  const handleSearch=(searchItem)=>{

   const searchedItem= marketplace.filter((item)=>{
    return item.name.replace(/[0-9 +/-=]/g, "").toUpperCase().includes(searchItem.toUpperCase())

    })
    console.log(searchedItem)
    searchItem.length===0 ? makeApiCall(): setMarketplace(searchedItem)
  }

  const handleSort=()=>{
   const sortedMarketPlace=  marketplace.sort((a,z)=>{
      if(a.price>z.price){
        return 1
      }if(a.price<z.price){
        return -1
      }
      return 0
     })
  setMarketplace(sortedMarketPlace)
    navigate('/marketplace#lowToHigh')
  }

const handleDeliverable=()=>{
  const sortedDeliverable=marketplace.filter((item)=>{
    return item.deliverable===true
  })
  setMarketplace(sortedDeliverable)
  navigate('/marketplace#deliverable')

}

  return (
    <div className="App">
      <TheNavbar authorised={authorised} handleSearch={handleSearch} handleSort={handleSort} handleDeliverable={handleDeliverable} handleLogout={handleLogout} />
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
