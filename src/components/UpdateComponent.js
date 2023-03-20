import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProducts = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };
  const UpdateProducts = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  };
  return (
    <div className="Addproduct">
      <h1>Update Product</h1>
      <input
        type="text"
        className="inputBox"
        placeholder="Enter product name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter product price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter product category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter product company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />
      <button className="appButton" type="button" onClick={UpdateProducts}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProducts;
