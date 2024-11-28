import { useContext } from "react"
import {useParams} from "react-router-dom"
import ProductHd from "../components/ProductHd";
import ProductDisplay from '../components/ProductDisplay';
import ProductDescription from '../components/ProductDescription';
import RelatedProducts from '../components/RelatedProducts';
import {ShopContext} from '../context/ShopContext';

const Product = () => {
const {all_products} = useContext(ShopContext);
const {productId}=useParams();
const product = all_products.find((e) => e.id === Number(productId));
if(!product) {
return <div>Product not found!</div>
}
return (
<section>
<div>
<ProductHd product={product}/>
<ProductDisplay product={product} />
<ProductDescription />
<RelatedProducts />

</div>
</section>
)
}
export default Product