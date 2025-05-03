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
  longDescription: string
  longDescription2: string
  slug: string
}

export const workService: WorkServiceData[] = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: 'Business Website Development',
    slug: 'business-website-development',
    description:
      'Custom-built websites tailored to your brand and business goals, built with modern tech.',
    longDescription:
      'Our Business Website Development service is centered on creating tailored digital platforms that serve as the cornerstone of your brand’s online presence. We work closely with you to understand your specific business goals, audience demographics, and brand identity in order to build a custom solution that communicates your message effectively and elevates user experience. From dynamic design interfaces to responsive layouts that scale seamlessly across devices, every project is crafted with performance, accessibility, and user-centric design at its core. ',
    longDescription2:
      'Our development process integrates the latest in frontend and backend technologies, ensuring your website not only looks professional but also operates efficiently with secure architecture and SEO best practices. Our commitment extends beyond launch—we provide ongoing support, training, and updates to ensure your website evolves alongside your business. Whether you are establishing a new online identity or modernizing an existing one, our strategic development approach ensures your website becomes a valuable asset in customer engagement and business growth.',
  },
  {
    id: 2,
    icon: FaShoppingCart,
    title: 'E-Commerce Development',
    slug: 'e-commerce-development',
    description:
      'Sell your products online with fully integrated and responsive online stores.',
    longDescription:
      'Our E-Commerce Development service empowers businesses to establish and scale digital storefronts that are secure, user-friendly, and fully optimized for conversion. We deliver customized solutions that support a wide range of products and payment systems while providing intuitive navigation and seamless checkout experiences. From inventory management to order tracking and customer engagement tools, our systems are designed for flexibility and scalability. ',
    longDescription2:
      'Each e-commerce platform is crafted with modern frameworks and responsive designs that work flawlessly across all devices. Our development approach incorporates deep integration with payment gateways, shipping services, and marketing tools such as email automation, coupon systems, and SEO configurations. We also ensure adherence to data protection and PCI compliance standards, giving you and your customers peace of mind. With our e-commerce expertise, your business will be well-equipped to compete in the global marketplace and drive consistent online revenue.',
  },
  {
    id: 3,
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description:
      'Cross-platform mobile apps designed for performance, usability, and scalability.',
    longDescription:
      'Our Mobile App Development service focuses on building high-performing, user-centric mobile applications that offer seamless functionality across both Android and iOS platforms. We utilize a cross-platform development approach to ensure consistent performance, look, and feel, reducing development time and cost while maintaining quality. From ideation and prototyping to UI/UX design and final deployment, our team works collaboratively to deliver apps that are intuitive, secure, and scalable. We specialize in integrating real-time data, push notifications, payment systems, and third-party services to enrich the user experience.',
    longDescription2:
      'Our apps are rigorously tested to ensure high responsiveness, minimal load times, and compatibility across diverse devices. Whether you’re launching a customer-facing app or an internal tool for your organization, we craft solutions that align with your business objectives and enhance digital engagement. Post-launch, we offer maintenance and analytics-driven updates to continuously improve the app based on user feedback and usage trends.',
  },
  {
    id: 4,
    icon: FaGlobe,
    title: 'Landing Page Design',
    slug: 'landing-page-design',
    description:
      'High-converting landing pages built to capture leads and boost conversions.',
    longDescription:
      'Our Landing Page Design service is focused on creating visually compelling and conversion-optimized web pages tailored to specific marketing objectives. Whether the goal is to capture leads, promote a product launch, or drive event registrations, we craft landing pages that guide users toward taking clear, desired actions. We begin by identifying your target audience and campaign goals, then design a user flow and visual hierarchy that prioritize engagement. ',
    longDescription2:
      'Our designs are responsive, fast-loading, and strategically structured with persuasive content, clear CTAs, and trust-building elements like testimonials or security badges. Leveraging A/B testing and performance analytics, we continuously refine your landing pages to increase ROI. With close attention to detail and modern design principles, we ensure every element—from headlines and imagery to form placements and CTA buttons—works harmoniously to convert visitors into loyal customers.',
  },
  {
    id: 5,
    icon: FiServer,
    title: 'Hosting & Domain Setup',
    slug: 'hosting-and-domain-setup',
    description:
      'We help you get online with reliable hosting and professional domain setup.',
    longDescription:
      'Our Hosting & Domain Setup service simplifies the process of establishing your online presence by handling all technical aspects of domain registration and website hosting. We assist you in selecting an appropriate domain name that aligns with your brand identity and ensure that it is properly registered and configured. In addition, we set up reliable hosting solutions that guarantee site availability, fast load times, and secure data handling. ',
    longDescription2:
      'Whether you prefer shared hosting, VPS, or cloud-based infrastructure, we help you choose the best option based on your needs. Our team handles DNS configurations, SSL installations, email setups, and routine maintenance to ensure optimal performance and security. With proactive monitoring and technical support, we make sure your website remains operational and protected from potential threats. Our goal is to provide a hassle-free onboarding process into the digital space, ensuring your business or personal project is ready to connect with the world confidently and securely.',
  },
  {
    id: 6,
    icon: FaTools,
    title: 'Website Maintenance',
    slug: 'website-maintenance',
    description:
      'Ongoing support and performance optimization to keep your site fast and secure.',
    longDescription:
      'Our Website Maintenance service ensures that your digital presence remains current, secure, and fully operational at all times. We provide comprehensive support including software updates, security patching, performance monitoring, and content updates. By regularly auditing your site, we proactively identify and resolve potential issues before they impact your users. Our service includes uptime monitoring, database optimization, backup management, and bug fixing to maintain high standards of reliability and performance.',
    longDescription2:
      "We also implement best practices in SEO maintenance, mobile responsiveness, and browser compatibility to ensure optimal visibility and user experience. For businesses that rely heavily on their online platforms, our maintenance packages offer peace of mind, knowing that your site is in expert hands. Whether it's adding new features, updating plugins, or refining the design, our goal is to help your website evolve with your business and continue to deliver results.",
  },
]
