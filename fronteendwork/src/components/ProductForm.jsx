import React, { useState } from 'react'

 function ProductForm() {
const[resdata,setResData]=useState();
     const handleSubmit=async(e)=>{
        e.preventDefault();
console.log(e);
const values=e.target;
const title=values[0].value;
const company=values[1].value;
const price=values[2].value;
const quantity=values[3].value;
const data={title:title, company:company,price:price,quantity:quantity}
console.log(title);
   const res= await fetch(import.meta.env.VITE_BACKEND_URL+"/api/v1/products",{
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
   })
           const response=await res.json();
           console.log(response);

}
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type='text' name='title' />
      </div>
      <div>
      <label>Company</label>
        <input type='text' name='company' />
        
      </div>
      <div>
      <label>price</label>
        <input type='number' name='price' />
        
      </div>
      <div>
      <label>quantity</label>
        <input type='number' name='quantity' />
        
      </div>
      {/* <div>
      <label>thumbnail</label>
        <input type='number' name='thumbnail' />
        
      </div> */}
<button>Add</button>
        </form>
    </div>
  )
}

export default ProductForm