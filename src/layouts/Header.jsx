import { styled } from "styled-components";

import { Logo } from "../components/Logo";
import { HeaderBar } from "../components/HeaderBar";

const Grid = styled.header`
   display: grid;
   grid-template-columns: repeat(2, auto);
   height: 96px;
`;

const Header = () => {

   return (
      <Grid>
         <Logo/>
         <HeaderBar/>
      </Grid>
   )
}

export { Header };