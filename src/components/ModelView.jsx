import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";

import * as THREE from "three";
import Lights from "./Lights";
import Loader from "./Loader";
import IPhone from "./IPhone";
import { Suspense } from "react";
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* ambientLight */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* pointLight */}

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />
      <Suspense fallback={<Loader />}>
        <IPhone />
      </Suspense>
    </View>
  );
};

export default ModelView;
