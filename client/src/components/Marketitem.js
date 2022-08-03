import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Marketitem = (props) => {
  const { itemID } = useParams();

  const navigate = useNavigate();
  const Item = props.marketplace.find((item) => {
    return item._id === itemID;
  });

  return (
    <div>
      <h1>{Item.name}</h1>
      <img src={Item.image} />
      <p>{Item.description}</p>
      <div>
        <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API}
              &q=${Item.location}&language=en`}
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
      </div>
      <div>
        <Button
          onClick={() => {
            navigate(`/marketplace/${itemID}/edit`);
          }}
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            props.handleDelete(itemID);
          }}
        >
          Delete
        </Button>
        <p>{Item.location}</p>
      </div>
      <div>
      <Button
          onClick={() => {
            navigate('/marketplace')
          }}
        >
          Go Back
        </Button>
       </div>
    </div>
  );
};

export default Marketitem;
