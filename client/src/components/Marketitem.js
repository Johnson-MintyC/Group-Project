import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './marketitem.css'
const Marketitem = (props) => {
  const { itemID } = useParams();

  const navigate = useNavigate();
  const Item = props.marketplace.find((item) => {
    return item._id === itemID;
  });

  return (
    <div className='container'>
      <h1 >{Item.name}</h1>
      <img className='image' src={Item.image} />

      <div className='location'>


      </div>
      <div >
      <p className='description'>{Item.description}</p>
      <p>Price: ${Item.price}</p>
      <p>Deliverable:{Item.deliverable?'Yes':'No'}</p>
      <p>{Item.location}</p>
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
      </div>

        <div className='buttons'>
        <Button className='edit'
          onClick={() => {
            navigate(`/marketplace/${itemID}/edit`);
          }}
        >
          Edit
        </Button>
        <Button className='delete'
          onClick={() => {
            props.handleDelete(itemID);
          }}
        >
          Delete
        </Button>


      <Button className='back'
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
