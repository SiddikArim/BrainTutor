import Container from "@/components/Container";
import tutor from "../../../src/assets/tutor.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, staggerChildren: 0.25, delayChildren: 0.5 },
    },
  };
  const introChild = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: {} },
  };
  const tutorVariant = {
    initial: { y: 0, x: 500 },
    animate: {
      y: 20,
      x: 0,

      transition: {
        y: {
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        },
      },
    },
  };
  return (
    <div className="overflow-hidden ">
      <Container className="h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center mt-16">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={introChild}
            className="font-extrabold text-5xl lg:text-8xl text-nowrap"
          >
            <span className="text-gray">Don't Worry,</span>
            <br />
            <span className="text-dark-gray">We Care</span>
          </motion.h1>
          <motion.p
            variants={introChild}
            className="my-8 text-dark-gray mx-w-[50ch] text-lg"
          >
            Welcome to{" "}
            <span className="text-primary font-extrabold">BrainTutor</span>, we
            care about your{" "}
            <span className="text-gray font-extrabold">Ambitions</span> and{" "}
            <span className="text-gray font-extrabold">Goals</span>
          </motion.p>
          <motion.div variants={introChild}>
            {" "}
            <Button>Book An Appointment</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={tutorVariant}
          initial="initial"
          animate="animate"
          className="w-3/4 lg:w-3/4 my-5 mx-auto "
        >
          <img
            className="rounded-xl  lg:rotate-[30deg] h-[95%] "
            src={tutor}
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
