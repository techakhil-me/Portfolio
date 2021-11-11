import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ ProjectRef, pid }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/browser.gltf");
  useEffect(() => {
    ProjectRef.current.addEventListener("mousemove", rotatModel);
  }, []);

  const rotatModel = (e) => {
    const target = e.target;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let windowWidth = ProjectRef.current.clientWidth / 2;
    group.current.rotation.y =
      (((x % (2 * windowWidth)) - windowWidth) / windowWidth) * 0.8;
  };
  materials["Frame.001"].color = { r: 0, g: 0, b: 0 };
  materials.Buttons.color = { r: 0, g: 0, b: 0 };
  const materialScreen = materials["Screen.001"].clone();
  materialScreen.map = materials["Screen.001"].map.clone();
  let img = new Image();
  img.src = `./project/${pid}.png`;
  materialScreen.map.image = img;
  materialScreen.map.needsUpdate = true;
  return (
    <group scale={[1.8, 1.8, 1.8]} ref={group} dispose={null}>
      <mesh
        geometry={nodes.Frame.geometry}
        material={materials["Frame.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Screen.geometry}
        material={materialScreen}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Buttons.geometry}
        material={materials.Buttons}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/browser.gltf");

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, -5]} intensity={1} />
      <directionalLight position={[-10, 0, 2]} intensity={1.5} />
    </>
  );
};

const Laptop = ({ ProjectRef, pid }) => {
  return (
    <Canvas>
      <Lights />
      <Suspense fallback={null}>
        <Model ProjectRef={ProjectRef} pid={pid} />
      </Suspense>
    </Canvas>
  );
};

export default Laptop;
