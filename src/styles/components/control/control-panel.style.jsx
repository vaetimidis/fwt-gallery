import styled from '@emotion/styled';
import { breakpoint } from '#/utils/theme';

export const ControlPanelStyle = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 0 10px;
  align-items: center;
  flex-direction: row;
`;

export const SearchStyle = styled.input`
  width: 100%;
  height: 45px;
  font-size: 15px;
  border: 1px solid #000000;
  padding-left: 10px;
  border-radius: 8px;
`;
