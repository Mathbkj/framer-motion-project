import { motion } from "motion/react";
import { ListType } from "../types/ListType";
import { v4 } from "uuid";
function App() {
  const navList:Array<ListType> = [{id:v4(),}]
  return (
    <>
      <nav className="w-full">
        <motion.ul className="flex w-full">
        </motion.ul>
      </nav>
  
    </>
  )
}

export default App
