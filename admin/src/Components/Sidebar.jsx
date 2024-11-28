import React from 'react'
import {Link} from "react-router-dom"
import addProduct from "../assets/addproduct.png"
import listProduct from "../assets/productlist.png"
const Sidebar = () => {
return (
<div className='py-7 flex justify-center gap-x-1 gap-y-6 w-full bg-white sm:gap-x-4 lg:flex-row  lg:pt-20 1g:max-w-60 lg:justify-center  1g:pl-6'>
<Link to = {'/addproduct'}>
<button className='flexCenter gap-2 p-[30px] rounded-md bg-primary h-12 w-40 medium-16'>
<img src={addProduct} alt="" height={50} width={50} />
<span>Add Product</span>
</button>
</Link>
<Link to={'/listproduct'}>
<button className='flexCenter gap-2 p-[30px] rounded-md bg-primary h-12 w-40 medium-16'>
<img src={listProduct} alt="" height={50} width= {50} />
<span>Add Product</span>
</button>
</Link>
</div>
  )
}

export default Sidebar
