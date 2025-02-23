import Header from '@/components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-amber-500">اتصل بنا</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="text-right">
                <h2 className="text-xl font-semibold mb-4 text-amber-500">معلومات الاتصال</h2>
                <div className="space-y-4">
                  <a href="tel:+201555012309" className="flex items-center justify-end gap-2 hover:text-amber-500">
                    <span dir="ltr">+20 155 501 2309</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </a>
                  <a href="mailto:drmutus777@gmail.com" className="flex items-center justify-end gap-2 hover:text-amber-500">
                    <span>drmutus777@gmail.com</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-gray-600">تابعونا على انستغرام: @dr.mutus</span>
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-right mb-1">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-right mb-1">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="أدخل رقم هاتفك"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-right mb-1">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-right mb-1">الرسالة</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="اكتب رسالتك هنا"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-400 text-gray-900 py-2 px-4 rounded-md hover:bg-amber-500 transition-colors"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}