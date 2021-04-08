import React, { useState } from "react";
import { motion } from "framer-motion";
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div style={{ outline: "none" }} layout>
      <motion.h4 layout onClick={() => setToggle(!toggle)} layout>
        {title}
      </motion.h4>
      <motion.div layout>{toggle && children}</motion.div>
      <motion.div layout className="line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
