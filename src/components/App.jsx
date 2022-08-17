import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Instances, OrbitControls } from '@react-three/drei';
import { MathUtils } from 'three';

const randPosX = () => {
  return (Math.random() - 0.5) * 2;
};
const randPosY = () => {
  return (Math.random() - 0.5) * 10;
};
const randPosZ = () => {
  return (Math.random() - 0.5) * 3;
};

const randScale = () => {
  return Math.random();
};

const Sphere = props => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={e => setHovered(true)}
      onPointerOut={e => setHovered(false)}
    >
      <sphereGeometry args={[randScale(), 32, 32, 4, 7]} />
      <meshStandardMaterial
        color={hovered ? '#DC8827' : '#176ACB'}
        roughness={0.45}
      />
    </mesh>
  );
};

const ContrastSphere = props => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={e => setHovered(true)}
      onPointerOut={e => setHovered(false)}
    >
      <sphereGeometry args={[randScale(), 32, 32, 4, 7]} />
      <meshStandardMaterial
        color={hovered ? '#176ACB' : '#DC8827'}
        roughness={0.45}
      />
    </mesh>
  );
};

const parts = Array.from({ length: 30 }, () => ({
  position: [randPosX(), randPosY(), randPosZ()],
}));

function Bubbles() {
  const ref = useRef();
  useFrame(
    (state, delta) =>
      void (ref.current.rotation.y = MathUtils.damp(
        ref.current.rotation.y,
        (-state.mouse.x * Math.PI) / 6,
        2.75,
        delta
      ))
  );
  return (
    <Instances
      limit={parts.length}
      ref={ref}
      castShadow
      receiveShadow
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial />
      {parts.map((data, i) => (
        <Sphere key={i} {...data} />
      ))}
      <ContrastSphere position={[randPosX(), randPosY(), randPosZ()]} />
      <ContrastSphere position={[randPosX(), randPosY(), randPosZ()]} />
      <ContrastSphere position={[randPosX(), randPosY(), randPosZ()]} />
    </Instances>
  );
}

export const App = () => {
  return (
    <Canvas>
      <PerspectiveCamera>
        <OrbitControls />
        <pointLight intensity={5} distance={20} position={[-10, 10, 10]} />
        <directionalLight
          intensity={5}
          position={[-10, -10, -10]}
          color="#24A7EF"
        />
        <ambientLight />
        <Bubbles />
      </PerspectiveCamera>
    </Canvas>
  );
};
