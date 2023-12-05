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

export const ColumnTitle = styled.h4`
   margin: 0;
   padding: 0;
   color: var(--col-text-light);
   font-size: var(--fs-xs);
   font-weight: var(--fw-bold);
   letter-spacing: 2.4px;
`;

export const BoardTitle = styled(ColumnTitle)`
   margin-top: 15px;
   padding-left: 32px;
`;

export const TaskTitle = styled(Title)`
   width: 248px;
   font-size: var(--fs-md);
`;

export const EmptyBoardTitle = styled(Title)`
   text-align: center;
   color: var(--col-text-light);
`;

export const DataTaskTitle = styled(Title)`
   width: 387px;
`;