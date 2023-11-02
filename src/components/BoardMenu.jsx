import { styled } from "styled-components";

const Wrapper = styled.div`
   position: absolute;
   top: ${({show}) => show ? '96px' : '-100%'};
   right: 0;
   z-index: 10;
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: column;
   width: 226px;
   height: 100px;
   background-color: var(--col-bg-light);
   border-radius: var(--rad-ms);
`;

const Edit = styled.div`
   font-size: var(--fs-md);
   font-weight: var(--fw-bold);
   color: var(--col-text-light);
   font-feature-settings: 'clig' off, 'liga' off;
   cursor: pointer;
`;

const Delete = styled(Edit)`
   color: var(--col-text-error);
`;


const BoardMenu = ({show, onEdit, onDelete}) => {
   return (
      <Wrapper show={show}>
         <Edit onClick={onEdit}>Edit board</Edit>
         <Delete onClick={onDelete}>Delete board</Delete>
      </Wrapper>
   )
}

export {BoardMenu};