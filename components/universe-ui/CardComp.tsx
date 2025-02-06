import  { FC } from "react";
import { CardType } from "../../types/CardType";
import {motion} from "motion/react";
import { Button } from "../Button";
export const CardComp: FC<CardType> = ({ title, content, btnText }) => {
  return <motion.div className="text-white p-4 shadow-md inset-1 inset-shadow-white rounded-md inconsolata flex flex-col gap-2 text-center">
    <motion.div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-base font-medium">{content}</p>
    </motion.div>
    <br/>
    <Button text={btnText} colors={{bgColor:"white",textColor:"black"}} type="button" />
    
</motion.div>
}