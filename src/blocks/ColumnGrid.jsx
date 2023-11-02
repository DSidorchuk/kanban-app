import { styled } from "styled-components";
import { useSelector } from 'react-redux';

import { selectActiveBoard } from "../features/boards/boards-slice";

const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto, 280px);
   column-gap: 24px;
`;

const ColumnGrid = () => {
   const {columns} = useSelector(selectActiveBoard);

   return (
      <Grid>
      </Grid>
   )
}

export {ColumnGrid};