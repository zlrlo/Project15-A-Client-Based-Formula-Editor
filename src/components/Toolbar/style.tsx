import styled from 'styled-components';
import colors from '@src/utils/colors';

export const ToolbarContainer = styled.div`
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  height: 100%;
  width: 100%;
  .attributes {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .options {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    align-items: center;
    width: 105px;
    margin-right: 20px;
  }
`;
