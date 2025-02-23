import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

const featuredProducts = [
  {
    id: 1,
    name: 'Kazuarin Shampoo (4×1)',
    image: '/images/products/IMG-20250222-WA0006(1).jpg',
    description: 'شامبو مرطب عميق للشعر الجاف والمجعد',
    category: 'العناية بالشعر',
    benefits: ['ترطيب عميق', 'معالجة الشعر المجعد', 'إعادة حيوية الشعر']
  },
  {
    id: 2,
    name: 'Kazuarin Hair Cream (11×1)',
    image: '/images/products/IMG-20250222-WA0014.jpg',
    description: 'كريم الشعر للشعر الجاف والمجعد مع 11 فائدة مختلفة',
    category: 'العناية بالشعر',
    benefits: ['ترطيب عميق', 'تسريح سهل', 'تغذية متكاملة', 'حماية من التقصف']
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Cover Image */}
      <section className="relative h-[600px]">
        {/* Cover Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/products/IMG-20250222-WA0014.jpg"
            alt="DR.MUTUS Pharma Products"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative h-full bg-gradient-to-t from-black/70 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              DR.MUTUS Pharma
              <span className="block text-2xl md:text-3xl mt-2 text-amber-400">Products for Better Life</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              علامة تجارية أمريكية-مصرية رائدة في إنتاج منتجات العلاج الطبي ومستحضرات التجميل
            </p>
            <div className="flex gap-4">
              <Link 
                href="/products" 
                className="inline-block bg-amber-400 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-500 transition-colors"
              >
                تسوق الآن
              </Link>
              <Link 
                href="/contact" 
                className="inline-block bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">فئات المنتجات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 rounded-lg p-6 text-center hover:bg-amber-100 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">العناية بالشعر</h3>
              <p className="text-gray-600">مجموعة متكاملة من منتجات العناية بالشعر</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6 text-center hover:bg-amber-100 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">العناية بالبشرة</h3>
              <p className="text-gray-600">منتجات طبيعية للعناية بالبشرة</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6 text-center hover:bg-amber-100 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">العناية بالشفاه</h3>
              <p className="text-gray-600">علاجات متخصصة للشفاه</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">منتجاتنا المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-semibold mb-2 text-amber-500">{product.name}</h3>
                  <span className="inline-block bg-amber-100 text-amber-700 text-sm px-2 py-1 rounded mb-3">
                    {product.category}
                  </span>
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
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="inline-block bg-amber-400 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-500 transition-colors"
            >
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* Shopping Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">لماذا تختار منتجاتنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">جودة عالية</h3>
              <p className="text-gray-600">منتجات مختبرة ومضمونة</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">فعالية سريعة</h3>
              <p className="text-gray-600">نتائج ملحوظة وسريعة</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">توصيل سريع</h3>
              <p className="text-gray-600">خدمة توصيل موثوقة</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">دعم متواصل</h3>
              <p className="text-gray-600">خدمة عملاء 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-amber-500">تواصل معنا</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="https://wa.me/201555012309" 
              className="flex items-center gap-2 text-lg bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              تواصل عبر واتساب
            </a>
            <a 
              href="tel:+201155765177" 
              className="flex items-center gap-2 text-lg bg-amber-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              اتصل بنا
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
