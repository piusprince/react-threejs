import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AnimatedBlob() {
  return (
    <Sphere args={[1, 32, 32]} scale={[1, 1, 1]} visible>
      <MeshDistortMaterial
        attach="material"
        color="hotpink"
        distort={0.5}
        speed={0.9}
        factor={0.1}
        roughness={0.1}
        metalness={0.5}
        side={3}
      />
    </Sphere>
  );
}
