import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const EnquiryForm = ({ propertyName }: { propertyName?: string }) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-gold p-6 md:p-8 rounded-lg space-y-4"
    >
      <h3 className="font-heading text-xl text-foreground">
        {propertyName ? `Enquire about ${propertyName}` : "Request Callback"}
      </h3>
      <p className="text-muted-foreground text-sm">Fill in your details and our team will reach out.</p>

      {[
        { key: "name", placeholder: "Full Name", type: "text" },
        { key: "phone", placeholder: "Phone Number", type: "tel" },
        { key: "email", placeholder: "Email Address", type: "email" },
      ].map(({ key, placeholder, type }) => (
        <input
          key={key}
          type={type}
          required
          placeholder={placeholder}
          value={form[key as keyof typeof form]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="w-full bg-background/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded"
        />
      ))}

      <textarea
        placeholder="Message (optional)"
        rows={3}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full bg-background/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded resize-none"
      />

      <button
        type="submit"
        className="w-full gold-gradient-bg text-primary-foreground py-3 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity rounded"
      >
        Request Callback
      </button>
    </motion.form>
  );
};

export default EnquiryForm;
