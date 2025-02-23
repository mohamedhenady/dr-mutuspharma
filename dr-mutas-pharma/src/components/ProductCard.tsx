import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
  benefits: string[];
  details: string;
  ingredients: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 right-4">
            <span className="inline-block bg-amber-400 text-gray-900 text-sm px-3 py-1 rounded-full font-semibold">
              {product.category}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6 text-right">
        <h3 className="text-xl font-semibold mb-2 text-amber-500">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ul className="space-y-2">
          {product.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center justify-end gap-2 text-gray-700">
              <span>{benefit}</span>
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </li>
          ))}
        </ul>
        <Link
          href="/products"
          className="inline-block mt-4 bg-amber-400 text-gray-900 px-6 py-2 rounded-lg text-sm hover:bg-amber-500 transition-colors"
        >
          عرض التفاصيل
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
