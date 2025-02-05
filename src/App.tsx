import { motion } from "motion/react";
import { ListType } from "../types/ListType";
import { v4 } from "uuid";
import { easeInOut } from "motion";

function App() {
  const navList: Array<ListType> = [
    {
      id: v4(),
      content: { title: "Blog", description: "Blog to be presented" },
      type: "text",
    },
    {
      id: v4(),
      content: {
        title: "Read Guide",
        description: "Guide to be readed",
      },
      type: "link",
    },
  ];
  


  return (
    <>
      <nav className="w-full flex justify-around items-center">
        <b className="text-white text-2xl dm-sans font-normal">Logo</b>
        <motion.ul className="flex text-base gap-5 justify-around items-center">
          {navList.map((item) =>
            item.type == "link" ? (
              <li className="relative">

                <motion.button
                  className="cursor-pointer relative z-10 inconsolata text-white/50 bg-slate-950 py-2 px-4 rounded-full m-2"
                  type="button"
                >
                  {item.content.title}
                </motion.button>
                <motion.div animate={{ rotateX: 90, rotateY: 2, transition: { duration: 1, ease: easeInOut, repeat: Infinity, repeatType: "mirror" } }} className="from-blue-300 to-blue-900 absolute inset-1.5 rounded-full bg-fixed bg-gradient-to-b"></motion.div>
              </li>
            ) : (
              <li className="text-white inconsolata">{item.content.title}</li>
            )
          )}
        </motion.ul>
      </nav>
      <main>
        <motion.div>
          <h1 className="text-4xl inconsolata text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/30 font-bold">Welcome to the App</h1>
          <p className="text-lg inconsolata text-white/50 text-center">This is a sample app made with framer motion</p>

        </motion.div>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
