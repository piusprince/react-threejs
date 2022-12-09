import reactLogo from "./assets/react.svg";
import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import AnimatedBlob from "./components/AnimatedBlob";
import Hero from "./components/Hero";

function App() {
  return (
    <Wrapper>
      <Hero />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
        <AnimatedBlob />
      </Canvas>
      <Canvas className="canvas">
        {/* <OrbitControls enableZoom={false} /> */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />
        <Suspense fallback={null}>
          <AnimatedBlob />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  height: 100vh;

  .canvas {
    height: 500px;
    background: #1f1144;

`;
