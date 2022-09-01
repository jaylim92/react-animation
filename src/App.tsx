import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BiggerBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.301);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVar = {
  hover: { scale: 1.5, rotate: 90 },
  click: { scale: 1, borderRadius: "400px" },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVar}
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
