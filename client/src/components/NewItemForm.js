import { useState } from "react";

const NewItemForm = (props) => {
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

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFields({
      ...fields,
      [name]: event.target.type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
    props.handleCreate(fields);
  };
  return (
    <div>
      <h1>New Item </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" type="text" onChange={handleChange} required />
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
          <input name="image" type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Description: </label>
          <textarea name="description" type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Deliverable: </label>
          <input name="deliverable" type="checkbox" onClick={handleChange} />
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
          <input name="location" type="text" onChange={handleChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewItemForm;
