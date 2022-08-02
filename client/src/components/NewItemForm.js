import { useState, useEffect } from "react";
import Autocomplete from "react-google-autocomplete";

const initialState = {
  name: "",
  categories: "",
  image: "",
  description: "",
  price: 0,
  deliverable: false,
  location: "",
};

const NewItemForm = (props) => {
  const [fields, setFields] = useState(initialState);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    setFields({ ...fields, location: location });
  }, [location]);
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
    event.preventDefault();

    const formData = new FormData();

    formData.append("photo", photo);
    // for (let f in fields) {
    //   formData.append(f, fields[f]);
    // }
    const res = await fetch("http://localhost:3500/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    console.log(data.path);
    props.handleCreate({ ...fields, image: data.path });
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
        {/* //Images */}
        <div>
          <label>Image: </label>
          <input name="image" type="file" onChange={handleUpload} />
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
          <Autocomplete
            apiKey={process.env.REACT_APP_GOOGLE_API}
            onPlaceSelected={(place) => setLocation(place.formatted_address)}
          />
          {/* <input name="location" type="text" onChange={handleChange} /> */}
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewItemForm;
