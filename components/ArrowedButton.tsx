import React,{ FC, useEffect, useState } from "react";

import { motion } from "motion/react";

import { ButtonType } from "../types/ButtonType";

import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";

type Props = Pick<ButtonType, "text"> & {

    direction?: "left" | "right" | "up" | "down"

}

export const ArrowedButton: FC<Props> = ({ text, direction = "down" }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [initialOffset, setOffset] = useState<number>(0);
    const toggler = () => {
        setIsHovered(!isHovered); 
    }
    useEffect(() => {
        if (isHovered && direction === "down") {
            setOffset(10);
        }
        else if (!isHovered && direction === "down") {
            setOffset(0);
        }
    },[initialOffset,direction,isHovered])


    return <motion.div onHoverStart={toggler} onHoverEnd={toggler} initial={{ opacity: 0.5 }} whileHover={{ opacity: 1 }} className="relative text-center flex flex-col gap-2 justify-center items-center m-auto">

        <motion.button className="text-transparent relative bg-gradient-to-br font-black mt-2 dm-sans cursor-pointer antialiased from-slate-50 to-slate-50/50 bg-clip-text">{text}</motion.button>

        {direction == "down" && (<FaArrowDown style={{ transform: `translateY(${initialOffset}px)` }} color="white" className="transition-all" />)}

        {direction == "up" && <FaArrowUp />}

        {direction == "left" && <FaArrowLeft />}

        {direction == "right" && <FaArrowRight />}

    </motion.div>

}