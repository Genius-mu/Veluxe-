import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState } from "react";

/* ── inline helpers ────────────────────────────────────────────── */

const inputCls =
  "w-full border border-paper/15 bg-paper/5 px-4 py-3 text-sm text-paper placeholder:text-paper/30 transition-colors focus:border-paper focus:outline-none";

function Field({ label, hint, children, span = 1 }) {
  const spanCls = span === 2 ? "sm:col-span-2" : "col-span-1";
  return (
    <label className={`block ${spanCls}`}>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider2 text-paper/50">
          {label}
        </span>
        {hint && (
          <span className="font-mono text-[10px] uppercase tracking-wider2 text-paper/30 tabular-nums">
            {hint}
          </span>
        )}
      </div>
      {children}
    </label>
  );
}

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const reasons = [
  { id: "general", label: "General" },
  { id: "order", label: "Order" },
  { id: "press", label: "Press" },
  { id: "wholesale", label: "Wholesale" },
  { id: "restocks", label: "Restocks" },
];

const channels = [
  {
    Icon: Mail,
    label: "Email",
    value: "hello@veluxe.co",
    href: "mailto:hello@veluxe.co",
    detail: "For everything · we reply within a working day",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "+234 812 000 0000",
    href: "https://wa.me/2348120000000",
    detail: "Mon – Fri · quickest for order questions",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    value: "@veluxe.co",
    href: "https://instagram.com/veluxe.co",
    detail: "Slower, but where the batches drop first",
  },
];

const MAX_MESSAGE = 500;

/* ── main ─────────────────────────────────────────────────────── */

