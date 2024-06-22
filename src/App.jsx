import AuroraBackground from "./component/ui/aurora-background";
import "./index.css";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="flex items-center justify-center h-screen">
      {/* <h1 className="text-4xl font-bold z-10 text-zinc-800">
        Made with &#10084; by Almaaz Khan
      </h1> */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 z-20"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-black text-center">
          Made by Almaaz Khan
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is Aurora Effect.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 hover:bg-white">
          &#10084;
        </button>
      </motion.div>
      <AuroraBackground />
    </main>
  );
}

export default App;
