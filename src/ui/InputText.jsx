import { styled } from "styled-components";

export const InputText = styled.textarea`
   width: 416px;
   height: 112px;
   padding-left: 16px;
   font-size: var(--fs-sm);
   font-weight: var(--fw-light);
   line-height: var(--lh-lg); 
   border-radius: var(--rad-sm);
   border: 1px solid var(--col-input-bord);
   color: var(--col-text-dark);
   font-feature-settings: 'clig' off, 'liga' off;
   background-color: var(--col-bg-light);
   resize: none;

   &::placeholder {
      opacity: 0.25;
   }

   &:required {
      border: 1px solid var(--col-text-error);
   }
   &.empty {
      border: 1px solid var(--col-text-error);
   }
`;