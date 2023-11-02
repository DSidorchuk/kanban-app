import { styled } from "styled-components";

export const NameInput = styled.input`
   width: 416px;
   height: 40px;
   padding-left: 16px;
   font-size: var(--fs-sm);
   font-weight: var(--fw-light);
   line-height: var(--lh-lg); 
   border-radius: var(--rad-sm);
   border: 1px solid var(--col-input-bord);
   color: var(--col-text-dark);
   font-feature-settings: 'clig' off, 'liga' off;
   background-color: var(--col-bg-light);

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

export const ColumnInput = styled(NameInput)`
   width: 385px;
`;