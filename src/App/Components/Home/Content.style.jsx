import styled from 'styled-components';

import { breakpoints, colours } from '../../../Utils/tokens';

const { tabletMin, desktopS } = breakpoints;
const { primary, textDark, textMedium } = colours;

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${desktopS} {
    width: 800px;
    margin: 0 auto;
    padding: 0;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${textMedium};
  font-size: 1rem;
  margin: 20px 0;

  @media ${tabletMin} {
    font-size: 1.2rem;
    margin: 40px 0;
  }
`;

export const Button = styled.a`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  background-color: ${primary};
  color: ${textMedium};
  padding: 16px 24px;
  border: none;
  border-radius: 32px;
  width: fit-content;

  &:hover {
    opacity: 0.8;
  }

  @media ${tabletMin} {
    font-size: 1.2rem;
  }
`;

export const Subheading = styled.h2`
  color: ${textDark};
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  margin: 20px 0 16px;

  @media ${tabletMin} {
    font-size: 2rem;
    letter-spacing: 0.5rem;
    margin: 40px 0 24px;
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin: 0 auto;
  padding: 0;

  @media ${tabletMin} {
    width: 400px;
    gap: 0;
    flex-direction: row;
  }
`;

export const Link = styled.a`
  &:hover img,
  &:hover svg {
    opacity: 0.8;
  }
`;

export const LinkIcon = styled.img`
  height: 50px;
  width: 50px;
`;
