import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronRight, Lock } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "../lib/Product";

/* ── inline helpers ────────────────────────────────────────────── */

const inputCls =
  "w-full border border-paper/15 bg-paper/5 px-4 py-3 text-sm text-paper placeholder:text-paper/30 transition-colors focus:border-paper focus:outline-none";

function Section({ number, title, children, note }) {
  return (
    <section className="border-b border-paper/10 py-10 first:pt-0">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-wider2 text-coral">
            {number}
          </span>
          <span className="h-px w-8 bg-paper/30" />
          <h2 className="font-display text-xl font-medium uppercase tracking-tight text-paper">
            {title}
          </h2>
        </div>
        {note}
      </div>
      {children}
    </section>
  );
}

function Field({ label, span = 1, children }) {
  const spanCls = span === 2 ? "sm:col-span-2" : "col-span-1";
  return (
    <label className={`block ${spanCls}`}>
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider2 text-paper/50">
        {label}
      </span>
      {children}
    </label>
  );
}

function Radio({ active, onSelect, name, detail, right, children }) {
  return (
    <label
      onClick={onSelect}
      className={`flex cursor-pointer items-center gap-4 border p-4 transition-colors ${
        active
          ? "border-coral bg-coral/5"
          : "border-paper/15 hover:border-paper/40"
      }`}
    >
      <input
        type="radio"
        checked={active}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        className={`grid h-4 w-4 flex-shrink-0 place-items-center rounded-full border ${
          active ? "border-coral" : "border-paper/40"
        }`}
      >
        {active && <span className="h-1.5 w-1.5 rounded-full bg-coral" />}
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-display text-sm uppercase tracking-wider2 text-paper">
          {name}
        </div>
        {detail && <div className="mt-0.5 text-xs text-paper/50">{detail}</div>}
        {children}
      </div>
      {right && (
        <div className="whitespace-nowrap font-mono text-sm tabular-nums text-paper">
          {right}
        </div>
      )}
    </label>
  );
}

/* ── card / expiry format helpers ─────────────────────────────── */

const formatCardNumber = (v) =>
  v
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ");

const formatExpiry = (v) => {
  const digits = v.replace(/\D/g, "").slice(0, 4);
  return digits.length > 2
    ? `${digits.slice(0, 2)} / ${digits.slice(2)}`
    : digits;
};

const parsePrice = (s) => parseFloat(String(s).replace(/[^0-9.]/g, "")) || 0;
const format = (n) => `$${n.toFixed(2)}`;

/* ── main ─────────────────────────────────────────────────────── */

