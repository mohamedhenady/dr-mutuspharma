import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'العناية بالشعر',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'العناية بالبشرة',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'العناية بالشفاه',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

const products = [
  {
    id: 1,
    name: 'Kazuarin Shampoo (4×1)',
    image: '/images/products/IMG-20250222-WA0006(1).jpg',
    description: 'شامبو مرطب عميق للشعر الجاف والمجعد (100 مل)',
    category: 'العناية بالشعر',
    benefits: ['ترطيب عميق', 'معالجة الشعر المجعد', 'إعادة حيوية الشعر'],
    details: 'حجم العبوة: 100 مل',
    ingredients: 'مكونات طبيعية مختارة بعناية لترطيب وتغذية الشعر'
  },
  {
    id: 2,
    name: 'Kazuarin Shampoo (5×1)',
    image: '/images/products/IMG-20250222-WA0007(1).jpg',
    description: 'شامبو خالي من السلفات للعناية اليومية مع زيت الأرغان وجوز الهند',
    category: 'العناية بالشعر',
    benefits: ['خالي من السلفات', 'غني بزيت الأرغان وزيت جوز الهند', 'يحتوي على فيتامين B5 وE'],
    details: 'حجم العبوة: 100 مل',
    ingredients: 'زيت جوز الهند، زيت الأرغان، فيتامين B5، فيتامين E'
  },
  {
    id: 3,
    name: 'Kazuarin Kids Shampoo',
    image: '/images/products/IMG-20250222-WA0009.jpg',
    description: 'شامبو لطيف مخصص للأطفال مع الألوة فيرا',
    category: 'العناية بشعر الأطفال',
    benefits: ['تركيبة لطيفة', 'يحتوي على الألوة فيرا', 'ترطيب وتغذية'],
    details: 'حجم العبوة: 100 مل',
    ingredients: 'الألوة فيرا، زيت الأرغان، مكونات طبيعية لطيفة'
  },
  {
    id: 4,
    name: 'Blend Soap',
    image: '/images/products/IMG-20250222-WA0010.jpg',
    description: 'صابون لطيف للاستخدام اليومي',
    category: 'العناية بالبشرة',
    benefits: ['تنظيف لطيف', 'يترك البشرة ناعمة ومنتعشة'],
    details: 'حجم العبوة: 50 جرام',
    ingredients: 'مكونات طبيعية مختارة للتنظيف اللطيف'
  },
  {
    id: 5,
    name: 'Kazuarin Hair Cream (11×1)',
    image: '/images/products/IMG-20250222-WA0014.jpg',
    description: 'كريم الشعر للشعر الجاف والمجعد مع 11 فائدة مختلفة',
    category: 'العناية بالشعر',
    benefits: ['ترطيب عميق', 'تسريح سهل', 'تغذية متكاملة', 'حماية من التقصف'],
    details: 'حجم العبوة: 100 مل',
    ingredients: 'مزيج من المكونات المرطبة والمغذية'
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-amber-500">تصفح حسب الفئة</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                  {category.icon}
                </span>
                <span className="text-gray-700">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center text-amber-500">منتجاتنا</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-block bg-amber-400 text-gray-900 text-sm px-3 py-1 rounded-full font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-right">
                  <h3 className="text-xl font-semibold mb-2 text-amber-500">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-amber-500">المميزات:</h4>
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
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>{product.details}</p>
                    <p>المكونات الرئيسية: {product.ingredients}</p>
                  </div>
                  <div className="mt-6 flex justify-end gap-4">
                    <a 
                      href={`https://wa.me/201555012309?text=استفسار عن ${product.name}`}
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                      استفسار
                    </a>
                    <button className="bg-amber-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors text-sm">
                      اطلب الآن
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-amber-500">للطلب والاستفسار</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://wa.me/201555012309" 
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              تواصل عبر واتساب
            </a>
            <a 
              href="tel:+201155765177" 
              className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              اتصل بنا
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}