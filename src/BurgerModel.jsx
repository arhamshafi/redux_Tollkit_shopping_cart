import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function FoodModel(props) {
  const gltf = useGLTF('/krabby_patty_burger.glb') 

  return <primitive object={gltf.scene} {...props} />
}
