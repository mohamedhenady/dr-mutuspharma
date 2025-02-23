import Header from '@/components/Header';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-amber-500">DR.MUTUS Pharma - Our Story</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8 relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/products/logo.png"
                alt="DR.MUTUS Pharma"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="space-y-6 text-right">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-amber-500">من نحن</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  DR.MUTUS Pharma علامة تجارية أمريكية-مصرية متخصصة في إنتاج منتجات العلاج الطبي ومستحضرات التجميل. نجمع بين العلم والتقاليد والراحة لتقديم منتجات عالية الجودة تلبي احتياجات عملائنا.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-amber-500">رؤيتنا</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  نسعى لأن نكون الشريك الموثوق به في رحلة العناية الصحية والتجميلية لعملائنا، من خلال تقديم منتجات مبتكرة تجمع بين العلم والطبيعة.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-amber-500">رسالتنا</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  تقديم حلول طبية وتجميلية مبتكرة وعالية الجودة تعزز نمط حياة أبسط وأكثر صحة للأفراد والعائلات والمجتمعات.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-amber-500">قيمنا</h2>
                <ul className="space-y-4">
                  <li className="flex items-center justify-end gap-3">
                    <span className="text-lg text-gray-700">الجودة والسلامة - جميع منتجاتنا مختبرة درماتولوجياً ومصممة لتكون آمنة وفعالة</span>
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </li>
                  <li className="flex items-center justify-end gap-3">
                    <span className="text-lg text-gray-700">الابتكار - نستخدم أحدث التقنيات والمكونات لتطوير منتجات متميزة</span>
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </li>
                  <li className="flex items-center justify-end gap-3">
                    <span className="text-lg text-gray-700">الشفافية - نلتزم بالصدق والوضوح في كل ما نقدمه</span>
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </li>
                  <li className="flex items-center justify-end gap-3">
                    <span className="text-lg text-gray-700">رضا العملاء - نضع احتياجات وسعادة عملائنا في مقدمة أولوياتنا</span>
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-amber-500">تواصل معنا</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-lg">drmutus777@gmail.com</span>
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-lg">@dr.mutus</span>
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}