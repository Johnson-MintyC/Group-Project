import { useState } from "react";
import { useParams } from "react-router-dom";

const MarketItemEdit = (props) => {
  const { itemID } = useParams();
  const editedItem = props.marketplace.find((item) => {
    return itemID === item._id;
  });
  const [fields, setFields] = useState(editedItem);
  const [photo, setPhoto] = useState(null);

  const handleChange = (event) => {
    //
    const { name, value, checked, files } = event.target;
    const validateData = () => {
      if (event.target.type === "checkbox") {
        return { ...fields, [name]: event.target.checked };
      } else if (event.target.file) {
        return { ...fields, [name]: files[0] };
      } else {
        return { ...fields, [name]: value };
      }
    };
    setFields(validateData());
  };
  const handleUpload = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    const index = props.marketplace.indexOf(editedItem);
    event.preventDefault();
    // props.setMarketplace(fields);
    // props.handleEdit(itemID, fields, index);
    // console.log(itemID, fields, index);
    // setFields(initialState);
    const formData = new FormData();

    formData.append("photo", photo);
    for (let f in fields) {
      formData.append(f, fields[f]);
    }
    const res = await fetch("http://localhost:3500/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data.path);
    props.handleEdit(itemID, { ...fields, image: data.path }, index);
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
          <input name="image" type="file" onChange={handleUpload} />
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
