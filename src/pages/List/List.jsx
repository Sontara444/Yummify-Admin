import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ backendUrl }) => {
  const [products, setProducts] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/get-product`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);


  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/product/remove-product/${id}`);

      fetchList().catch(err => console.error("Error fetching updated list:", err));
      
      if(response.data.success){
        toast.success(response.data.message)
      }
      else{
        toast.error("Error")
      }

      
    } catch (error) {
      toast.error(error.message);
    }

  }



  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {products.length ? (
          products.map(({ image, name, category, price, _id }, index) => (
            <div className="list-table-format" key={index}>
              <img src={image} alt={name} />
              <p>{name}</p>
              <p>{category}</p>
              <p>{price}</p>
              <p  onClick={()=> removeProduct(_id)} className="curser">X</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default List;
