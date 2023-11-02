import { useSelector, useDispatch } from "react-redux";
import { styled } from "styled-components";

import { SideBar } from "../blocks/SideBar";
import { WorkWindow } from "../blocks/WorkWindow";
import { ShowSideBarButton } from "../ui/Buttons";
import { selectView, toggleSideBar } from "../features/view/view-slice";


const Grid = styled.div`
   position: relative;
   display: grid;
   grid-template-columns: ${({showSideBar}) => showSideBar ? '300px 1fr' : '1fr'};
`;

const Content = () => {
   const dispatch = useDispatch();
   const {showSideBar} = useSelector(selectView);

   const handleClick = () => {
      dispatch(toggleSideBar(true));
   }

   return (
      <Grid showSideBar={showSideBar}>
         {showSideBar 
            ? <SideBar/> 
            : <ShowSideBarButton onClick={handleClick}/>}
         <WorkWindow/>
      </Grid>
   )
}

export {Content};