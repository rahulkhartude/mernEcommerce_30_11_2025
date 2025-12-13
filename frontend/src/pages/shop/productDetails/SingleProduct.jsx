import React from 'react'
import { Link, useParams } from 'react-router'

const SingleProduct = () => {
    const {id} = useParams();
    console.log(id)
  return (
   <>
    <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Single Product Page</h2>
                <div className='section__subheader space-x-2'>
                <span className='hover:bg-red-500'><Link to='/'>home</Link></span>
                <i class="ri-arrow-right-wide-fill"></i>
                <span className='hover:bg-red-500'><Link to='/shop'>shop</Link></span>
                <i class="ri-arrow-right-wide-fill"></i>
                <span className='hover:bg-red-500'>product Name</span>
                 </div>
     </section>
    


   </>
  )
}

export default SingleProduct
