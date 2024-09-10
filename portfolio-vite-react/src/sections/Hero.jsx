import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva, useControls } from "leva";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  // gets constants from constants/index.js where the creator Adrien/JSM used Leva for a bit to position all the logs on all 4 of the screen sizes
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return(
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Bruce <span className="waving-hand">👋</span></p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* any element wrapped in Canvas inherits all three/fiber properties */}
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom 
              // scale={0.1} 
              // position={[0, 0, 0]} 
              // rotation={[0, Math.PI, 0]}
              position={sizes.deskPosition}
              rotation={[0, Math.PI, 0]}
              scale={sizes.deskScale}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero