import React from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "drei";

const Box = props => {
  const meshRef = React.useRef();

  useFrame(() => (meshRef.current.rotation.x += 0.01));

  return (
    <mesh {...props} ref={meshRef}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} scale={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="green" />
    </mesh>
  );
};

const Model = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
};

export default Model;
