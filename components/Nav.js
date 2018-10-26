import Link from 'next/link'

const Nav = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    💈
    <Link href="/store">
      <a>Store</a>
    </Link>
  </div>
)

export default Nav
