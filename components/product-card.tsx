import Link from 'next/link'
import Stripe from 'stripe'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

interface Props {
  product: Stripe.Product
}

const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price

  return (
    <Link href={`/products/${product.id}`} className='block h-full'>
      <Card className='flex flex-col h-full gap-0 py-0 transition duration-300 border-gray-300 group hover:shadow-2xl'>
        {product.images && product.images[0] && (
          <div className='relative w-full h-60'>
            <Image
              src={product.images[0]}
              alt={product.name}
              layout='fill'
              objectFit='cover'
              className='transition-opacity duration-300 rounded-t-lg group-hover:opacity-90'
            />
          </div>
        )}
        <CardHeader className='p-4'>
          <CardTitle className='text-xl font-bold text-gray-800'>
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col justify-between flex-grow p-4'>
          {product.description && (
            <p className='mb-2 text-sm text-gray-600'>{product.description}</p>
          )}
          {price && price.unit_amount && (
            <p className='text-lg font-semibold text-gray-900'>
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <Button className='mt-4 text-white bg-black'>View Details</Button>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProductCard
