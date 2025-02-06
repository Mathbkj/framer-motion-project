import { motion, scroll, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ListType } from "../types/ListType";
import { v4 } from "uuid";
import { Typewriter } from "../components/Typewriter";
import { Button } from "../components/Button";
import { ArrowedButton } from "../components/ArrowedButton";
import { MotionButton } from "../components/motion/MotionButton";
import { CardComp } from "../components/universe-ui/CardComp";
import einsteinImg from "./assets/einstein.png";
import { useRef } from "react";

function App() {
  const navList: Array<ListType> = [
    {
      id: v4(),
      content: { title: "Blog", description: "Blog to be presented" },
      type: "link",
    },
    {
      id: v4(),
      content: {
        title: "API Docs",
        description: "Guide to be readed",
      },
      type: "link",
    },
  ];
  const hidden = {
    opacity: 0,
    x: -20,
  };
  const visible = {
    opacity: 1,
    x: 20,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  };
  const hiddenReverse = {
    opacity: 0,
    x: 20,
  };
  const visibleReverse = {
    opacity: 1,
    x: -20,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  };
  const { scrollYProgress } = useScroll({
    offset: ["0 1","2 3"],
    layoutEffect:true,
  });
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: .001
  });
  const opacity = useTransform(scale,[0.5,0.8,1],[0.7,0.9,1])
  return (
    <motion.div>
      <motion.nav className="w-full sticky flex justify-around items-center">
        <motion.b
          initial={hidden}
          animate={visible}
          className="text-white text-2xl dm-sans font-normal"
        >
          Logo
        </motion.b>
        <motion.ul
          
          initial={hiddenReverse}
          animate={visibleReverse}
          className="flex text-base gap-5 justify-around items-center"
        >
          {navList.map((item) =>
            item.type == "link" && item.content.title !== "Blog" ? (
              <li className="relative my-2"> 
               <MotionButton text={item.content.title} />
              </li>
            ) : item.type == "link" && item.content.title === "Blog" ? (
              <li className="relative my-2">
                <Button
                  type="button"
                  colors={{ textColor: "white", bgColor: "neutral-800" }}
                  text="Blog"
                />
              </li>
            ) : (
              <></>
            )
          )}
        </motion.ul>
      </motion.nav>
      <main className="flex flex-col mt-10 mx-4 p-2">
        <motion.header className="flex flex-col justify-center items-center gap-2">
          <Typewriter
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            size={"4xl"}
            weight={"bold"}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-wrap inconsolata text-white/50 text-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            provident repellendus, molestias commodi corrupti praesentium
            perferendis placeat quidem distinctio neque incidunt voluptatum est?
            Necessitatibus odit modi ut quaerat pariatur. Unde numquam aliquid
            vero quae quas iusto ab et velit. Ducimus ratione nesciunt officia
            vel et dolor iusto dicta qui culpa.
          </motion.p>
          <ArrowedButton text="Start Playing" />
        </motion.header>
        <motion.section style={{scale:scale,opacity:opacity}} className="md:grid md:w-[500px] block mt-10 md:grid-cols-2 self-center md:grid-rows-2 gap-6">
          <CardComp
            rotation={-45}
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            provident repellendus, molestias commodi corrupti praesentium"
            btnText="Explore"
          />
          <CardComp
            rotation={45}
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            provident repellendus, molestias commodi corrupti praesentium"
            btnText="Explore"
          />
          <CardComp
            rotation={-135}
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            provident repellendus, molestias commodi corrupti praesentium"
            btnText="Explore"
          />
          <CardComp
            rotation={135}
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            provident repellendus, molestias commodi corrupti praesentium"
            btnText="Explore"
          />
        </motion.section>
        <br/>
        <motion.div style={{scale:scale}} className="flex md:flex-nowrap flex-wrap mt-8 justify-center items-center">
          <h1 className="text-transparent bg-gradient-to-br flex-1 leading-12 from-neutral-100 font-bold text-4xl ms-3 to-neutral-800/20 bg-clip-text">Lorem ipsum dolor amet consectetur adipsicing ?</h1>
          <p className="text-white/50 text-base text-wrap flex-1 shrink">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi et repellat, placeat tenetur totam quas quibusdam, non neque vero, cumque quos voluptas quo delectus! Ipsa velit sequi repudiandae tenetur hic omnis, totam dicta, ad sunt temporibus quaerat nobis expedita, ea dolorum voluptas labore distinctio deleniti explicabo! Laboriosam aspernatur ea natus facilis asperiores dolorum adipisci ipsam mollitia magni vitae assumenda blanditiis, porro perferendis et velit. Ut quae, dignissimos eius, laudantium culpa facilis sit neque inventore eveniet libero voluptate harums </p>
        </motion.div>
        <br />
      </main>
      
      <footer className="w-full bg-white mt-5">
      <motion.div style={{scale:scale}} className="flex p-10 bg-fixed flex-row-reverse md:flex-nowrap flex-wrap bg-origin-content justify-center items-center mt-8 text-black ">
          <img width={300} height={300} src={einsteinImg} className="shrink ring-black rounded-full ring-offset-1 object-cover"></img>
          <p className="inconsolata mx-10 font-bold text-2xl text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore ipsam assumenda non repellat architecto laborum nesciunt vitae rem necessitatibus molestias qui error minima exercitationem, deleniti optio facere doloremque ex.</p>
        </motion.div>
      </footer>
    </motion.div>
  );
}

export default App;
