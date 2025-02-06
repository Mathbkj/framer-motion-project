import { FC } from "react";
import { motion } from "motion/react";
import { TypewriterType } from "../types/TypewriterType";

export const Typewriter: FC<TypewriterType> = ({ text, size, weight }) => {
    const LETTER_DELAY = .05;
    const BOX_FADE_DURATION = .125;
    
    return <p className={`mb-2.5 text-3xl font-${weight} inconsolata text-wrap text-center text-transparent uppercase bg-gradient-to-r from-slate-50 to-slate-500/50 bg-clip-text`}>
        <span className="inline-block size-0 bg-neutral-950" />
        <span className="ml-3">
            {text.split("").map((l, i) => {
                return <motion.span initial={{opacity:1}} className="relative" key={i}>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * LETTER_DELAY, duration: 0 }} className={`text-transparent text-${size} bg-gradient-to-r from-slate-50 to-slate-50/70 bg-clip-text`}>{l}</motion.span>
                    <motion.span initial={{opacity:0}} animate={i!==17?{opacity:[0,1,0]}:{opacity:0}} transition={{delay:i*LETTER_DELAY,times:[0,0.1,1],duration:BOX_FADE_DURATION,ease:"easeInOut"}}  className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-blue-500/50"/>
                </motion.span>
            })}
        </span>
    </p>
}