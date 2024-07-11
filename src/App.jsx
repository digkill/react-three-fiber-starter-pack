import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"

function App() {
  return (
    <Canvas shadows camera={{ position: [10, 10, 10], fov: 30}}>
      <color attach="background" args={["#2f2f2f"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
