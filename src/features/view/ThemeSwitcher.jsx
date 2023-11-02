import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import switchLight from "../../assets/SwitchLight.png";
import switchDark from "../../assets/SwitchDark.png";
import { setTheme, selectView } from "./view-slice";

const Wrapper = styled.div`
   position: absolute;
   left: 24px;
   bottom: 88px;
   width: 251px;
   height: 48px;

   & > img {
      cursor: pointer;
   }
`;

const ThemeSwitcher = () => {
   const dispatch = useDispatch();
   const {theme} = useSelector(selectView);
   const src = theme === 'light' ? switchLight : switchDark;

   const handleClick = () => {
      dispatch(setTheme(
         theme === 'light' ? 'dark' : 'light'
      ));
   }

   useEffect(() => {
      document.body.setAttribute('data-theme', theme);
   }, [theme])

   return (
      <Wrapper>
         <img 
            src={src} 
            alt="theme-switcher"
            onClick={handleClick}
         />
      </Wrapper>
   )
}

export {ThemeSwitcher};