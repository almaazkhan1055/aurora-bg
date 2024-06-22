import AuroraBackground from "./component/ui/aurora-background";
import "./index.css";

function App() {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold z-10 text-zinc-800">
        Made with &#10084; by Almaaz Khan
      </h1>
      <AuroraBackground />
    </main>
  );
}

export default App;
