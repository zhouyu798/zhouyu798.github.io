import { motion } from "framer-motion";

export default function StrengthCard({ strength }) {
  const Icon = strength.icon;
  const isBlue = strength.accent === "blue";

  return (
    <motion.article
      className="glass-card p-6"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
    >
      <div className="mb-7 flex items-center justify-between">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl ${
            isBlue ? "bg-harmony/10 text-harmony" : "bg-motion/10 text-motion"
          }`}
        >
          <Icon size={22} />
        </span>
        <span className={`h-px w-16 ${isBlue ? "bg-harmony" : "bg-motion"}`} />
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-quiet">
        {strength.english}
      </p>
      <h3 className="mt-3 text-2xl font-bold text-ink">{strength.title}</h3>
      <p className="mt-5 text-base leading-8 text-muted">{strength.description}</p>
    </motion.article>
  );
}
