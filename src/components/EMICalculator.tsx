import { useState, useMemo } from "react";
import { motion } from "framer-motion";

const EMICalculator = ({ defaultPrice = 50000000 }: { defaultPrice?: number }) => {
  const [price, setPrice] = useState(defaultPrice);
  const [downPayment, setDownPayment] = useState(Math.round(defaultPrice * 0.2));
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const emi = useMemo(() => {
    const principal = price - downPayment;
    const r = rate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return principal / n;
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [price, downPayment, rate, tenure]);

  const formatInr = (n: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-gold p-6 md:p-8 rounded-lg"
    >
      <h3 className="font-heading text-xl text-foreground mb-6">EMI Calculator</h3>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Property Price</span>
            <span className="text-primary font-medium">{formatInr(price)}</span>
          </div>
          <input type="range" min={1500000} max={300000000} step={500000} value={price}
            onChange={(e) => { setPrice(+e.target.value); setDownPayment(Math.round(+e.target.value * 0.2)); }}
            className="w-full accent-primary" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Down Payment</span>
            <span className="text-primary font-medium">{formatInr(downPayment)}</span>
          </div>
          <input type="range" min={0} max={price} step={100000} value={downPayment}
            onChange={(e) => setDownPayment(+e.target.value)}
            className="w-full accent-primary" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Interest Rate</span>
            <span className="text-primary font-medium">{rate}%</span>
          </div>
          <input type="range" min={5} max={15} step={0.1} value={rate}
            onChange={(e) => setRate(+e.target.value)}
            className="w-full accent-primary" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Loan Tenure</span>
            <span className="text-primary font-medium">{tenure} years</span>
          </div>
          <input type="range" min={5} max={30} step={1} value={tenure}
            onChange={(e) => setTenure(+e.target.value)}
            className="w-full accent-primary" />
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">Monthly EMI</p>
          <p className="font-heading text-3xl gold-gradient-text font-bold mt-1">
            {formatInr(Math.round(emi))}
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Total: {formatInr(Math.round(emi * tenure * 12))} · Interest: {formatInr(Math.round(emi * tenure * 12 - (price - downPayment)))}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EMICalculator;
