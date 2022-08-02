import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Marketitem = (props) => {
  return (
    <div key={props.item._id}>
      <Link to={`/marketplace/${props.item._id}`}>Show</Link>
    </div>
  );
};

const Marketplace = (props) => {
  const navigate = useNavigate();
  const MarketplaceList = props.marketplace.map((item) => {
    return (
      <Card key={item._id} style={{ width: "18rem", margin: "12px" }}>
        <Card.Img
          onClick={() => navigate(`/marketplace/${item._id}`)}
          variant="top"
          src={item.image}
        />
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
      <div>{MarketplaceList}</div>
    </div>
  );
};

export default Marketplace;