export default function CheckoutPage() {
  // Contact
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  // Shipping
  const [ship, setShip] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "Nigeria",
    phone: "",
  });
  const updateShip = (k, v) => setShip((p) => ({ ...p, [k]: v }));

  // Delivery + payment
  const [delivery, setDelivery] = useState("standard");
  const [payment, setPayment] = useState("card");

  // Card
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const updateCard = (k, v) => setCard((p) => ({ ...p, [k]: v }));

  // Prefs
  const [saveInfo, setSaveInfo] = useState(false);
  const [billingSame, setBillingSame] = useState(true);
  const [placing, setPlacing] = useState(false);

  // Seeded cart. Replace with your cart store when wiring up.
  const items = useMemo(
    () => [
      { ...products[10], quantity: 1 }, // Daybreak Cleanser
      { ...products[0], quantity: 1 }, //  Velvet Lip
      { ...products[5], quantity: 1 }, //  Sundial SPF
    ],
    [],
  );

  const subtotal = items.reduce(
    (s, i) => s + parsePrice(i.price) * i.quantity,
    0,
  );

  const deliveryOptions = [
    {
      id: "standard",
      label: "Standard",
      detail: "3–5 business days",
      price: subtotal >= 60 ? 0 : 8,
    },
    {
      id: "express",
      label: "Express",
      detail: "1–2 business days",
      price: 18,
    },
    {
      id: "sameday",
      label: "Same-day Lagos",
      detail: "2–4 hours · within Lagos",
      price: 12,
    },
  ];

  const deliveryFee =
    deliveryOptions.find((o) => o.id === delivery)?.price ?? 0;
  const tax = subtotal * 0.075;
  const total = subtotal + deliveryFee + tax;

  const paymentOptions = [
    {
      id: "card",
      label: "Credit / debit card",
      detail: "Visa · Mastercard · Verve",
    },
    {
      id: "paystack",
      label: "Paystack",
      detail: "Bank transfer · USSD · card",
    },
    { id: "paypal", label: "PayPal", detail: "International customers" },
  ];

  const submit = (e) => {
    e.preventDefault();
    setPlacing(true);
    // TODO: hand off to your order endpoint (Paystack init, Stripe intent, etc.)
    console.log("ORDER →", {
      email,
      ship,
      delivery,
      payment,
      card: payment === "card" ? card : null,
      billingSame,
      saveInfo,
      subscribe,
      items,
      total,
    });
    setTimeout(() => setPlacing(false), 1400);
  };

  return (
    <main className="min-h-screen bg-ink text-paper">
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="px-6 pt-32 pb-8 sm:px-10 sm:pt-40 sm:pb-12">
        <div className="mx-auto max-w-[1400px]">
          <nav className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider2">
            <a
              href="#cart"
              className="text-paper/40 transition-colors hover:text-paper"
            >
              Cart
            </a>
            <ChevronRight className="h-3 w-3 text-paper/30" />
            <span className="text-coral">Checkout</span>
            <ChevronRight className="h-3 w-3 text-paper/30" />
            <span className="text-paper/30">Confirmation</span>
          </nav>

          <h1 className="mt-4 font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Checkout.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/60">
            Almost yours. A few details and we'll get the box in motion.
          </p>
        </div>
      </section>

      {/* ── Form + Summary ───────────────────────────────────── */}
      <form onSubmit={submit} className="px-6 pb-32 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          {/* ─── LEFT — form ─────────────────────────────── */}
          <div>
            {/* 01 — Contact */}
            <Section
              number="01"
              title="Contact"
              note={
                <a
                  href="#signin"
                  className="font-mono text-[10px] uppercase tracking-wider2 text-coral hover:underline"
                >
                  Have an account? Sign in
                </a>
              }
            >
              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@elsewhere.com"
                  className={inputCls}
                />
              </Field>

              <label className="mt-4 flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
                  className="h-4 w-4 accent-coral"
                />
                <span className="text-sm text-paper/70">
                  Send me the Sunday letter — new drops, small essays.
                </span>
              </label>
            </Section>

            {/* 02 — Shipping */}
            <Section number="02" title="Shipping address">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="First name">
                  <input
                    type="text"
                    name="given-name"
                    autoComplete="given-name"
                    required
                    value={ship.firstName}
                    onChange={(e) => updateShip("firstName", e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Last name">
                  <input
                    type="text"
                    name="family-name"
                    autoComplete="family-name"
                    required
                    value={ship.lastName}
                    onChange={(e) => updateShip("lastName", e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Address" span={2}>
                  <input
                    type="text"
                    name="address-line1"
                    autoComplete="address-line1"
                    required
                    value={ship.address}
                    onChange={(e) => updateShip("address", e.target.value)}
                    placeholder="Street address"
                    className={inputCls}
                  />
                </Field>
                <Field label="Apartment, suite (optional)" span={2}>
                  <input
                    type="text"
                    name="address-line2"
                    autoComplete="address-line2"
                    value={ship.apartment}
                    onChange={(e) => updateShip("apartment", e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="City">
                  <input
                    type="text"
                    name="city"
                    autoComplete="address-level2"
                    required
                    value={ship.city}
                    onChange={(e) => updateShip("city", e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="State / region">
                  <input
                    type="text"
                    name="state"
                    autoComplete="address-level1"
                    required
                    value={ship.state}
                    onChange={(e) => updateShip("state", e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Postal code">
                  <input
                    type="text"
                    name="postal-code"
                    autoComplete="postal-code"
                    required
                    value={ship.zip}
                    onChange={(e) => updateShip("zip", e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Country">
                  <select
                    name="country"
                    autoComplete="country-name"
                    value={ship.country}
                    onChange={(e) => updateShip("country", e.target.value)}
                    className={inputCls}
                  >
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    <option>Kenya</option>
                    <option>South Africa</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Canada</option>
                  </select>
                </Field>
                <Field label="Phone" span={2}>
                  <input
                    type="tel"
                    name="tel"
                    autoComplete="tel"
                    required
                    value={ship.phone}
                    onChange={(e) => updateShip("phone", e.target.value)}
                    placeholder="+234 ..."
                    className={inputCls}
                  />
                </Field>
              </div>
            </Section>

            {/* 03 — Delivery */}
            <Section number="03" title="Delivery method">
              <div className="space-y-3">
                {deliveryOptions.map((opt) => (
                  <Radio
                    key={opt.id}
                    active={delivery === opt.id}
                    onSelect={() => setDelivery(opt.id)}
                    name={opt.label}
                    detail={opt.detail}
                    right={opt.price === 0 ? "Free" : format(opt.price)}
                  />
                ))}
              </div>
            </Section>

            {/* 04 — Payment */}
            <Section
              number="04"
              title="Payment"
              note={
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider2 text-paper/50">
                  <Lock className="h-3 w-3" />
                  Encrypted
                </span>
              }
            >
              <div className="space-y-3">
                {paymentOptions.map((m) => (
                  <div key={m.id}>
                    <Radio
                      active={payment === m.id}
                      onSelect={() => setPayment(m.id)}
                      name={m.label}
                      detail={m.detail}
                    />

                    <AnimatePresence initial={false}>
                      {m.id === "card" && payment === "card" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, height: 0 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            height: "auto",
                            transition: {
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                            height: 0,
                            transition: { duration: 0.25 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                            <Field label="Card number" span={2}>
                              <input
                                type="text"
                                inputMode="numeric"
                                autoComplete="cc-number"
                                required
                                maxLength={19}
                                value={card.number}
                                onChange={(e) =>
                                  updateCard(
                                    "number",
                                    formatCardNumber(e.target.value),
                                  )
                                }
                                placeholder="1234 5678 9012 3456"
                                className={`${inputCls} font-mono tracking-wider`}
                              />
                            </Field>
                            <Field label="Name on card" span={2}>
                              <input
                                type="text"
                                autoComplete="cc-name"
                                required
                                value={card.name}
                                onChange={(e) =>
                                  updateCard("name", e.target.value)
                                }
                                className={inputCls}
                              />
                            </Field>
                            <Field label="Expiry">
                              <input
                                type="text"
                                autoComplete="cc-exp"
                                required
                                placeholder="MM / YY"
                                maxLength={7}
                                value={card.expiry}
                                onChange={(e) =>
                                  updateCard(
                                    "expiry",
                                    formatExpiry(e.target.value),
                                  )
                                }
                                className={`${inputCls} font-mono`}
                              />
                            </Field>
                            <Field label="CVC">
                              <input
                                type="text"
                                inputMode="numeric"
                                autoComplete="cc-csc"
                                required
                                maxLength={4}
                                placeholder="123"
                                value={card.cvc}
                                onChange={(e) =>
                                  updateCard(
                                    "cvc",
                                    e.target.value.replace(/\D/g, ""),
                                  )
                                }
                                className={`${inputCls} font-mono`}
                              />
                            </Field>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={billingSame}
                    onChange={(e) => setBillingSame(e.target.checked)}
                    className="h-4 w-4 accent-coral"
                  />
                  <span className="text-sm text-paper/70">
                    Billing address same as shipping.
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                    className="h-4 w-4 accent-coral"
                  />
                  <span className="text-sm text-paper/70">
                    Save this information for next time.
                  </span>
                </label>
              </div>
            </Section>

            {/* Return-to-cart link */}
            <div className="pt-8">
              <a
                href="/cart"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider2 text-paper/60 transition-colors hover:text-paper"
              >
                ← Return to cart
              </a>
            </div>
          </div>

          {/* ─── RIGHT — order summary ───────────────────── */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="bg-paper/5 p-6 sm:p-8">
              <h2 className="mb-6 font-display text-xl font-medium uppercase tracking-tight text-paper">
                Your Order
              </h2>

              {/* Items */}
              <div className="space-y-4 border-b border-paper/10 pb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative aspect-square w-16 flex-shrink-0 overflow-hidden bg-paper/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center bg-coral font-mono text-[10px] tabular-nums text-paper">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-display text-sm uppercase tracking-tight text-paper">
                        {item.name}
                      </div>
                      <div className="truncate text-xs text-paper/50">
                        {item.tagline}
                      </div>
                    </div>
                    <div className="whitespace-nowrap font-mono text-sm tabular-nums text-paper">
                      {format(parsePrice(item.price) * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-paper/70">
                  <dt>Subtotal</dt>
                  <dd className="font-mono tabular-nums">{format(subtotal)}</dd>
                </div>
                <div className="flex justify-between text-paper/70">
                  <dt>Delivery</dt>
                  <dd className="font-mono tabular-nums">
                    {deliveryFee === 0 ? "Free" : format(deliveryFee)}
                  </dd>
                </div>
                <div className="flex justify-between text-paper/70">
                  <dt>
                    Tax{" "}
                    <span className="font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
                      (est.)
                    </span>
                  </dt>
                  <dd className="font-mono tabular-nums">{format(tax)}</dd>
                </div>
              </dl>

              {/* Total */}
              <div className="mt-6 flex items-baseline justify-between border-t border-paper/10 pt-6">
                <span className="font-mono text-[11px] uppercase tracking-wider2 text-paper/60">
                  Total
                </span>
                <motion.span
                  key={total}
                  initial={{ opacity: 0.4, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-display text-3xl font-medium tabular-nums text-paper"
                >
                  {format(total)}
                </motion.span>
              </div>

              {/* Place order */}
              <button
                type="submit"
                disabled={placing}
                className="group relative mt-6 w-full overflow-hidden bg-coral px-7 py-4 text-paper disabled:cursor-wait"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider2 transition-colors duration-300 group-hover:text-ink">
                  {placing ? (
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
                      Processing…
                    </>
                  ) : (
                    <>
                      <Lock className="h-3 w-3" />
                      Place Order — {format(total)}
                    </>
                  )}
                </span>
              </button>

              {/* Trust strip */}
              <div className="mt-5 flex items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
                <span className="flex items-center gap-1">
                  <Check className="h-3 w-3" /> Secure
                </span>
                <span>·</span>
                <span>30-day returns</span>
                <span>·</span>
                <span>Ships from Lagos</span>
              </div>

              <p className="mt-5 text-center text-[11px] leading-relaxed text-paper/40">
                By placing this order you agree to our{" "}
                <a
                  href="#terms"
                  className="text-paper/60 underline underline-offset-2 hover:text-paper"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#privacy"
                  className="text-paper/60 underline underline-offset-2 hover:text-paper"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </form>
    </main>
  );
}
