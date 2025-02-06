import { FC } from "react";
import { motion, useTime, useTransform } from "motion/react";
import { MotionButtonType } from "../../types/motion/MotionButtonType";
export const MotionButton: FC<MotionButtonType> = ({ text }) => {
    const time = useTime();
    const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });
    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg,#ff4545,#00ff99,#006aff,#ff0095)`
    })
    return <motion.div className="relative">
        <motion.button className="relative cursor-pointer outline-0 inconsolata text-white bg-neutral-900 px-3 py-2 rounded-md z-10">{text}</motion.button>
        <motion.div style={{ background: rotatingBg }} className="absolute -inset-[1px] rounded-md"></motion.div>
    </motion.div>
}