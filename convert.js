const fs = require('fs');
const path = require('path');

const landingPath = path.resolve(__dirname, '..', 'website', 'Landing.html');
let rawHtml = fs.readFileSync(landingPath, 'utf-8');

// Extract the <body> content minus script tags
const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
    console.error("Could not find body tag");
    process.exit(1);
}

let bodyContent = bodyMatch[1];
// remove script tags
bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
// remove HTML comments
bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, '');

// Convert class to className
bodyContent = bodyContent.replace(/class="/g, 'className="');
// Convert for to htmlFor
bodyContent = bodyContent.replace(/for="/g, 'htmlFor="');
// Convert inline styles if any (actually there are none in the HTML except the head style which we already copied to globals.css)
bodyContent = bodyContent.replace(/onclick="([^"]*)"/g, "onClick={() => {$1}}");

// Make standard void elements self-closing
const voidElements = ['img', 'input', 'br', 'hr', 'path', 'rect', 'circle', 'line', 'polyline'];
voidElements.forEach(tag => {
    // A simplistic regex to self-close tags that are not already closed
    // e.g. <img src="..."> to <img src="..." />
    const regex = new RegExp('<' + tag + '\\b([^>]*?)(?<!/)>', 'g');
    bodyContent = bodyContent.replace(regex, '<' + tag + ' $1 />');
});

// SVG CamelCase for specific attrs
const svgAttributes = [
    'stroke-width', 'stroke-linecap', 'stroke-linejoin', 
    'fill-rule', 'clip-rule', 'view-box', 'charset'
];
svgAttributes.forEach(attr => {
    const camel = attr.replace(/-([a-z])/g, g => g[1].toUpperCase());
    bodyContent = bodyContent.replace(new RegExp(attr + '=', 'g'), camel + '=');
});

// Replace logos
bodyContent = bodyContent.replace(
    /<div\s+className="w-10 h-10 bg-mecano-slate flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">[\s\S]*?<\/svg>\s*<\/div>\s*<div className="flex flex-col gap-0">\s*<span className="font-display font-800 text-xl leading-none tracking-tighter uppercase">MECANO<\/span>\s*<span\s*className="text-\[10px\] font-semibold text-mecano-orange tracking-\[0\.2em\] leading-none uppercase">SOLUTIONS<\/span>\s*<\/div>/g,
    '<img src="/images/logo/logo2.png" alt="MECANO Solutions" className="h-10 w-auto transition-transform group-hover:scale-105" />'
);

bodyContent = bodyContent.replace(
    /<div className="flex flex-col gap-0">\s*<span className="font-display font-900 text-3xl leading-none tracking-tighter uppercase">MECANO<\/span>\s*<span\s*className="text-\[10px\] font-semibold text-mecano-orange tracking-\[0\.3em\] leading-none uppercase">SOLUTIONS<\/span>\s*<\/div>/g,
    '<img src="/images/logo/Logo.png" alt="MECANO Solutions" className="h-10 w-auto opacity-80" />'
);


// Replace specific product images
bodyContent = bodyContent.replace(
    /<img  src="https:\/\/images.unsplash.com\/photo-1586528116311-ad8dd3c8310d\?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"\s*alt="Warehouse structural racks" className="w-full h-full object-cover" \/>/g,
    '<img src="/images/productos/rackselectivo.jpg" alt="Warehouse structural racks" className="w-full h-full object-cover" />'
);

bodyContent = bodyContent.replace(
    /<img  src="https:\/\/images.unsplash.com\/photo-1586528116311-ad8dd3c8310d\?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"\s*alt="Rack Selectivo"\s*className="w-full h-full object-cover grayscale brightness-50 transition-transform duration-700 group-hover:scale-110" \/>/g,
    '<img src="/images/productos/rack selectivo.png" alt="Rack Selectivo" className="w-full h-full object-cover grayscale brightness-50 transition-transform duration-700 group-hover:scale-110" />'
);

bodyContent = bodyContent.replace(
    /<div\s*className="absolute -right-20 -bottom-20 w-80 h-80 border-\[40px\] border-white\/10 rounded-full group-hover:scale-125 transition-transform duration-1000">\s*<\/div>/g,
    '<div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-20 group-hover:scale-125 transition-transform duration-1000"><img src="/images/productos/estaterias angulo ranurado.png" alt="Ángulo Ranurado" className="w-full h-full object-cover object-left-top mix-blend-multiply" /></div>'
);



// UX Improvements
bodyContent = bodyContent.replace(
    /<header className="fixed top-0 w-full z-50 bg-white\/90 backdrop-blur-md border-b border-mecano-slate\/10">/,
    '<header className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b transition-transform duration-500 will-change-transform ${isScrollingUp ? \'translate-y-0 border-mecano-slate/10 shadow-sm\' : \'-translate-y-full border-transparent\'}`}>'
);

bodyContent = bodyContent.replace(
    /<a href="(#[^"]+)"\s*className="text-sm font-600 uppercase tracking-widest hover:text-mecano-orange transition-colors">([^<]+)<\/a>/g,
    '<a href="$1" className="relative group text-sm font-600 uppercase tracking-widest hover:text-mecano-orange transition-colors">$2<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-mecano-orange transition-all duration-300 group-hover:w-full"></span></a>'
);

bodyContent = bodyContent.replace(
    /<button\s*className="bg-mecano-orange text-white px-8 py-3 font-display font-700 text-xs uppercase tracking-\[0\.1em\] hover:bg-mecano-slate transition-all transform hover:-translate-y-0\.5 shadow-lg shadow-mecano-orange\/20">\s*Cotizar Proyecto\s*<\/button>/g,
    '<button onClick={() => document.getElementById(\'contacto\')?.scrollIntoView({ behavior: \'smooth\' })} className="bg-mecano-orange text-white px-8 py-3 font-display font-700 text-xs uppercase tracking-[0.1em] hover:bg-mecano-slate transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-mecano-orange/20 hover:shadow-mecano-slate/30 active:scale-95 group relative overflow-hidden"><span className="relative z-10 block transition-transform duration-300 group-hover:scale-105">Cotizar Proyecto</span><div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150"></div></button>'
);

// Advanced UI Component Replacements
bodyContent = bodyContent.replace(
    /<section className="bg-mecano-gray py-12 border-b border-mecano-slate\/5">[\s\S]*?<\/section>/,
    `<section className="bg-mecano-slate py-16 border-y border-white/5 relative z-10 shadow-2xl">
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
        </section>`
);

bodyContent = bodyContent.replace(
    /<footer className="bg-black py-16 text-white overflow-hidden relative">[\s\S]*?<\/footer>/,
    `<footer className="bg-mecano-slate pt-24 pb-12 text-white overflow-hidden relative border-t-[8px] border-mecano-orange">
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
    </footer>`
);

const pageTsx = `'use client';
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
            ${bodyContent}
        </>
    );
}
`;

fs.writeFileSync(path.resolve(__dirname, 'src', 'app', 'page.tsx'), pageTsx);
console.log("page.tsx successfully rewritten from Landing.html!");
