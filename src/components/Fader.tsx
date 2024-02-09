import {motion} from "framer-motion";
import * as React from "react";


export const variants = {
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeOut",
            duration: 0.2
        }
    },
    hide: {
        opacity: 0
    }
};

export default  function Fader({ handle, children }) {
    return <motion.div key={handle} variants={variants} animate="show" initial="hide">
        { children }
    </motion.div>
}
