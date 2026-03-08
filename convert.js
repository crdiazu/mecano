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
    '<img src="/images/logo/MECANO.png" alt="MECANO Solutions" className="h-12 w-auto transition-transform group-hover:scale-105" />'
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



const pageTsx = `'use client';
import { useEffect } from 'react';

export default function Home() {
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
