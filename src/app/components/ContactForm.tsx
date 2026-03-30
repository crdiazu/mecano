'use client';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  system: string;
  details: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Submitting', data);
    // Aquí podrías integrar envío a API o email service
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-xs uppercase font-bold text-white/50 mb-2">Nombre / Empresa</label>
        <input
          {...register('name', { required: true })}
          className={`w-full bg-transparent border-b border-white/20 py-2 focus:border-mecano-orange outline-none transition-colors ${errors.name ? 'border-red-500 animate-shake' : ''}`}
        />
      </div>
      <div>
        <label className="block text-xs uppercase font-bold text-white/50 mb-2">Email de Contacto</label>
        <input
          type="email"
          {...register('email', { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })}
          className={`w-full bg-transparent border-b border-white/20 py-2 focus:border-mecano-orange outline-none transition-colors ${errors.email ? 'border-red-500 animate-shake' : ''}`}
        />
      </div>
      <div>
        <label className="block text-xs uppercase font-bold text-white/50 mb-2">Sistema de Interés</label>
        <select
          {...register('system', { required: true })}
          className="w-full bg-transparent border-b border-white/20 py-2 focus:border-mecano-orange outline-none transition-colors"
        >
          <option className="bg-mecano-slate">Ángulo Ranurado</option>
          <option className="bg-mecano-slate">Racks Selectivos</option>
          <option className="bg-mecano-slate">Full Space</option>
          <option className="bg-mecano-slate">Altillos / Entreplantas</option>
        </select>
      </div>
      <div>
        <label className="block text-xs uppercase font-bold text-white/50 mb-2">Detalles del Proyecto</label>
        <textarea
          {...register('details')}
          rows={3}
          placeholder="Describa brevemente su necesidad..."
          className="w-full bg-transparent border-b border-white/20 py-2 focus:border-mecano-orange outline-none transition-colors resize-none"
        />
      </div>
      <motion.button
        type="submit"
        className="w-full bg-mecano-orange py-5 font-display font-800 uppercase tracking-widest hover:bg-white hover:text-mecano-slate transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        Enviar Requerimiento
      </motion.button>
    </form>
  );
}
