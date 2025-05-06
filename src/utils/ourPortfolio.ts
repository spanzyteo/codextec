export interface PortfolioData {
  id: number
  name: string
  technology: string
  detail: string
  image: string
}

export const portfolio: PortfolioData[] = [
  {
    id: 0,
    name: 'Prince. M Furniture',
    technology: 'Ecommerce Site',
    detail: 'https://furniture-cart-inky.vercel.app/',
    image: '/portfolio/furniture-cart.png',
  },
  {
    id: 1,
    name: 'Jiamuqu',
    technology: 'Landing Page',
    detail: 'https://jiamuqu.vercel.app/',
    image: '/portfolio/jiamuqu.png',
  },
  {
    id: 2,
    name: 'Doughnation',
    technology: 'Business Website',
    detail: 'https://doughnation.vercel.app/',
    image: '/portfolio/doughnation.png',
  },
  {
    id: 3,
    name: 'Fifa Stream',
    technology: 'Landing Page',
    detail: 'https://fifa-token.vercel.app/',
    image: '/portfolio/fifa-stream.png',
  },
  {
    id: 4,
    name: 'Extreme',
    technology: 'Business Website',
    detail: 'https://extreme-flax.vercel.app/',
    image: '/portfolio/extreme.png',
  },
]
