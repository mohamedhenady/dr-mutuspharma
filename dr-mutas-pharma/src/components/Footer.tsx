import React from 'react';
import Link from 'next/link';
import type { ReactElement } from 'react';

const Footer = (): ReactElement => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">© 2023 DR.MUTUS Pharma. جميع الحقوق محفوظة.</p>
        <div className="mt-4 flex justify-center gap-4">
          <Link legacyBehavior href="/about">
            <a className="text-gray-600 hover:text-amber-500 transition-colors">من نحن</a>
          </Link>
          <Link legacyBehavior href="/products">
            <a className="text-gray-600 hover:text-amber-500 transition-colors">المنتجات</a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="text-gray-600 hover:text-amber-500 transition-colors">اتصل بنا</a>
          </Link>
        </div>
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://www.facebook.com/profile.php?id=61570933808425" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-gray-600 hover:text-amber-500 transition-colors">
            Facebook
          </a>
          <a href="https://www.instagram.com/dr.mutus?igsh=Zm1tOGp0MmttNHdk" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-gray-600 hover:text-amber-500 transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
