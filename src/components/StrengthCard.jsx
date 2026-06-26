import { motion } from "framer-motion";

export default function StrengthCard({ strength }) {
  const Icon = strength.icon;
  const isOrange = strength.accent === "orange";

  return (
    <motion.article
      className="group rounded-[30px] border border-line bg-white/76 p-6 shadow-card backdrop-blur-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl ${
            isOrange ? "bg-motion/10 text-motion" : "bg-harmony/10 text-harmony"
          }`}
        >
          <Icon size={22} />
        </span>
        <span className={`mt-2 h-px w-16 ${isOrange ? "bg-motion" : "bg-harmony"}`} />
      </div>
      <h3 className="mt-7 text-2xl font-bold text-ink">{strength.title}</h3>
      <p className="mt-2 text-sm font-semibold text-harmony">{strength.english}</p>
      <p className="mt-5 text-base leading-8 text-muted">{strength.description}</p>
    </motion.article>
  );
}
