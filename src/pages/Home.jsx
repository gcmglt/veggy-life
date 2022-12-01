import Trending from "../components/Trending";
import Salads from "../components/Salads";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Trending />
      <Salads />
    </motion.div>
  );
};

export default Home;
