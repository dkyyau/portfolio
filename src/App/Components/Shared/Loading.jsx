import styled from 'styled-components';

import { colours } from '../../../Utils/tokens';
import { Background } from './Shared.style';

const { primary, secondary } = colours;

const Dots = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% - 48px);
  display: flex;

  @keyframes dots-animation {
    to {
      opacity: 0.4;
      background-color: ${secondary};
      transform: translateY(-20px);
    }
  }

  > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  margin: 4px 8px;
  border-radius: 50%;
  background-color: ${primary};
  opacity: 1;
  animation: dots-animation 0.6s infinite alternate;
`;

const Loading = () => {
  return (
    <Background>
      <Dots>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </Background>
  );
};

export default Loading;
