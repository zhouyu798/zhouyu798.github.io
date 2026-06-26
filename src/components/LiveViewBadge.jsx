import { Activity, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function LiveViewBadge() {
  return (
    <motion.div
      className="live-view-badge rounded-full border border-white/80 bg-white/78 px-4 py-3 shadow-card backdrop-blur-2xl"
      animate={{ scale: [1, 1.025, 1], y: [0, -3, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-harmony text-white">
          <Activity size={17} />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-quiet">
            Live View
          </p>
          <p className="flex items-center gap-2 text-sm font-bold text-ink">
            Portfolio is running <Sparkles size={14} className="text-motion" />
          </p>
        </div>
      </div>
    </motion.div>
  );
}
