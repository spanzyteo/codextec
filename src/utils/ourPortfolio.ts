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
    detail: '/portfolio/detail',
    image: '/portfolio/furniture-cart.png'
  },
  {
    id: 1,
    name: 'Jiamuqu',
    technology: 'Landing Page',
    detail: '/portfolio/detail',
    image: '/portfolio/jiamuqu.png'
  },
  {
    id: 2,
    name: 'Doughnation',
    technology: 'Business Website',
    detail: '/portfolio/detail',
    image: '/portfolio/doughnation.png'
  },
  {
    id: 3,
    name: 'Fifa Stream',
    technology: 'Landing Page',
    detail: '/portfolio/detail',
    image: '/portfolio/fifa-stream.png'
  },
  {
    id: 4,
    name: 'Extreme',
    technology: 'Business Website',
    detail: '/portfolio/detail',
    image: '/portfolio/extreme.png'
  },
]
