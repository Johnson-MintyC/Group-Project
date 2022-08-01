import { Link } from "react-router-dom";

const Marketitem = (props) => {
  return (
    <div key={props.item._id}>
      <h1>{props.item.name}</h1>
      <img src={props.item.image} />
      <p>{props.item.description}</p>
      <Link to={`/marketplace/${props.item._id}`}>Show</Link>
    </div>
  );
};

const Marketplace = (props) => {
  const MarketplaceList = props.marketplace.map((item) => {
    return <Marketitem key={item._id} item={item} />;
  });
  return (
    <div>
      <Link to="/marketplace/newitem">Add</Link>
      <div>{MarketplaceList}</div>
    </div>
  );
};

export default Marketplace;
