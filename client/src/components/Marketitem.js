import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './marketitem.css'
import Card from 'react-bootstrap/Card';

const Marketitem = (props) => {
  const { itemID } = useParams();

  const navigate = useNavigate();
  const Item = props.marketplace.find((item) => {
    return item._id === itemID;
  });

  return (
    <div className='container'>
      <h1 >{Item.name}</h1>
       <Card style={{ width: '400px' }}>
       <Card.Img variant="top" src={Item.image} />
      <Card.Body>
        <Card.Text>{Item.description}</Card.Text>
        <Card.Text>Price: ${Item.price}</Card.Text>
        <Card.Text>{Item.location}</Card.Text>
        <div className="buttons">
        <button class="button-55" onClick={() => {navigate(`/marketplace/${itemID}/edit`)}}  role="button">Edit</button>
        <button class="button-55"   onClick={() => {props.handleDelete(itemID)}} role="button">Delete</button>
        <button class="button-55"  onClick={() => { navigate('/marketplace') }} role="button">Go Back</button>
      </div>

      </Card.Body>
      <iframe className='iframe'
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API}
              &q=${Item.location}&language=en`}
              width="400"
              height="325"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
    </Card>
    </div>
  );
};

export default Marketitem;
