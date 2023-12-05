import { styled } from "styled-components";

import flag from '../assets/flag.svg';

const Wrapper = styled.label`
   position: relative;
   display: flex;
   align-items: center;
   width: 416px;
   height: 40px;
   padding-left: 12px;
   border-radius: var(--rad-sm);
   background-color: var(--col-checkbox);
   cursor: pointer;

   &:hover {
      background-color: var(--col-checkbox-hov);
   }

   & > input {
      position: absolute;
      z-index: -1;
      opacity: 0;
   }

   & > span {
      display: flex;
      align-items: center;
      width: 356px;
      color: var(--col-text-dark);
      font-size: var(--fs-xs);
      font-weight: var(--fw-bold);
   }
   & > span::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 16px;
      border-radius: var(--rad-xs);
      border: 1px solid var(--col-input-bord);
      background: var(--col-checkbox-rect);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 80%;
   }
   & > input:checked+span::before {
      width: 19px;
      height: 19px;
      border: none;
      background-color: var(--col-checkbox-hov);
      background-image: url(${flag});
    }
`;




const Checkbox = ({subtask, toggleSubtask}) => {

   return (
      <Wrapper 
         htmlFor={subtask.title} 
      >
         <input 
            type="checkbox" 
            checked={subtask.isCompleted}
            name={subtask.title}
            id={subtask.title}
            onClick={toggleSubtask}
         />
         <span>{subtask.title}</span>
      </Wrapper>
   )
}

export {Checkbox};