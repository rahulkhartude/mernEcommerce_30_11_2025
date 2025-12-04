import React from 'react'
import ProductCard from './ProductCards'
import products from '../../data/products.json'

const TrendingProducts = () => {
  return (
    <>
    <section className='section__container product__container'>
      <h2 className='section__header'>Tranding Products</h2>
      <p className='section__subheader mb-12'> Check out our trending products. These are the most popular items people are loving right now. Find your favorite and shop the latest trends easily.</p>
    </section>

    {/* Product Card */}
    <ProductCard products={products}/>
    </>
    
  )
}

export default TrendingProducts
