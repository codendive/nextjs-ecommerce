import Stripe from 'stripe'
import Image from 'next/image'
import { Button } from './ui/button'

type Props = {
  product: Stripe.Product
}

const ProductDetail = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price

  return (
    <div className='container flex flex-col items-center gap-8 px-4 py-8 mx-auto md:flex-row'>
      {product.images && product.images[0] && (
        <div className='relative w-full overflow-hidden rounded-lg h-96 md:w-1/2'>
          <Image
            src={product.images[0]}
            alt={product.name}
            layout='fill'
            objectFit='cover'
            className='transition duration-300 hover:opacity-90'
          />
        </div>
      )}
      <div className='md:w-1/2'>
        <h1 className='mb-4 text-3xl font-bold'>{product.name}</h1>
        {product.description && (
          <p className='mb-4 text-gray-700'>{product.description}</p>
        )}
        {price && price.unit_amount && (
          <p className='text-lg font-semibold text-gray-900'>
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
        <div className='flex items-center space-x-4'>
          <Button variant='outline'>–</Button>
          <span className='text-lg font-semibold'>0</span>
          <Button>+</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
