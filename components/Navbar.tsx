import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white shadow'>
      <div className='container flex items-center justify-between px-4 py-4 mx-auto'>
        <Link href='/' className='hover:text-blue-600'>
          My Ecommerce
        </Link>
        <div className='hidden space-x-6 md:flex'>
          <Link href='/'>Home</Link>
          <Link href='/products' className='hover:text-blue-600'>
            Products
          </Link>
          <Link href='/checkout' className='hover:text-blue-600'>
            Checkout
          </Link>
        </div>
        <div className='flex items-center space-x-4'></div>
      </div>
    </nav>
  )
}

export default Navbar
