import { motion } from "framer-motion";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      transition={{ duration: 0.2 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
function FadeInWhenVisible1({ children }) {
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      transition={{ duration: 0.2, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
function SlideLeft({ children }) {
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      transition={{ duration: 1, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, x: 1 },
        hidden: { opacity: 0, x: -20 },
      }}
    >
      {children}
    </motion.div>
  );
}
function SlideUp({ children }) {
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 1 },
        hidden: { opacity: 0, y: 10 },
      }}
    >
      {children}
    </motion.div>
  );
}
function ShadowOnHover({ children }) {
  return (
    <motion.div
      whileHover="visible"
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: {
          boxShadow: "10px 10px 5px black",
          backgroundColor: "none",
          borderRadius: "30px",
        },
        hidden: {
          boxShadow: "0px 0px 0px grey",
          borderRadius: "30px",
        },
      }}
    >
      {children}
    </motion.div>
  );
}
function ScaleOnhover({ children }) {
  return (
    <motion.div
      whileHover="visible"
      initial="hidden"
      transition={{ duration: 0.2 }}
      variants={{
        visible: { scale: 1.5 },
        hidden: { scale: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}
function RotateXaxis({ children }) {
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      transition={{ duration: 0.8, delay: 0.2 }}
      variants={{
        visible: { rotateY: 360, rotateX: 0, rotateZ: 0 },
        hidden: { rotateY: 1, rotateX: 1, rotateZ: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}
export {
  FadeInWhenVisible,
  FadeInWhenVisible1,
  SlideLeft,
  SlideUp,
  ShadowOnHover,
  ScaleOnhover,
  RotateXaxis,
};
