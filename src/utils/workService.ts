import { IconType } from 'react-icons'
import {
  FaLaptopCode,
  FaShoppingCart,
  FaGlobe,
  FaMobileAlt,
  FaTools,
} from 'react-icons/fa'
import { FiServer } from 'react-icons/fi'

export interface WorkServiceData {
  id: number
  icon: IconType
  title: string
  description: string
}

export const workService: WorkServiceData[] = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: 'Business Website Development',
    description:
      'Custom-built websites tailored to your brand and business goals, built with modern tech.',
  },
  {
    id: 2,
    icon: FaShoppingCart,
    title: 'E-Commerce Development',
    description:
      'Sell your products online with fully integrated and responsive online stores.',
  },
  {
    id: 3,
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps designed for performance, usability, and scalability.',
  },
  {
    id: 4,
    icon: FaGlobe,
    title: 'Landing Page Design',
    description:
      'High-converting landing pages built to capture leads and boost conversions.',
  },
  {
    id: 5,
    icon: FiServer,
    title: 'Hosting & Domain Setup',
    description:
      'We help you get online with reliable hosting and professional domain setup.',
  },
  {
    id: 6,
    icon: FaTools,
    title: 'Website Maintenance',
    description:
      'Ongoing support and performance optimization to keep your site fast and secure.',
  },
]
