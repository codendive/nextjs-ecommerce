import ProductDetail from '@/components/product-detail'
import { stripe } from '@/lib/stripe'

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await stripe.products.retrieve(params.id, {
    expand: ['default_price']
  })
  return <ProductDetail product={product} />
}

export default ProductPage
