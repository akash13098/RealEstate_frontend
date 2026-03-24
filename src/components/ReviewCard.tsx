import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

interface Review {
  name: string;
  time: string;
  rating: number;
  text: string;
}

const ReviewCard = ({ review, index }: { review: Review; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass p-6 rounded-lg"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-primary-foreground font-heading font-bold">
        {review.name[0]}
      </div>
      <div>
        <p className="text-foreground text-sm font-medium">{review.name}</p>
        <p className="text-muted-foreground text-xs">{review.time}</p>
      </div>
    </div>
    <div className="flex gap-1 mb-3">
      {Array.from({ length: review.rating }).map((_, i) => (
        <FaStar key={i} className="text-primary" size={14} />
      ))}
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
  </motion.div>
);

export default ReviewCard;
