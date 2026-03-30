import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white shadow' : 'bg-transparent'} `}>
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between p-4">
        <Image src="/images/logo/logo2.png" alt="MECANO" width={180} height={180} className="animate-fadeIn" />
        <ul className="flex gap-6 text-sm font-medium">
          <li><Link href="#productos" className="hover:text-mecano-orange">Sistemas</Link></li>
          <li><Link href="#proyectos" className="hover:text-mecano-orange">Proyectos</Link></li>
          <li><Link href="#contacto" className="hover:text-mecano-orange">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
