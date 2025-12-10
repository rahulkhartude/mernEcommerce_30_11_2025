import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../../data/products.json'
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
    const {categoryName} = useParams();
    const [filteredProduct, setFilteredProduct] = useState([]);

    useEffect(()=>{
      const filtered = products.filter((product)=>{
          return  product.category.toLowerCase() == categoryName.toLowerCase();
        })
        setFilteredProduct(filtered);
    },[categoryName])

    useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
   <>
   <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'> {categoryName}</h2>
        <p className='section__subheader'>Hand-picked products designed to fit your lifestyle.</p>
   </section>
   <div className='section__container'>
    <ProductCards products={filteredProduct}  />
   </div>
   </>
  )
}

export default CategoryPage
