import styled from 'styled-components';
import colors from '@src/utils/colors';
import CropSection from './CropSection';
import 'react-image-crop/dist/ReactCrop.css';

export const MainSectionTemplate = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextArea = styled.div<{ height: number }>`
  background-color: #e1e0de;
  width: 100%;
  height: ${(props) => 100 - props.height}%;
`;

export const LaTeX = styled.div<{ height: number }>`
  background-color: ${colors.grey};
  width: 100%;
  height: ${(props) => props.height}%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Tab = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 2.3rem;
  background-color: ${colors.backgroundGrey};
  width: 100%;
`;
interface Props {
  display: string;
}
export const Modal = styled.div<Props>`
  display: ${(props) => props.display}; /* Hidden by default */
  position: fixed; /* Stay in place */
  width: 79%; /* Full width */
  height: 13%; /* Full height */
  background-color: rgba(255, 255, 255, 0.1); /* Black w/ opacity */
`;
