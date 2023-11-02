import { styled } from "styled-components";
import { useSelector } from "react-redux";

import {ReactComponent as LogoLight} from '../assets/LogoLight.svg';
import {ReactComponent as LogoDark} from '../assets/LogoDark.svg';
import { selectView } from "../features/view/view-slice";

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   width: ${({showsidebar}) => showsidebar ? '300px' : '209px'};
   height: 96px;
   padding-left: 32px;
   border-bottom: ${({showsidebar}) => showsidebar ? 'none' : '1px solid var(--col-line)'};
   background-color: var(--col-bg-light);
`;

const Logo = () => {
   const {showSideBar, theme} = useSelector(selectView);

   return (
      <Wrapper showsidebar={showSideBar}>
         {theme === 'light' ? <LogoLight/> : <LogoDark/>}
      </Wrapper>
   )
}

export { Logo };