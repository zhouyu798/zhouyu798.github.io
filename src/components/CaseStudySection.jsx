import { motion } from "framer-motion";

export default function CaseStudySection({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-28 border-t border-line py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
    >
      <h2 className="mb-6 text-3xl font-bold text-ink">{title}</h2>
      <div className="case-content">{children}</div>
    </motion.section>
  );
}
