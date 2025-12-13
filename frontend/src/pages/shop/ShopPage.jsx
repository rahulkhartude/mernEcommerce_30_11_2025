import React, { useEffect, useState } from 'react'

import productsData from "../../data/products.json"
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'beige', 'green'],
    priceRanges: [
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $200', min: 100, max: 200 },
        { label: '$200 and above', min: 200, max: Infinity }
    ]
};


const ShopPage = () => {

    const [products,setProducts] = useState(productsData);
    const [filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        priceRange: ''
    });

    // clear the filters
    const clearFilters = () => {
        setFiltersState({
            category: 'all',
            color: 'all',
            priceRange: ''
        })
    }

   const applyFilter =()=>{

    let filteredProdcuts = productsData;
    if(filtersState.category && filtersState.category!="all"){
        filteredProdcuts = filteredProdcuts.filter(products=>products.category===filtersState.category)
    }

     if(filtersState.color && filtersState.color!="all"){
        filteredProdcuts = filteredProdcuts.filter(products=>products.color===filtersState.color)
    }

   if(filtersState.priceRange){
    const [minPrice, maxPrice] = filtersState.priceRange.split('-').map(Number);
    filteredProdcuts = filteredProdcuts.filter(products=>products.price >= minPrice && products.price <=maxPrice)
   }

   setProducts(filteredProdcuts);
   }

   useEffect(()=>{
    applyFilter();
   },[filtersState])
   

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.</p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* left side */}
                    <ShopFiltering
                        filters={filters}
                        filtersState={filtersState}
                        setFiltersState={setFiltersState}
                        clearFilters={clearFilters}
                    />

                    {/* right side */}
                    <div>
                        <ProductCards products={products} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default ShopPage