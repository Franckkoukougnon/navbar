import React from "react";
import { motion } from "framer-motion";
import town from "../images/1.jpg";

const Akwaba = () => {
  return (
    <div>
      <h1> This is Akwaba page </h1>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <div className="container align-content-center">
          <img src={town} class="img-fluid" alt="..." />
        </div>
      </motion.div>
    </div>
  );
};

export default Akwaba;
