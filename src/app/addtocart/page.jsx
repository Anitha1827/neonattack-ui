"use client";
import React, { useEffect, useState } from "react";
import AddPhone from "../container/AddPhone";

const AddToCart = () => {
  const [data, setData] = useState([]);
  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    let cart = JSON.parse(
      typeof localStorage !== "undefined" && localStorage.getItem("cart")
    );
    setData(cart);
    console.log("line6", cart);
  }, []);

  console.log("line15", data);

  return (
    <>
      <div className="text-center">
        <h1
          className="text-[#9200f7] text-6xl m-5 tracking-normal m-5"
          style={{ fontFamily: "Eurostile_Extended" }}
        >
          Your cart
        </h1>
        <a href="" className="text-xl ">
          Continue shopping
        </a>
      </div>
      <div class="flex flex-col ">
        <table>
          <thead class="text-white font-bold border-b-2 border-gray-200">
            <tr>
              <th scope="col" class="px-4 py-2 text-left text-xl ">
                PRODUCT
              </th>
              <th scope="col" class="flex items-center px-4 py-2 space-x-2">
                PRICE
              </th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((val,idx) => (
              <>
              <tr class="text-white font-bold border-b-2 border-gray-200 font-medium"  key={idx}>
              <td class="px-4 py-2 text-left">
                <div className="flex flex-row p-3">
                  <div className="relative w-[200px]">
                    <img
                      src="https://ekbotefurniture.com/wp-content/uploads/2023/11/Sofa-Pink-FV.jpg"
                      alt="product"
                      className="w-[200px]"
                    />
                    <p className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-50">
                    {val.text}
                    </p>
                  </div>
                  <div className="p-3">
                    <h4 className="m-3 font-bold">
                      Custom Neon: <span className="ml-2">{val.text}</span>
                    </h4>
                    <p>
                      Text : <span className="ml-2">{val.text}</span>
                    </p>
                    <p>
                      size: <span className="ml-2">{val.size}</span>
                    </p>
                    <p>
                      color: <span className="ml-2">{val.color}</span>
                    </p>
                    <p>
                      font: <span className="ml-2">{val.font}</span>
                    </p>
                    <p>
                      waterproof:
                      <span className="ml-2">{val.waterproof}</span>
                    </p>
                    <p>
                      wireless: <span className="ml-2">{val.wireless}</span>
                    </p>
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>₹ {val.price}</td>
              <td>1</td>
              <td>₹ {val.price}</td>
            </tr>
              </>
            ))}
            
          </tbody>
        </table>
        <h1 className="text-right font-bold p-3">
          Subtoal <span>₹ {data.price}</span>
        </h1>
        <div class="flex justify-end px-4 py-2">
          <button
            onClick={handleOpen}
            class="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-green-500"
          >
            Check Out
          </button>
        </div>
        <AddPhone open={open} setOpen={setOpen} data={data} />
      </div>
    </>
  );
};

export default AddToCart;
