import { styled } from "styled-components";
import { useDispatch} from 'react-redux';

import { ReactComponent as EyeIcon} from '../../assets/Eye.svg';
import { toggleSideBar } from "./view-slice";

const Wrapper = styled.div`
   position: absolute;
   bottom: 47px;
   left: 31px;
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 15px;
   width: 127px;
   height: 19px;
   font-size: var(--fs-md);
   font-weight: var(--fw-bold);
   color: var(--col-text-light);
   font-feature-settings: 'clig' off, 'liga' off;
   cursor: pointer;
`;

const SideBarCloser = () => {
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(toggleSideBar(false));
   }

   return (
      <Wrapper onClick={handleClick}>
         <EyeIcon/>
         Hide Sidebar
      </Wrapper>
   )
}

export { SideBarCloser};