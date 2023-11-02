import { styled } from "styled-components";

export const Title = styled.h3`
   margin: 0;
   padding: 0;
   font-size: var(--fs-lg);
   font-weight: var(--fw-bold);
   text-align: left;
   color: var(--col-text-dark);
   font-feature-settings: 'clig' off, 'liga' off;
`;

export const DeleteTitle = styled(Title)`
   color: var(--col-text-error);
`;