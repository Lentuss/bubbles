import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Instances, OrbitControls } from '@react-three/drei';
import { MathUtils } from 'three';

import HTMLContent from 'components/ContentContainer/ContentContainer';

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

const randPosX = () => {
  return 3 + (Math.random() - 0.5) * 3;
};
const randPosY = () => {
  return (Math.random() - 0.5) * 10;
};
const randPosZ = () => {
  return (Math.random() - 0.5) * 3;
};
console.log();
const randScale = () => {
  return Math.random() - 0.2;
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
        (-state.mouse.x * Math.PI) / 10,
        2.75,
        delta
      ))
  );
  return (
    <Instances
      rotation={[Math.PI / 13, Math.PI / 6, -Math.PI / 16]}
      limit={parts.length}
      ref={ref}
      castShadow
      receiveShadow
      position={[0, 0, 0]}
    >
      <sphereGeometry />
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

const BubbleCanvas = ({ children }) => {
  const domContent = useRef();
  return (
    <Canvas>
      <PerspectiveCamera
        position={[0, 0, 0]}
        //   position={[1.5, 0, 0]}
      >
        <OrbitControls
        //   autoRotate
        //   enablePan={false}
        //   enableZoom={false}
        //   maxPolarAngle={Math.PI / 2}
        //   minPolarAngle={Math.PI / 2}
        />
        <ambientLight />
        <pointLight
          intensity={5}
          distance={20}
          position={[-5, 10, 10]}
          //   castShadow
          //   shadow-mapSize-width={1024}
          //   shadow-mapSize-height={1024}
          //   shadow-camera-far={50}
          //   shadow-camera-left={-10}
          //   shadow-camera-right={10}
          //   shadow-camera-top={10}
          //   shadow-camera-bottom={-10}
        />
        <directionalLight
          intensity={1.5}
          position={[10, -10, -10]}
          color="#24A7EF"
          //   castShadow
          //   shadow-mapSize-width={1024}
          //   shadow-mapSize-height={1024}
          //   shadow-camera-far={50}
          //   shadow-camera-left={-10}
          //   shadow-camera-right={10}
          //   shadow-camera-top={10}
          //   shadow-camera-bottom={-10}
        />
        <Bubbles />
        <HTMLContent domContent={domContent} bgColor=" #3e374a" position={250}>
          {children}
        </HTMLContent>
      </PerspectiveCamera>
    </Canvas>
  );
};
export default BubbleCanvas;
