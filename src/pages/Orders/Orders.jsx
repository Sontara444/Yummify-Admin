import { useState, useEffect } from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
const Orders = ({ backendUrl }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/order/list`);

      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      {orders.map((order, index) => (
        <div key={index} className="order-item">
          <img src={assets.parcel_icon} alt="" />
          <div>
            <p className="order-item-food">
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + " , ";
                }
              })}
            </p>
            <p className="order-item-name">
              {order.address.firstName + " " + order.address.lastName}
            </p>
            <div className="order-item-address">
              <p>{order.address.street + " , "}</p>
              <p>
                {order.address.city+" , "+order.address.state +" , "+order.address.country+" , "+order.address.zipcode}
              </p>
            </div>
            <p className="order-item-phone">{order.address.phone}</p>
          </div>
          <p>Items: {order.items.length}</p>
          <p>${order.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
