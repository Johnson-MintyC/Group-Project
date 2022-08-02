import { Link } from "react-router-dom";
import TheNavbar from "./TheNavbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Marketitem = (props) => {
  return (
    <div key={props.item._id}>
      <Link to={`/marketplace/${props.item._id}`}>Show</Link>
    </div>
  );
};

const Marketplace = (props) => {
  const MarketplaceList = props.marketplace.map((item) => {
    return (
      <Card key={item._id} style={{ width: "18rem", margin: "12px" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <Marketitem key={item._id} item={item} />
        </Card.Body>
      </Card>
    );
  });
  return (
    <div>
      <TheNavbar />
      <div>{MarketplaceList}</div>
    </div>
  );
};

export default Marketplace;
