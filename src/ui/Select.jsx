import { styled } from "styled-components";

export const Select = styled.select.attrs({size: 1})`
   width: 416px;
   height: 40px;
   padding-left: 16px;
   font-size: var(--fs-sm);
   font-weight: var(--fw-light);
   line-height: var(--lh-lg); 
   border-radius: var(--rad-sm);
   border: 1px solid var(--col-input-bord);
   background-color: var(--col-bg-light);
   color: var(--col-text-dark);
   font-feature-settings: 'clig' off, 'liga' off;

   & > option {
      color: var(--col-text-light);
   }

   &:active {
      border: 1px solid var(--col-btn-primary);
   }

   &:after {
      width: 9.397px;
      height: 4.698px;
      background-color: var(--col-btn-primary);
   }
`;