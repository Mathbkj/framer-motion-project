import { FC } from "react";
import { CardType } from "../../types/CardType";
import { motion } from "motion/react";
import { Button } from "../Button";

export const CardComp: FC<CardType & {rotation?:number}> = ({ title, content, btnText,rotation }) => {
  return <motion.div animate={{rotate:rotation}} whileHover={{scale:1.2,rotate:0}} className="text-black p-4 backdrop-blur-2xl bg-white rounded-md inconsolata flex flex-col gap-2 text-center">
    <motion.div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-base font-medium">{content}</p>
    </motion.div>
    <br />
    <Button colors={{bgColor:"white",textColor:"black"}} type="button" text={btnText} />
</motion.div>
}