import { useState,useEffect } from "react";
import ProductForm from "../components/ProductForm";


function ProductsPage() {
    const[products,setProducts]=useState([]);
async function getData(){
   const resp=await fetch(import.meta.env.VITE_BACKEND_URL+"/api/v1/products");
   const data=await resp.json();
   console.log(data);
   setProducts(data.products);
   

}
useEffect(()=>{
    getData();
},[]);



  return (
    <div>
        <ProductForm />
        {/* {JSON.stringify(products)} */}
        ProductsPage
        <div className="card-container">
            {
                products.map((ele)=>{
                 return(
                    <div className="card" key={ele._id}>
                        <h4>{ele.company}</h4>
                        <h4>{ele.title}</h4>
                        <h4>{ele.price}</h4>
                    </div>
                 )
                })
            }
        </div>
        </div>
  )
}

export default ProductsPage