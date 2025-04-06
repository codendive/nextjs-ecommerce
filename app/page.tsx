import Image from 'next/image'
import { stripe } from '@/lib/stripe'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Carousel from '@/components/carousel'

const Home = async () => {
  const products = await stripe.products.list({
    expand: ['data.default_price']
  })

  return (
    <div>
      <section className='py-8 rounded bg-neutral-100 sm:py-12'>
        <div className='grid items-center grid-cols-1 gap-8 px-8 mx-auto justify-items-center sm:px-16 md:grid-cols-2'>
          <div className='max-w-md space-y-4'>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
              Welcome to My Ecommerce
            </h2>
            <p className='text-neutral-600'>
              Discover the latest products at the best prices.
            </p>
            <Button
              asChild
              variant='default'
              className='inline-flex items-center justify-center px-6 py-3 text-white bg-black rounded-full'
            >
              <Link
                href='/products'
                className='inline-flex items-center justify-center px-6 py-3 rounded-full'
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt='Hero Image'
            src={products.data[0].images[0]}
            className='rounded'
            width={450}
            height={450}
          />
        </div>
      </section>
      <section className='py-8'>
        <Carousel products={products.data} />
      </section>
    </div>
  )
}

export default Home
