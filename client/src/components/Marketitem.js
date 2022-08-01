import { useParams, useNavigate } from "react-router-dom";

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
        <button
          onClick={() => {
            navigate(`/marketplace/${itemID}/edit`);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            props.handleDelete(itemID);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Marketitem;
