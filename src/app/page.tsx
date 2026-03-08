'use client';
import { useEffect, useState } from 'react';

export default function Home() {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 50);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-reveal');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            if (!section.classList.contains('bg-mecano-slate') || section.id === 'contacto') {
                section.classList.add('opacity-0');
                observer.observe(section);
            } else {
                 section.classList.add('opacity-0');
                 observer.observe(section);
            }
            
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            

    
    <header className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b transition-transform duration-500 will-change-transform ${isScrollingUp ? 'translate-y-0 border-mecano-slate/10 shadow-sm' : '-translate-y-full border-transparent'}`}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-6 lg:px-12">
            
            <div className="flex items-center gap-3 group cursor-pointer">
                <img src="/images/logo/logo2.png" alt="MECANO Solutions" className="h-10 w-auto transition-transform group-hover:scale-105" />
            </div>

            
            <nav className="hidden lg:flex items-center gap-10">
                <a href="#productos" className="relative group text-sm font-600 uppercase tracking-widest hover:text-mecano-orange transition-colors">Sistemas<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-mecano-orange transition-all duration-300 group-hover:w-full"></span></a>
                <a href="#proyectos" className="relative group text-sm font-600 uppercase tracking-widest hover:text-mecano-orange transition-colors">Proyectos<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-mecano-orange transition-all duration-300 group-hover:w-full"></span></a>
                <a href="#certificaciones" className="relative group text-sm font-600 uppercase tracking-widest hover:text-mecano-orange transition-colors">Normativa<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-mecano-orange transition-all duration-300 group-hover:w-full"></span></a>
                <div className="h-8 w-px bg-mecano-slate/10"></div>
                <a href="tel:+56223456789" className="text-xs font-700 tracking-tighter">
                    <span className="block text-mecano-orange uppercase">Línea Técnica</span>
                    +56 2 2345 6789
                </a>
            </nav>

            <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })} className="bg-mecano-orange text-white px-8 py-3 font-display font-700 text-xs uppercase tracking-[0.1em] hover:bg-mecano-slate transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-mecano-orange/20 hover:shadow-mecano-slate/30 active:scale-95 group relative overflow-hidden"><span className="relative z-10 block transition-transform duration-300 group-hover:scale-105">Cotizar Proyecto</span><div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150"></div></button>
        </div>
    </header>

    <main className="pt-20">
        
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-mecano-slate industrial-grid">
            <div className="absolute inset-0 bg-gradient-to-r from-mecano-slate via-mecano-slate/80 to-transparent z-10">
            </div>

            
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block border-l border-white/5">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <img  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
                        alt="Warehouse structural racks" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20 grid lg:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="h-px w-12 bg-mecano-orange"></span>
                        <span className="text-mecano-orange font-semibold text-xs uppercase tracking-[0.3em]">Acero
                            Certificado NCH2369</span>
                    </div>

                    <h1
                        className="font-display font-800 text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tighter mb-8 italic">
                        ÁNGULO <br  />
                        <span className="text-mecano-orange">RANURADO</span>
                    </h1>

                    <p
                        className="text-mecano-gray/70 text-lg md:text-xl max-w-xl mb-12 leading-relaxed border-l-2 border-mecano-orange pl-6">
                        Fabricamos soluciones de almacenamiento modulares diseñadas para maximizar el espacio crítico en
                        bodegas, talleres y logística en todo Chile.
                    </p>

                    <div className="flex flex-wrap gap-6 items-center">
                        <button
                            className="bg-mecano-orange text-white px-10 py-5 font-display font-700 text-sm uppercase tracking-widest hover:bg-white hover:text-mecano-slate transition-all shadow-xl shadow-mecano-orange/10">
                            Ver Catálogo Técnico
                        </button>
                        <div className="flex items-center gap-3">
                            <span
                                className="text-white/40 text-[10px] font-semibold uppercase tracking-widest leading-none">Certificado
                                por</span>
                            <span className="text-white font-bold text-sm tracking-tighter uppercase italic">ISO
                                9001:2015</span>
                        </div>
                    </div>
                </div>

                
                <div className="hidden lg:flex items-end justify-end">
                    <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 w-80">
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                                <span className="text-[10px] text-white/50 uppercase font-600 tracking-widest">Capacidad
                                    Max</span>
                                <span className="text-mecano-orange font-bold text-2xl">3000KG</span>
                            </div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                                <span className="text-[10px] text-white/50 uppercase font-600 tracking-widest">Ajuste
                                    Mod</span>
                                <span className="text-white font-bold">25.0 MM</span>
                            </div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                                <span
                                    className="text-[10px] text-white/50 uppercase font-600 tracking-widest">Resistencia</span>
                                <span className="text-white font-bold tracking-tighter uppercase italic">Antisísmico</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-mecano-orange animate-pulse"></div>
                                <span className="text-[9px] text-white/40 uppercase font-700 tracking-widest">Cotizaciones
                                    en tiempo real</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="bg-mecano-slate py-16 border-y border-white/5 relative z-10 shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-mecano-orange/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 divide-x divide-white/10 text-white">
                <div className="flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-mecano-orange font-display font-900 text-5xl md:text-6xl tracking-tighter group-hover:drop-shadow-[0_0_15px_rgba(242,140,56,0.5)] transition-all">15+</span>
                    <span className="text-[10px] uppercase font-700 tracking-[0.2em] text-white/50 mt-2 block group-hover:text-white/80 transition-colors">Años Expertiz</span>
                </div>
                <div className="flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-mecano-orange font-display font-900 text-5xl md:text-6xl tracking-tighter group-hover:drop-shadow-[0_0_15px_rgba(242,140,56,0.5)] transition-all">800+</span>
                    <span className="text-[10px] uppercase font-700 tracking-[0.2em] text-white/50 mt-2 block group-hover:text-white/80 transition-colors">Proyectos RM</span>
                </div>
                <div className="flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-mecano-orange font-display font-900 text-5xl md:text-6xl tracking-tighter group-hover:drop-shadow-[0_0_15px_rgba(242,140,56,0.5)] transition-all">100%</span>
                    <span className="text-[10px] uppercase font-700 tracking-[0.2em] text-white/50 mt-2 block group-hover:text-white/80 transition-colors">Acero Nacional</span>
                </div>
                <div className="flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-mecano-orange font-display font-900 text-5xl md:text-6xl tracking-tighter group-hover:drop-shadow-[0_0_15px_rgba(242,140,56,0.5)] transition-all">24h</span>
                    <span className="text-[10px] uppercase font-700 tracking-[0.2em] text-white/50 mt-2 block group-hover:text-white/80 transition-colors">Plazo Cotización</span>
                </div>
            </div>
        </section>

        
        <section id="productos" className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 animate-fade-up">
                    <div className="max-w-xl">
                        <span className="text-mecano-orange font-700 text-xs uppercase tracking-[0.4em] block mb-4">Sistemas
                            de Almacenaje</span>
                        <h2 className="font-display font-800 text-5xl lg:text-7xl tracking-tighter leading-[0.95]">
                            INGENIERÍA <br  /> EN <span
                                className="italic text-mecano-slate/20 text-stroke italic">LOGÍSTICA</span>
                        </h2>
                    </div>
                    <p className="text-mecano-slate/60 max-w-sm text-sm font-500 leading-relaxed uppercase tracking-wider">
                        Estructuras certificadas bajo la norma chilena de diseño sísmico de estructuras industriales
                        NCH2369.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[1000px]">
                    
                    <div
                        className="md:col-span-8 md:row-span-1 bg-mecano-slate group relative overflow-hidden flex items-end p-10 cursor-pointer">
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                            <img  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
                                alt="Rack Selectivo"
                                className="w-full h-full object-cover grayscale brightness-50 transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="relative z-20 flex flex-col items-start w-full">
                            <span
                                className="bg-mecano-orange text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest mb-4">Industrial
                                Heavy Duty</span>
                            <h3 className="text-white font-display font-800 text-4xl lg:text-5xl uppercase italic mb-2">
                                Racks Selectivos</h3>
                            <p className="text-white/60 max-w-md text-sm mb-8">Acceso directo a cada pallet. Configurable
                                para cargas pesadas hasta 3000kg por nivel.</p>
                            <button
                                className="flex items-center gap-3 text-mecano-orange font-bold text-xs uppercase tracking-widest">
                                <span>Detalles Técnicos</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    
                    <div
                        className="md:col-span-4 md:row-span-2 bg-mecano-orange p-10 flex flex-col justify-center relative overflow-hidden group cursor-pointer">
                        <div className="relative z-20">
                            <span className="text-mecano-slate font-800 text-xs uppercase tracking-widest mb-6 block">Best
                                Seller Logístico</span>
                            <h3
                                className="text-mecano-slate font-display font-800 text-5xl lg:text-6xl uppercase italic leading-none mb-6">
                                ÁNGULO <br  /> RANURADO</h3>
                            <p className="text-mecano-slate/80 text-sm mb-12 font-500">Versatilidad total para carga
                                liviana. Ajustes precisos cada 25mm. Fabricación 100% acero chileno.</p>
                            <div className="w-16 h-px bg-mecano-slate mb-8 transition-all group-hover:w-32"></div>
                            <span className="text-mecano-slate font-bold text-xs uppercase tracking-widest">Cotización
                                Express</span>
                        </div>
                        <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-20 group-hover:scale-125 transition-transform duration-1000"><img src="/images/productos/estaterias angulo ranurado.png" alt="Ángulo Ranurado" className="w-full h-full object-cover object-left-top mix-blend-multiply" /></div>
                    </div>

                    
                    <div
                        className="md:col-span-4 md:row-span-1 bg-mecano-gray p-10 flex flex-col justify-between border-t border-mecano-slate/5 group cursor-pointer">
                        <div className="flex justify-between items-start">
                            <h3 className="font-display font-800 text-3xl uppercase leading-none">FULL <br  /> SPACE</h3>
                            <span
                                className="w-12 h-12 rounded-full border border-mecano-slate/20 flex items-center justify-center group-hover:bg-mecano-slate group-hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </div>
                        <div>
                            <p className="text-mecano-slate/60 text-xs uppercase font-700 tracking-wider mb-2">Ahorro de
                                superficie</p>
                            <p className="text-sm font-500">Duplica la capacidad eliminando pasillos muertos.</p>
                        </div>
                    </div>

                    
                    <div
                        className="md:col-span-4 md:row-span-1 bg-mecano-gray/30 p-10 flex flex-col justify-between border-t border-l border-mecano-slate/5 group cursor-pointer">
                        <div className="flex justify-between items-start">
                            <h3 className="font-display font-800 text-3xl uppercase leading-none">ALTILLOS <br  /> MEZZANINE
                            </h3>
                            <span
                                className="w-12 h-12 rounded-full border border-mecano-slate/20 flex items-center justify-center group-hover:bg-mecano-slate group-hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </div>
                        <div>
                            <p className="text-mecano-orange font-700 text-xs uppercase tracking-wider mb-2">Optimización
                                vertical</p>
                            <p className="text-sm font-500">Crea nuevos m² sin ampliar la construcción física.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="py-24 bg-mecano-slate text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none industrial-grid"></div>
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-16 relative z-20">
                <div
                    className="flex flex-col gap-6 p-10 border border-white/10 hover:border-mecano-orange/50 transition-colors">
                    <div
                        className="w-12 h-12 bg-mecano-orange flex items-center justify-center font-display font-800 italic">
                        01</div>
                    <h4 className="font-display font-800 text-2xl uppercase tracking-tighter italic">Ingeniería Local</h4>
                    <p className="text-white/50 text-sm leading-relaxed">Diseñamos cada estructura considerando el entorno
                        sísmico único de Chile, garantizando estabilidad máxima bajo carga crítica.</p>
                </div>
                <div
                    className="flex flex-col gap-6 p-10 border border-white/10 hover:border-mecano-orange/50 transition-colors bg-white/5">
                    <div
                        className="w-12 h-12 bg-mecano-orange flex items-center justify-center font-display font-800 italic">
                        02</div>
                    <h4 className="font-display font-800 text-2xl uppercase tracking-tighter italic">Acero de Alta
                        Resistencia</h4>
                    <p className="text-white/50 text-sm leading-relaxed">Utilizamos perfiles laminados en frío y
                        recubrimientos epóxicos industriales para prevenir la corrosión y el desgaste.</p>
                </div>
                <div
                    className="flex flex-col gap-6 p-10 border border-white/10 hover:border-mecano-orange/50 transition-colors">
                    <div
                        className="w-12 h-12 bg-mecano-orange flex items-center justify-center font-display font-800 italic">
                        03</div>
                    <h4 className="font-display font-800 text-2xl uppercase tracking-tighter italic">Entrega Rápida</h4>
                    <p className="text-white/50 text-sm leading-relaxed">Contamos con stock permanente de componentes
                        estándar para montajes en plazos récord dentro de la Región Metropolitana.</p>
                </div>
            </div>
        </section>

        
        <section id="contacto" className="bg-mecano-gray py-24">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="bg-white p-12 lg:p-20 shadow-2xl flex flex-col lg:flex-row gap-16 relative">
                    <div className="lg:w-1/2">
                        <span className="text-mecano-orange font-700 text-xs uppercase tracking-[0.4em] block mb-4">Línea de
                            Atención</span>
                        <h2 className="font-display font-800 text-5xl lg:text-7xl tracking-tighter leading-[0.95] mb-10">
                            COTIZA TU <br  /> OPERACIÓN</h2>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group cursor-pointer"
                                onClick={() => {window.open('https://wa.me/56999813058', '_blank')}}>
                                <div
                                    className="w-14 h-14 bg-mecano-slate text-mecano-orange flex items-center justify-center transition-transform group-hover:scale-110">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path
                                            d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.146-.069-.329-.094-.744-.246-1.575-.591-1.398-.581-2.296-2.013-2.366-2.106-.07-.092-.563-.748-.563-1.425 0-.677.352-1.011.478-1.151.126-.14.276-.175.367-.175.092 0 .183.001.263.005.086.003.203-.032.317.243.117.281.401.979.436 1.049.035.07.059.151.012.243-.046.092-.07.151-.139.232-.07.081-.146.182-.209.244-.07.07-.143.147-.061.288.082.141.365.603.782.975.539.48 1.002.619 1.142.69.141.071.223.058.305-.035s.352-.406.446-.546c.093-.141.187-.117.316-.07.13.047.82.387.962.457s.236.105.271.162c.036.059.035.342-.109.747z" />
                                    </svg>
                                </div>
                                <div>
                                    <span
                                        className="block text-[10px] font-bold text-mecano-slate/40 uppercase tracking-widest">Atención
                                        WhatsApp</span>
                                    <span className="text-xl font-display font-800 text-mecano-slate">+56 9 9981 3058</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div
                                    className="w-14 h-14 bg-mecano-gray text-mecano-slate flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <span
                                        className="block text-[10px] font-bold text-mecano-slate/40 uppercase tracking-widest">Email
                                        Corporativo</span>
                                    <span
                                        className="text-xl font-display font-800 text-mecano-slate tracking-tight">contacto@mecanosolutions.cl</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div
                                    className="w-14 h-14 bg-mecano-gray text-mecano-slate flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span
                                        className="block text-[10px] font-bold text-mecano-slate/40 uppercase tracking-widest">Base
                                        de Operaciones</span>
                                    <span
                                        className="text-lg font-display font-800 text-mecano-slate tracking-tight leading-none">Colina,
                                        Región Metropolitana</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 bg-mecano-slate p-12 text-white">
                        <h3
                            className="font-display font-800 text-2xl uppercase italic border-b border-white/10 pb-6 mb-8 tracking-tighter">
                            Formulario de Requerimiento</h3>
                        <form className="space-y-6">
                            <div>
                                <label
                                    className="text-[10px] uppercase font-700 tracking-widest text-white/50 mb-2 block">Nombre
                                    / Empresa</label>
                                <input  type="text"
                                    className="w-full bg-transparent border-b border-white/20 py-2 focus:border-mecano-orange outline-none transition-colors" />
                            </div>
                            <div>
                                <label
                                    className="text-[10px] uppercase font-700 tracking-widest text-white/50 mb-2 block">Email
                                    de Contacto</label>
                                <input  type="email"
                                    className="w-full bg-transparent border-b border-white/20 py-2 focus:border-mecano-orange outline-none transition-colors" />
                            </div>
                            <div>
                                <label
                                    className="text-[10px] uppercase font-700 tracking-widest text-white/50 mb-2 block">Sistema
                                    de Interés</label>
                                <select
                                    className="w-full bg-transparent border-b border-white/20 py-2 focus:border-mecano-orange outline-none transition-colors">
                                    <option className="bg-mecano-slate">Ángulo Ranurado</option>
                                    <option className="bg-mecano-slate">Racks Selectivos</option>
                                    <option className="bg-mecano-slate">Full Space</option>
                                    <option className="bg-mecano-slate">Altillos / Entreplantas</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    className="text-[10px] uppercase font-700 tracking-widest text-white/50 mb-2 block">Detalles
                                    del Proyecto</label>
                                <textarea id="detalles" rows="3" title="Detalles del Proyecto"
                                    placeholder="Describa brevemente su necesidad..."
                                    className="w-full bg-transparent border-b border-white/20 py-2 focus:border-mecano-orange outline-none transition-colors resize-none"></textarea>
                            </div>
                            <button type="submit"
                                className="w-full bg-mecano-orange py-5 font-display font-800 uppercase tracking-widest hover:bg-white hover:text-mecano-slate transition-all mt-4">
                                Enviar Requerimiento
                            </button>
                        </form>
                    </div>

                    
                    <div
                        className="absolute -right-4 -bottom-4 bg-mecano-orange text-mecano-slate p-4 font-display font-900 text-6xl opacity-10 pointer-events-none">
                        MECANO
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer className="bg-mecano-slate pt-24 pb-12 text-white overflow-hidden relative border-t-[8px] border-mecano-orange">
        <div className="absolute inset-0 opacity-5 pointer-events-none industrial-grid"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 border-b border-white/10 pb-16">
                
                <div className="md:col-span-5 flex flex-col gap-6">
                    <img src="/images/logo/Logo.png" alt="MECANO Solutions" className="h-10 w-auto opacity-90 object-contain self-start" />
                    <p className="text-sm font-400 text-white/50 max-w-sm leading-relaxed mt-4">
                        Expertos en soluciones de almacenaje estructurales. Ingeniería y desarrollo de sistemas modulares para la optimización crítica de espacios industriales en Chile.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-mecano-orange hover:border-mecano-orange transition-all cursor-pointer group">
                            <span className="text-white/50 group-hover:text-white font-bold text-xs">IN</span>
                        </div>
                        <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-mecano-orange hover:border-mecano-orange transition-all cursor-pointer group">
                            <svg className="w-4 h-4 fill-white/50 group-hover:fill-white" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.146-.069-.329-.094-.744-.246-1.575-.591-1.398-.581-2.296-2.013-2.366-2.106-.07-.092-.563-.748-.563-1.425 0-.677.352-1.011.478-1.151.126-.14.276-.175.367-.175.092 0 .183.001.263.005.086.003.203-.032.317.243.117.281.401.979.436 1.049.035.07.059.151.012.243-.046.092-.07.151-.139.232-.07.081-.146.182-.209.244-.07.07-.143.147-.061.288.082.141.365.603.782.975.539.48 1.002.619 1.142.69.141.071.223.058.305-.035s.352-.406.446-.546c.093-.141.187-.117.316-.07.13.047.82.387.962.457s.236.105.271.162c.036.059.035.342-.109.747z" /></svg>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3 flex flex-col gap-6">
                    <span className="text-mecano-orange font-700 text-[10px] uppercase tracking-widest">Navegación</span>
                    <ul className="flex flex-col gap-3">
                        <li><a href="#productos" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-mecano-orange group-hover:w-4 transition-all"></span>Sistemas Modulares</a></li>
                        <li><a href="#certificaciones" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-mecano-orange group-hover:w-4 transition-all"></span>Normativa y Diseño</a></li>
                        <li><a href="#proyectos" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-mecano-orange group-hover:w-4 transition-all"></span>Casos de Éxito</a></li>
                        <li><a href="#contacto" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"><span className="w-0 h-px bg-mecano-orange group-hover:w-4 transition-all"></span>Portal de Cotización</a></li>
                    </ul>
                </div>

                <div className="md:col-span-4 flex flex-col gap-6">
                    <span className="text-mecano-orange font-700 text-[10px] uppercase tracking-widest">Base de Operaciones</span>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-4 items-start">
                            <span className="w-6 h-6 border border-white/10 flex items-center justify-center shrink-0 text-white/40">⌖</span>
                            <div>
                                <span className="block text-white/80 text-sm">Carretera Gral. San Martín Mz. A sitio 18</span>
                                <span className="block text-white/40 text-xs mt-1">Colina, Región Metropolitana</span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-center">
                            <span className="w-6 h-6 border border-white/10 flex items-center justify-center shrink-0 text-white/40">📞</span>
                            <span className="text-white/80 text-sm font-mono">+56 2 2345 6789</span>
                        </li>
                        <li className="flex gap-4 items-center">
                            <span className="w-6 h-6 border border-white/10 flex items-center justify-center shrink-0 text-white/40">✉</span>
                            <span className="text-white/80 text-sm hover:text-mecano-orange transition-colors cursor-pointer">contacto@mecanosolutions.cl</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">© {new Date().getFullYear()} Mecano Solutions Chile. Todos los derechos reservados.</span>
                <span className="text-[10px] font-medium text-white/20 uppercase tracking-[0.4em]">Optimización Crítica de Espacios</span>
            </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-900 text-white/5 opacity-10 pointer-events-none uppercase tracking-tighter whitespace-nowrap overflow-hidden w-full text-center">MECANO SOLUTIONS</div>
    </footer>

    

        </>
    );
}
