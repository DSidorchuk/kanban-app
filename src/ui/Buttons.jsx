import { styled } from "styled-components";

import { ReactComponent as ShowSideBar} from '../assets/ShowSideBarBtn.svg';
import { ReactComponent as Cross } from '../assets/CrossBtn.svg';


export const WideButton = styled.button`
   width: 164px;
   height: 48px;
   font-size: var(--fs-md);
   font-weight: var(--fw-bold);
   text-align: center;
   color: var(--col-btn-text-light);
   border-radius: var(--rad-xl);
   background-color: var(--col-btn-primary);
   cursor: pointer;

   &:hover {
      background-color: var(--col-btn-primary-hov);
   }

   &:disabled {
      opacity: 0.8;
   }
`;

export const LargeButton = styled(WideButton)`
   width: 416px;
   height: 40px;
   border-radius: var(--rad-lg);
   font-size: var(--fs-sm);
`;

export const LargeButtonLight = styled(LargeButton)`
   color: var(--col-btn-primary);
   background-color: var(--col-btn-sec);

   &:hover {
      background-color: var(--col-btn-sec-hov);
   }
`;

export const ShowSideBarButton = styled(ShowSideBar)`
   position: absolute;
   left: 0;
   bottom: 32px;
   cursor: pointer;
`;

export const DeleteButton = styled.button`
   width: 200px;
   height: 40px;
   border-radius: 20px;
   color: var(--White, #FFF);
   font-size: var(--fs-sm);
   font-weight: var(--fw-bold);
   background: var(--col-btn-destr);
   text-align: center;
   cursor: pointer;

   &:hover {
      background: var(--col-btn-destr-hov);
   }
`;

export const CancelButton = styled(DeleteButton)`
   color: var(--col-btn-primary);
   background-color: var(--col-btn-sec);

   &:hover {
      background-color: var(--col-btn-sec-hov);
   }
`;

export const AddColumn = styled.button`
   width: 169px;
   height: 30px;
   text-align: center;
   font-feature-settings: 'clig' off, 'liga' off;
   font-size: var(--fs-xl);
   font-weight: var(--fw-bold);
   color: var(--col-text-light);
   background-color: inherit;
   cursor: pointer;
`;

export const AddColumnButton = styled(WideButton)`
   width: 174px;
`;

export const CrossButton = styled(Cross)`
   cursor: pointer;
`;
