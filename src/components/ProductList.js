import Header from "./Header";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { json, Link } from "react-router-dom";
const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetProductData()
  }, []);
  async function GetProductData()
  {
    let result = fetch("http://localhost:52154/api/ReactUser/ProductList").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      }
    );
  }
  
  
  async function DeleteProduct(id) {

    let result=await fetch("http://localhost:52154/api/ReactUser/DeleteProductById?Id="+id,{
      method:'DELETE'
    });
    result=await result.json();
    GetProductData()
  }
  function UpdateProduct(id) {}
  return (
    <>
      <Header />
      <div>
        <h1>Product List</h1>
        <div>
          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.productType}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>

                  <td>
                    <span onClick={()=>DeleteProduct(item.id)}>Delete</span>
                    ||
                    <Link to={"update/"+item.id}><span>Update</span></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
export default ProductList;
