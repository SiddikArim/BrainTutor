import Container from "@/components/Container";

import FirstService from "@/components/Services/FirstService";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <Container className="mt-40">
      <div className="text-center flex flex-col justify-center items-center">
        <h1>This is service section</h1>
        <p className="max-w-[50ch]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla esse
          delectus deleniti ipsam molestiae. Odio, labore! Reiciendis voluptatum
          enim ab rem,
        </p>
      </div>
      <motion.div className="grid grid-cols-12 gap-5 my-20">
        <FirstService></FirstService>
        <div className="bg-gray h-[415px]  rounded-2xl col-span-6 lg:col-span-5"></div>
        <div className="bg-gray h-[415px]  rounded-2xl col-span-6 lg:col-span-7"></div>
        <div className="bg-gray h-[415px]  rounded-2xl col-span-12"></div>
        <div className="bg-gray h-[415px]  rounded-2xl col-span-6 lg:col-span-4"></div>
        <div className="bg-gray h-[415px]  rounded-2xl col-span-6 lg:col-span-4"></div>
        <div className="bg-gray h-[415px]  rounded-2xl col-span-12 lg:col-span-4"></div>
      </motion.div>
    </Container>
  );
};

export default ServicesSection;
