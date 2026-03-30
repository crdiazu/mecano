import Image from 'next/image';
import { motion } from 'framer-motion';

type FeatureCardProps = {
  title: string;
  img: string;
  href: string;
};

export default function FeatureCard({ title, img, href }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Image src={img} alt={title} width={400} height={250} className="object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <a
          href={href}
          className="inline-block mt-2 text-mecano-orange font-medium hover:underline"
        >
          Consultar
        </a>
      </div>
    </motion.div>
  );
}
