import { useState } from "react";
import { useParams } from "react-router-dom";

const MarketItemEdit = (props) => {
  const initialState = {
    name: "",
    categories: "",
    image: "",
    description: "",
    price: 0,
    deliverable: false,
    location: "",
  };

  const [fields, setFields] = useState(initialState);
  const { itemID } = useParams();
  const editedItem = props.marketplace.find((item) => {
    return itemID === item._id;
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFields({
      ...fields,
      [name]: event.target.type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    const index = props.marketplace.indexOf(editedItem);
    event.preventDefault();
    // props.setMarketplace(fields);
    props.handleEdit(itemID, fields, index);
    // console.log(itemID, fields, index);
    // setFields(initialState);
  };
  return (
    <div>
      <h1>Editing {editedItem.name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Categories: </label>
          <input
            name="categories"
            type="text"
            onChange={handleChange}
            value={fields.categories}
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
            value={fields.image}
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            name="description"
            type="text"
            onChange={handleChange}
            value={fields.description}
          />
        </div>
        <div>
          <label>Deliverable: </label>
          {fields.deliverable ? (
            <input
              name="deliverable"
              type="checkbox"
              onClick={handleChange}
              checked
            />
          ) : (
            <input name="deliverable" type="checkbox" onClick={handleChange} />
          )}
        </div>
        <div>
          <label>Price: </label>
          <input
            name="price"
            type="number"
            onChange={handleChange}
            value={fields.price}
          />
        </div>
        <div>
          <label>Location: </label>
          <input
            name="location"
            type="text"
            onChange={handleChange}
            value={fields.location}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MarketItemEdit;
