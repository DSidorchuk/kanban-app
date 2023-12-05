import { styled } from "styled-components";

import { EmptyBoardTitle } from "../ui/Titles";
import { AddColumnButton } from "../ui/Buttons";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 32px;
   margin-top: 364px;
`;

const EmptyBoard = ({handleClick}) => {
   return (
      <Wrapper>
         <EmptyBoardTitle>
            This board is empty. Create a new column to get started.
         </EmptyBoardTitle>
         <AddColumnButton onClick={handleClick}>
            + Add New Column
         </AddColumnButton>
      </Wrapper>
   )
}

export {EmptyBoard};