const Logout = (props) => {
  const handleClick = async () => {
    const res = await fetch("http://localhost:3500/users/logout", {
      method: "POST",
    });
    const data = await res.json(data);
    //Fill in iwth the logic later
    console.log(data);
  };

  return <button onClick={handleClick}>Logout</button>;
};

export default Logout;
