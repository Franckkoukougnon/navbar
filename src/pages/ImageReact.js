import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
import Img from "../components/Img";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function ImageReact() {
  return (
    <div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <div className="container">
          <Img />
        </div>
      </motion.div>
    </div>
  );
}

export default ImageReact;
