import Stripe from 'stripe'
import ProductCard from './product-card'

type Props = {
  products: Stripe.Product[]
}

const ProductList = ({ products }: Props) => {
  return (
    <div>
      <div className='flex justify-center mb-6'>
        <input
          type='text'
          placeholder='Search products...'
          className='w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <ul className='grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product, key) => (
          <li key={key}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
