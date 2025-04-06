'use client'

import Stripe from 'stripe'
import ProductCard from './product-card'
import { useState } from 'react'

type Props = {
  products: Stripe.Product[]
}

const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase()
    const nameMatch = product.name.toLowerCase().includes(term)
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false

    return nameMatch || descriptionMatch
  })

  return (
    <div>
      <div className='flex justify-center mb-6'>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search products...'
          className='w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <ul className='grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3'>
        {filteredProduct.map((product, key) => (
          <li key={key}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
