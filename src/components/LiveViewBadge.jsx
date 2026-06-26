import { Activity, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function LiveViewBadge({ className = "" }) {
  return (
    <motion.div
      className={`inline-flex items-center gap-3 rounded-full border border-white/75 bg-white/75 px-4 py-3 shadow-card backdrop-blur-xl ${className}`}
      animate={{ scale: [1, 1.025, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-harmony text-white">
        <Activity size={18} />
      </span>
      <span>
        <span className="block text-sm font-semibold text-ink">Live View</span>
        <span className="flex items-center gap-1 text-xs text-muted">
          <Sparkles size={12} />
          Portfolio is running
        </span>
      </span>
    </motion.div>
  );
}
