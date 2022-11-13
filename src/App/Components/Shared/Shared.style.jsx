import styled from 'styled-components';

import { breakpoints, colours } from '../../../Utils/tokens';

const { tabletMin } = breakpoints;
const { background } = colours;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 820px;
  background-color: ${background};
  overflow: hidden;
  position: relative;

  @media ${tabletMin} {
    min-height: 800px;
  }
`;
