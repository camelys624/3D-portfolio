import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "../components/Loader"

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex item-center justify-center">

      </div> */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={0.5} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <hemisphereLight skyColor={"#ffffff"} groundColor={"#ffffff"} intensity={0.5} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home