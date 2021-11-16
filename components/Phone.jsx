import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ ProjectRef, pid }) {
  const group = useRef();
  const { nodes, materials } = new useGLTF("/iphone.gltf");
  materials.Frame.color = { r: 0, g: 0, b: 0 };
  // const texture = new THREE.TextureLoader().load(`./project/${pid}.png`);
  const materialScreen = materials.Screen.clone();
  materialScreen.map = materialScreen.map.clone();
  let img = new Image();
  img.src = `./project/${pid}.png`;
  materialScreen.map.image = img;
  materialScreen.map.needsUpdate = true;
  useEffect(() => {
    ProjectRef.current.addEventListener("mousemove", rotatModel);
  }, []);

  const rotatModel = (e) => {
    const target = e.target;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let windowWidth = ProjectRef.current.clientWidth / 2;
    group.current.rotation.y =
      ((x % (2 * windowWidth)) - windowWidth) / windowWidth;
  };

  return (
    <group scale={[1.2, 1.2, 1.2]} ref={group} dispose={null}>
      <mesh geometry={nodes.Frame.geometry} material={materials.Frame} />
      <mesh geometry={nodes.Screen.geometry} material={materialScreen} />
      <mesh geometry={nodes.Logo.geometry} material={materials.Logo} />
    </group>
  );
}

useGLTF.preload("/iphone.gltf");

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, -5]} intensity={1} />
      <directionalLight position={[-10, 0, 2]} intensity={1.5} />
    </>
  );
};

const Phone = ({ ProjectRef, pid }) => {
  return (
    <Canvas>
      <Lights />
      <Suspense fallback={null}>
        <Model ProjectRef={ProjectRef} pid={pid} />
      </Suspense>
    </Canvas>
  );
};

export default Phone;
