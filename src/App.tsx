import { motion, useScroll } from "motion/react";
import { ListType } from "../types/ListType";
import { v4 } from "uuid";
import { Typewriter } from "../components/Typewriter";
import { Button } from "../components/Button";
import { ArrowedButton } from "../components/ArrowedButton";
import { MotionButton } from "../components/motion/MotionButton";
import { CardComp } from "../components/universe-ui/CardComp";
import einsteinImg from "./assets/einstein.png";

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
  const { scrollYProgress } = useScroll();
  const opacityVariant = {
    opacity:scrollYProgress
  }
  return (
    <>
      <motion.nav className="w-full flex justify-around items-center">
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
                {/*<motion.button
                  className="cursor-pointer relative z-10 inconsolata text-white/50 bg-slate-950 py-2 px-4 rounded-full m-2"
                  type="button"
                >
                  {item.content.title}
                </motion.button>*/}
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
        <header className="flex flex-col justify-center items-center gap-2">
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
          <ArrowedButton text="Learn More" />
        </header>
        <motion.section style={opacityVariant} className="md:grid md:w-[500px] flex flex-col mt-10 md:grid-cols-2 self-center block md:grid-rows-2 gap-6">
          <CardComp
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            provident repellendus, molestias commodi corrupti praesentium"
            btnText="Explore"
          />
           <CardComp
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            provident repellendus, molestias commodi corrupti praesentium"
            btnText="Explore"
          />
           <CardComp
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            provident repellendus, molestias commodi corrupti praesentium"
            btnText="Explore"
          />
           <CardComp
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            provident repellendus, molestias commodi corrupti praesentium"
            btnText="Explore"
          />
        </motion.section>
        <br/>
        <motion.div style={opacityVariant} className="flex mt-4 gap-2 justify-center items-center ">
          <h1 className="text-transparent leading-13 flex-1 bg-gradient-to-br from-neutral-100 font-bold text-4xl to-neutral-800/20 bg-clip-text">Lorem ipsum dolor amet consectetur <br/>adipsicing ?</h1>
          <p className="text-white/50 text-base text-wrap flex-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi et repellat, placeat tenetur totam quas quibusdam, non neque vero, cumque quos voluptas quo delectus! Ipsa velit sequi repudiandae tenetur hic omnis, totam dicta, ad sunt temporibus quaerat nobis expedita, ea dolorum voluptas labore distinctio deleniti explicabo! Laboriosam aspernatur ea natus facilis asperiores dolorum adipisci ipsam mollitia magni vitae assumenda blanditiis, porro perferendis et velit. Ut quae, dignissimos eius, laudantium culpa facilis sit neque inventore eveniet libero voluptate harums </p>
        </motion.div>
        <br />
        <motion.div style={opacityVariant} className="flex justify-center items-center gap-8 mt-8 w-full text-black flex-row ">
          <img width={400} height={400} src={einsteinImg} className=" ring rounded-full ring-offset-4 object-scale-down"></img>
          <p className=" text-transparent bg-gradient-to-bl from-neutral-100 to-neutral-800/20 bg-clip-text inconsolata font-bold text-3xl text-wrap flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore ipsam assumenda non repellat architecto laborum nesciunt vitae rem necessitatibus molestias qui error minima exercitationem, deleniti optio facere doloremque ex.</p>
        </motion.div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
