import React, {
  useRef,
  // , createContext
} from 'react';
import { Html } from '@react-three/drei';

const HTMLContent = ({ children, bgColor }) => {
  const ref = useRef();
  document.body.style.background = bgColor;
  return (
    // <Section>
    //   <group position={[0, 0, 0]}>
    <Html fullscreen portal="{domContent}">
      <div ref={ref} className="container">
        <h1 className="title">Title</h1>
        <div>{children}</div>
      </div>
    </Html>
    //   </group>
    // </Section>
  );
};

// const offsetContext = createContext(0);

// function Section({ children, offset, ...props }) {
//   const ref = useRef();
//   return (
//     <offsetContext.Provider value={offset}>
//       <group {...props}>
//         <group ref={ref}>{children}</group>
//       </group>
//     </offsetContext.Provider>
//   );
// }

export default HTMLContent;
