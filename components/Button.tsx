
import { motion } from "motion/react";
import { FC } from "react";
import { ButtonType } from "../types/ButtonType";

export const Button: FC<ButtonType> = ({ text, colors, type }) => {
    const { textColor, bgColor } = colors;
    return (
        <div className="relative">
            <motion.button initial={{scale:1}} whileHover={{scale:1.2}} type={type} className={`text-center relative z-10 cursor-pointer font-bold text-${textColor} text- relative z-10 inconsolata bg-${bgColor} py-2 px-8 rounded-full m-2`}>
                {text}
            </motion.button>
        </div>

    )
}