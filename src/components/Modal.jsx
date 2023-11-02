import { styled } from "styled-components";
import { useRef } from "react";

const Wrapper = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   z-index: 5;
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: var(--col-bg-modal);
`;

const Content = styled.div`
   width: 480px;
   height: auto;
   padding: 32px;
   background-color: var(--col-bg-light);
   border-radius: var(--rad-ms);
`;

const Modal = ({children, show, onClose}) => {
   const ref = useRef(null);

   const handleClick = (e) => {
      if(ref.current === e.target) {
         onClose();
      }
   }

   return (
      <>
      {show && 
         <Wrapper ref={ref} onClick={handleClick}>
            <Content>
               {children}
            </Content>
         </Wrapper>}
      </>
   )
}

export {Modal};