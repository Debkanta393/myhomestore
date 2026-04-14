import { motion, AnimatePresence } from "framer-motion";

export const DivMotion = ({ children, ...props }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={props.key && props.key}
        initial={props.initial && props.initial}
        animate={props.animate && props.animate}
        transition={props.transition && props.transition}
        whileHover={props.whileHover && props.whileHover}
        whileFocus={props.whileFocus && props.whileFocus}
        whileTap={props.whileTap && props.whileTap}
        whileDrag={props.whileDrag && props.whileDrag}
        exit={props.exit && props.exit}
        className={props.className}
        onClick={props.onClick && props.onClick}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const ULMotion = ({ children, ...props }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.ul
        key={props.key && props.key}
        initial={props.initial && props.initial}
        animate={props.animate && props.animate}
        transition={props.transition && props.transition}
        whileHover={props.whileHover && props.whileHover}
        whileFocus={props.whileFocus && props.whileFocus}
        whileTap={props.whileTap && props.whileTap}
        whileDrag={props.whileDrag && props.whileDrag}
        exit={props.exit && props.exit}
        className={props.className}
        onClick={props.onClick && props.onClick}
      >
        {children}
      </motion.ul>
    </AnimatePresence>
  );
};

export const ListMotion = ({ children, ...props }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.li
        key={props.key && props.key}
        initial={props.initial && props.initial}
        animate={props.animate && props.animate}
        transition={props.transition && props.transition}
        whileHover={props.whileHover && props.whileHover}
        whileFocus={props.whileFocus && props.whileFocus}
        whileTap={props.whileTap && props.whileTap}
        whileDrag={props.whileDrag && props.whileDrag}
        exit={props.exit && props.exit}
        className={props.className}
        onClick={props.onClick && props.onClick}
      >
        {children}
      </motion.li>
    </AnimatePresence>
  );
};

export const SpanMotion = ({ children, ...props }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={props.key && props.key}
        initial={props.initial && props.initial}
        animate={props.animate && props.animate}
        transition={props.transition && props.transition}
        whileHover={props.whileHover && props.whileHover}
        whileFocus={props.whileFocus && props.whileFocus}
        whileTap={props.whileTap && props.whileTap}
        whileDrag={props.whileDrag && props.whileDrag}
        exit={props.exit && props.exit}
        className={props.className}
        onClick={props.onClick && props.onClick}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
};

export const ButtonMotion = ({ children, ...props }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={props.key && props.key}
        initial={props.initial && props.initial}
        animate={props.animate && props.animate}
        transition={props.transition && props.transition}
        whileHover={props.whileHover && props.whileHover}
        whileFocus={props.whileFocus && props.whileFocus}
        whileTap={props.whileTap && props.whileTap}
        whileDrag={props.whileDrag && props.whileDrag}
        exit={props.exit && props.exit}
        className={props.className}
        onClick={props.onClick && props.onClick}
      >
        {children}
      </motion.button>
    </AnimatePresence>
  );
};
