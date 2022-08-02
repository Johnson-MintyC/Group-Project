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
    </div>
  );
};

export default Marketitem;
