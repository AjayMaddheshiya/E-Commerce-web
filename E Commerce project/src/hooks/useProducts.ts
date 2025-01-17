import { useState, useEffect } from 'react';
import type { Product } from '../types';

const PRODUCTS: Product[] = [
  // Electronics Category
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    price: 299.99,
    description: 'Advanced smartwatch with health tracking and cellular connectivity.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Ultra-Wide Monitor',
    price: 499.99,
    description: '34-inch curved ultra-wide monitor perfect for gaming and productivity.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics'
  },
  {
    id: '4',
    name: 'Professional Camera',
    price: 899.99,
    description: 'Full-frame mirrorless camera with 4K video capabilities.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics'
  },
  {
    id: '5',
    name: 'Wireless Earbuds Pro',
    price: 159.99,
    description: 'True wireless earbuds with active noise cancellation.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics'
  },

  // Gaming Category
  {
    id: '6',
    name: 'Gaming Console Pro',
    price: 499.99,
    description: 'Next-gen gaming console with 4K graphics and ray tracing.',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=800&q=80',
    category: 'Gaming'
  },
  {
    id: '7',
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    description: 'High-precision wireless gaming mouse with customizable RGB lighting.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    category: 'Gaming'
  },
  {
    id: '8',
    name: 'Mechanical Gaming Keyboard',
    price: 149.99,
    description: 'Professional mechanical keyboard with RGB backlight and Cherry MX switches.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    category: 'Gaming'
  },
  {
    id: '9',
    name: 'Gaming Headset',
    price: 129.99,
    description: '7.1 surround sound gaming headset with noise-canceling microphone.',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80',
    category: 'Gaming'
  },
  {
    id: '10',
    name: 'Gaming Chair',
    price: 299.99,
    description: 'Ergonomic gaming chair with lumbar support and adjustable armrests.',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80',
    category: 'Gaming'
  },

  // Smart Home Category
  {
    id: '11',
    name: 'Smart Home Hub',
    price: 129.99,
    description: 'Control your entire home with voice commands and smartphone app.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    category: 'Smart Home'
  },
  {
    id: '12',
    name: 'Smart LED Bulbs Set',
    price: 79.99,
    description: 'Color-changing smart LED bulbs with voice control.',
    image: 'https://images.unsplash.com/photo-1565864105346-dec8b1494dfd?auto=format&fit=crop&w=800&q=80',
    category: 'Smart Home'
  },
  {
    id: '13',
    name: 'Smart Thermostat',
    price: 199.99,
    description: 'AI-powered thermostat that learns your preferences.',
    image: 'https://images.unsplash.com/photo-1567925086884-ce5f6c4f1f1b?auto=format&fit=crop&w=800&q=80',
    category: 'Smart Home'
  },
  {
    id: '14',
    name: 'Security Camera System',
    price: 299.99,
    description: 'Wireless security cameras with night vision and motion detection.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d8c3908?auto=format&fit=crop&w=800&q=80',
    category: 'Smart Home'
  },
  {
    id: '15',
    name: 'Smart Door Lock',
    price: 159.99,
    description: 'Keyless entry smart lock with fingerprint and PIN access.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    category: 'Smart Home'
  },

  // Accessories Category
  {
    id: '16',
    name: 'Premium Leather Backpack',
    price: 129.99,
    description: 'Handcrafted leather backpack with laptop compartment.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  },
  {
    id: '17',
    name: 'Laptop Stand',
    price: 49.99,
    description: 'Ergonomic aluminum laptop stand with adjustable height.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  },
  {
    id: '18',
    name: 'Wireless Charger',
    price: 39.99,
    description: 'Fast wireless charging pad for smartphones.',
    image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  },
  {
    id: '19',
    name: 'USB-C Hub',
    price: 69.99,
    description: 'Multi-port USB-C hub with 4K HDMI and power delivery.',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  },
  {
    id: '20',
    name: 'Premium Mouse Pad',
    price: 29.99,
    description: 'Large gaming mouse pad with RGB lighting.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  }
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        setProducts(PRODUCTS);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
}