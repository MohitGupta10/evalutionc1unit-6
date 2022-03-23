import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
export const Products = () => {
  const [data, setData] = useState([]);
  // to get all products list on component mounts
  useEffect(() => {
    let url = "https://movie-fake-server.herokuapp.com/products";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    // dispatch(getproductsData())
  }, []);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {data.map((e) => (
          <>
            <div className="main">
              <img src={e.image} />
              <h1 className="product">Id - {e.id}</h1>
              <h3 className="product">Title - {e.title}</h3>
              <h3 className="product">Brand - {e.brand}</h3>
              <h5 className="product">Category - {e.category}</h5>
              <h5 className="product">Price - {e.price}</h5>
            </div>
          </>
        ))}
        {/* map throught th products  list and display the results */}
        {/* {data && */}
        {/* data.map(() => { */}
        {/* return <div>display the results here</div>; */}
        {/* })} */}
      </div>
    </>
  );
};
