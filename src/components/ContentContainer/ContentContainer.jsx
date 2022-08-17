import React, { useRef } from 'react';
import { Html } from '@react-three/drei';

const HTMLContent = ({ children, bgColor }) => {
  const ref = useRef();
  document.body.style.background = bgColor;
  return (
    <Html fullscreen portal="{domContent}">
      <div ref={ref} className="container">
        {/* <h1 className="title">Title</h1> */}
        <div>{children}</div>
      </div>
    </Html>
  );
};

export default HTMLContent;
