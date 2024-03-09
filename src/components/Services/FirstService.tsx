import { motion } from "framer-motion";

import useGrowHook from "@/Hooks/useGrowHook";

const FirstService = () => {
  const { componentRef, style } = useGrowHook();
  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="bg-gray h-[415px]  rounded-2xl col-span-12 lg:col-span-12"
    >
      <h1>Private Tutor</h1>
      <p>
        We have the expert team o tutors who are experts in their field. They
        will guide you through every step of your learning journey.
      </p>
    </motion.div>
  );
};

export default FirstService;
