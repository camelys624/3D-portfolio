import { useRef, useEffect } from "react";
import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/models/island.glb";

export function Island({
  isRoatting, setIsRotating, setCurrentStage, currentFocusPoint, ...props
}) {
  const islandRef = useRef();
  // Get access to the Three.js renderer and viewport
  const {gl, viewport} = useThree();
  const {nodes, materials} = useGLTF(islandScene);

  // use a ref for rotation speed
  const rotationSpeed = useRef(0);
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95;

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(true)

    // Calculate the clientX based on whether it's a touch event or mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX

    // sotre the current clientX position for reference
  }
}