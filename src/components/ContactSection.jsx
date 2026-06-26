import { Download, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative flex min-h-screen items-center overflow-hidden px-5 py-28">
      <motion.div
        className="hero-ring left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360, scale: [1, 1.025, 1] }}
        transition={{ rotate: { duration: 44, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      />
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-harmony/10 blur-3xl" />
      <div className="absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-harmony/10 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-harmony">
          One Harmonious Universe
        </p>
        <h2 className="text-5xl font-bold text-ink md:text-7xl">Thanks for visiting.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          期待与你一起构建更清晰、更连续的数字体验。
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-5 py-3 backdrop-blur">
            <Phone size={16} /> 18200633381
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-5 py-3 backdrop-blur">
            <Mail size={16} /> 2082315263@qq.com
          </span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/images/portfolio/resume.png"
            download
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-harmony"
          >
            下载简历 <Download size={18} />
          </a>
          <a
            href="mailto:2082315263@qq.com"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/78 px-6 py-4 text-sm font-semibold text-ink backdrop-blur-xl transition hover:border-harmony hover:text-harmony"
          >
            联系我 <Mail size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
