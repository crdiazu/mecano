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
