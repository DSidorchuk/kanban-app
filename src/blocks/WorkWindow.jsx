import { styled } from "styled-components";
import { useSelector } from "react-redux";

import { EmptyBoard } from "../components/EmptyBoard";
import { ColumnGrid } from "./ColumnGrid";
import { selectActiveBoard } from "../features/boards/boards-slice";

const Wrapper = styled.div`
   min-height: 1024px;
   overflow-x: hidden;
`;

const WorkWindow = () => {
   const activeBoard = useSelector(selectActiveBoard);

   return (
      <Wrapper>
         {activeBoard && activeBoard.columns.length === 0 && <EmptyBoard/>}
         {activeBoard && activeBoard.columns.length > 0 && <ColumnGrid/>}
      </Wrapper>
   )
}

export {WorkWindow};