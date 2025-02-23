import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/products/logo.png" 
              alt="DR.MUTUS Pharma" 
              width={50} 
              height={50}
              className="ml-2"
            />
            <span className="text-xl font-bold text-amber-500">DR.MUTUS Pharma</span>
          </Link>
          
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="text-gray-600 hover:text-amber-500 transition-colors">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-600 hover:text-amber-500 transition-colors">
                المنتجات
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-amber-500 transition-colors">
                من نحن
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-amber-500 transition-colors">
                اتصل بنا
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}