export default function ContactPage() {
  const [reason, setReason] = useState("general");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle · sending · success

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: hand off to your endpoint (Resend, Formspree, your own API).
    console.log("MESSAGE →", { reason, ...form });
    setTimeout(() => setStatus("success"), 1200);
  };

  const reset = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setReason("general");
    setStatus("idle");
  };

  return (
    <main className="min-h-screen bg-ink text-paper">
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="px-6 pt-32 pb-12 sm:px-10 sm:pt-40 sm:pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mx-auto max-w-[1400px]"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="h-px w-8 bg-paper/40" />
            <span className="font-mono text-[11px] uppercase tracking-wider2 text-paper/50">
              A note to reach us
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
          >
            Let's talk.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-paper/60"
          >
            We read every note. Replies land within one working day — usually
            faster if it's about an order in motion. For the slow questions,
            take your time.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Form + Sidebar ──────────────────────────────────── */}
      <section className="px-6 pb-32 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* ─── LEFT — form / success ───────────────────── */}
          <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* ─── Success ─── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-[600px] flex-col items-center justify-center border border-paper/10 bg-paper/[0.02] p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-coral"
                  >
                    <Check className="h-6 w-6 text-paper" strokeWidth={2.5} />
                  </motion.div>

                  <div className="mb-4 flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-paper/40" />
                    <span className="font-mono text-[11px] uppercase tracking-wider2 text-paper/50">
                      Received
                    </span>
                    <span className="h-px w-8 bg-paper/40" />
                  </div>

                  <h2 className="font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl">
                    Note sent.
                  </h2>

                  <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-paper/60">
                    Thank you for writing. We'll reply within a working day — a
                    real person, not a template.
                  </p>

                  <button
                    type="button"
                    onClick={reset}
                    className="group relative mt-10 inline-flex overflow-hidden border border-paper px-7 py-3"
                  >
                    <span className="absolute inset-0 origin-left scale-x-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    <span className="relative font-mono text-[11px] uppercase tracking-wider2 text-paper transition-colors duration-300 group-hover:text-ink">
                      Send another note
                    </span>
                  </button>
                </motion.div>
              ) : (
                /* ─── Form ─── */
                <motion.form
                  key="form"
                  onSubmit={submit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* ─ 01 — Reason ─ */}
                  <div className="border-b border-paper/10 py-10 first:pt-0">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider2 text-coral">
                        01
                      </span>
                      <span className="h-px w-8 bg-paper/30" />
                      <h2 className="font-display text-xl font-medium uppercase tracking-tight text-paper">
                        What's this about?
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {reasons.map((r) => {
                        const active = reason === r.id;
                        return (
                          <button
                            key={r.id}
                            type="button"
                            onClick={() => setReason(r.id)}
                            className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-wider2 transition-all duration-300 ${
                              active
                                ? "border-coral bg-coral text-paper"
                                : "border-paper/20 text-paper/60 hover:border-paper hover:text-paper"
                            }`}
                          >
                            {r.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* ─ 02 — You ─ */}
                  <div className="border-b border-paper/10 py-10">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider2 text-coral">
                        02
                      </span>
                      <span className="h-px w-8 bg-paper/30" />
                      <h2 className="font-display text-xl font-medium uppercase tracking-tight text-paper">
                        You
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Name">
                        <input
                          type="text"
                          autoComplete="name"
                          required
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="What we should call you"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Email">
                        <input
                          type="email"
                          autoComplete="email"
                          required
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="you@elsewhere.com"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Subject (optional)" span={2}>
                        <input
                          type="text"
                          value={form.subject}
                          onChange={(e) => update("subject", e.target.value)}
                          placeholder="A short line to sit at the top"
                          className={inputCls}
                        />
                      </Field>
                    </div>
                  </div>

                  {/* ─ 03 — Message ─ */}
                  <div className="border-b border-paper/10 py-10">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider2 text-coral">
                        03
                      </span>
                      <span className="h-px w-8 bg-paper/30" />
                      <h2 className="font-display text-xl font-medium uppercase tracking-tight text-paper">
                        The note
                      </h2>
                    </div>
                    <Field
                      label="Message"
                      hint={`${form.message.length} / ${MAX_MESSAGE}`}
                    >
                      <textarea
                        required
                        maxLength={MAX_MESSAGE}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Say as much or as little as you like."
                        rows={7}
                        className={`${inputCls} resize-none leading-relaxed`}
                      />
                    </Field>
                  </div>

                  {/* ─ Submit ─ */}
                  <div className="pt-10">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group relative w-full overflow-hidden bg-coral px-7 py-4 text-paper disabled:cursor-wait sm:w-auto sm:min-w-[280px]"
                    >
                      <span className="absolute inset-0 origin-left scale-x-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-x-100" />
                      <span className="relative flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider2 transition-colors duration-300 group-hover:text-ink">
                        {status === "sending" ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="h-3 w-3 rounded-full border-2 border-paper border-t-transparent group-hover:border-ink group-hover:border-t-transparent"
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="h-3 w-3" />
                            Send Note
                          </>
                        )}
                      </span>
                    </button>

                    <p className="mt-4 font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
                      By writing to us you agree to our{" "}
                      <a
                        href="#privacy"
                        className="text-paper/60 underline underline-offset-2 hover:text-paper"
                      >
                        Privacy Policy
                      </a>
                      . We never share email.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* ─── RIGHT — sidebar ─────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            {/* Direct channels */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-paper/40" />
                <span className="font-mono text-[11px] uppercase tracking-wider2 text-paper/50">
                  Direct
                </span>
              </div>

              {channels.map(({ Icon, label, value, href, detail }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group block"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center border border-paper/15 transition-colors group-hover:border-coral group-hover:bg-coral/10">
                      <Icon className="h-4 w-4 text-paper/70 transition-colors group-hover:text-coral" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
                        {label}
                      </div>
                      <div className="mt-1 truncate font-display text-base uppercase tracking-tight text-paper transition-colors group-hover:text-coral">
                        {value}
                      </div>
                      <div className="mt-1 text-xs leading-relaxed text-paper/50">
                        {detail}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Studio */}
            <div className="mt-10 border-t border-paper/10 pt-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-paper/40" />
                <span className="font-mono text-[11px] uppercase tracking-wider2 text-paper/50">
                  Studio
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-paper/50" />
                  <div>
                    <div className="font-display text-base uppercase tracking-tight text-paper">
                      12 Awolowo Road
                    </div>
                    <div className="mt-1 text-sm text-paper/60">
                      Ikoyi — Lagos, Nigeria
                    </div>
                    <a
                      href="https://maps.google.com/?q=12+Awolowo+Road+Ikoyi+Lagos"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block font-mono text-[10px] uppercase tracking-wider2 text-coral hover:underline"
                    >
                      Open in maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-paper/50" />
                  <div>
                    <div className="font-display text-base uppercase tracking-tight text-paper">
                      Mon — Fri
                    </div>
                    <div className="mt-1 text-sm text-paper/60">
                      9am – 5pm WAT
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
                      Weekends by appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small quiet note */}
            <div className="mt-10 border-t border-paper/10 pt-6">
              <p className="text-xs leading-relaxed text-paper/40">
                Prefer paper? Handwritten notes reach us at the studio address
                above. We keep every one.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
