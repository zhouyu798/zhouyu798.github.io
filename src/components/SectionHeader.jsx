import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-harmony">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-8 text-muted md:text-lg">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
