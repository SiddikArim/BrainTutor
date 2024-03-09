import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className=" h-16 fixed w-full mx-auto bg-white z-50"
    >
      <nav className="w-full max-w-[1220px] mx-auto flex justify-between items-center px-[20px] h-full">
        <span className="text-3xl">BrainTutor</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="register">
            <Button>Register</Button>
          </NavLink>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Nav;
