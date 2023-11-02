import { styled } from "styled-components";

import { BoardList } from "../features/boards/BoardList";
import { ThemeSwitcher } from "../features/view/ThemeSwitcher";
import { SideBarCloser } from "../features/view/SideBarCloser";

const Wrapper = styled.div`
   position: relative;
   width: 300px;
   height: 1024px;
   background-color: var(--col-bg-light);
`;


const SideBar = () => {
   return (
      <Wrapper>
         <BoardList/>
         <ThemeSwitcher/>
         <SideBarCloser/>
      </Wrapper>
   )
}

export {SideBar};