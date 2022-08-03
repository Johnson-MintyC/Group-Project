import { Link, useNavigate} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
// const Marketitem = (props) => {

//   return (
//     <div key={props.item._id}>
//       <Button to={`/marketplace/${props.item._id}` onClick={navigate()}}>Details</Button>
//     </div>
//   );
// };

const Marketplace = (props) => {
  const navigate = useNavigate();
  const MarketplaceList = props.marketplace.map((item) => {
    return (
      <Col key={item._id}className="mb-3">
      <Card  style={{ width: "20rem",height:'100%', margin: "12px" }}>
        <Card.Img
          onClick={() => navigate(`/marketplace/${item._id}`)}
          variant="top"
          src={item.image}
          style={{
            width:'20rem',
            height:'25rem',
            objectFit:'cover' }}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <Button  onClick={() => navigate(`/marketplace/${item._id}`)}>Details </Button>
        </Card.Body>
      </Card>
      </Col>
    );
  });
  return (
    <div>
      <Row>
      {MarketplaceList}
      </Row>
    </div>
  );
};

export default Marketplace;
