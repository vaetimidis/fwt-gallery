import styled from '@emotion/styled';
import { breakpoint } from '#/utils/theme';

export const ControlPanelStyle = styled.div`
  margin-top: 27px;
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 0 10px;
  align-items: center;

  flex-direction: column;
  ${breakpoint('sm')} {
    flex-direction: row;
    gap: 20px;
  }
`;
