import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:8080/api";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    category: "",
    stockQuantity: "",
    releaseDate: "",
    productAvailable: false,
  });
  const [image, setImage] = useState(null); // new image (optional)
  const [preview, setPreview] = useState(`${API}/product/${id}/image`);

  // Load existing product and pre-fill the form
  useEffect(() => {
    axios
      .get(`${API}/product/${id}`)
      .then((res) => {
        const p = res.data;
        setProduct({
          ...p,
          description: p.description ?? "",
          // <input type="date"> needs yyyy-MM-dd
          releaseDate: p.releaseDate ? String(p.releaseDate).slice(0, 10) : "",
          productAvailable: !!p.productAvailable,
        });
      })
      .catch((err) => {
        console.error("Error loading product:", err);
        alert("Could not load product");
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const submitHandler = async (e) => {
  e.preventDefault();

  try {
    // Use the new image if one was chosen, otherwise download the current one
    let imageToSend = image;
    if (!imageToSend) {
      const res = await axios.get(`${API}/product/${id}/image`, {
        responseType: "blob",
      });
      imageToSend = new File([res.data], product.imageName || "image.jpg", {
        type: product.imageType || res.data.type,
      });
    }

    // Don't send the old image bytes inside the JSON
    const { imagedata, ...productData } = product;

    const formData = new FormData();
    formData.append(
      "product",
      new Blob([JSON.stringify(productData)], { type: "application/json" })
    );
    formData.append("imageFile", imageToSend);

    await axios.put(`${API}/product/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Product updated successfully");
    navigate(`/product/${id}`);
  } catch (err) {
    console.error("Error updating product:", err);
    alert("Error updating product");
  }
};
  return (
    <div className="container">
      <div className="center-container" style={{ marginTop: "7rem" }}>
        <h1>Update Product</h1>
        <form className="row g-3 pt-1" onSubmit={submitHandler}>
          <div className="col-md-6">
            <label className="form-label">
              <h6>Name</h6>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              <h6>Brand</h6>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Brand"
              name="brand"
              value={product.brand}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12">
            <label className="form-label">
              <h6>Description</h6>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Add product description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-5">
            <label className="form-label">
              <h6>Price</h6>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Eg: $1000"
              name="price"
              value={product.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              <h6>Category</h6>
            </label>
            <select
              className="form-select"
              name="category"
              value={product.category}
              onChange={handleInputChange}
            >
              <option value="">Select category</option>
              <option value="Laptop">Laptop</option>
              <option value="Headphone">Headphone</option>
              <option value="Mobile">Mobile</option>
              <option value="Electronics">Electronics</option>
              <option value="Toys">Toys</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">
              <h6>Stock Quantity</h6>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Stock Remaining"
              name="stockQuantity"
              value={product.stockQuantity ?? ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">
              <h6>Release Date</h6>
            </label>
            <input
              type="date"
              className="form-control"
              name="releaseDate"
              value={product.releaseDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">
              <h6>Image</h6>
            </label>
            <img
              src={preview}
              alt={product.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                marginBottom: "8px",
              }}
            />
            <input
              className="form-control"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="productAvailable"
                id="gridCheck"
                checked={product.productAvailable}
                onChange={(e) =>
                  setProduct({ ...product, productAvailable: e.target.checked })
                }
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Product Available
              </label>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;