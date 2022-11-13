import styled from 'styled-components';

import { breakpoints, colours } from '../../../Utils/tokens';

const { mobileS, mobileM, tabletMin } = breakpoints;
const { primaryLight, secondary, textDark, textMedium } = colours;

export const StripeTopBack = styled.div`
  position: absolute;
  top: 40px;
  left: 15%;
  height: 120px;
  width: 100%;
  background-color: ${secondary};
  z-index: 1;

  @media ${tabletMin} {
    height: 140px;
  }
`;

export const StripeTopMain = styled.header`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 120px;
  width: 100%;
  background-color: ${primaryLight};
  z-index: 2;

  @media ${tabletMin} {
    top: 20px;
    left: 20px;
    height: 140px;
  }
`;

export const StripeBottomBack = styled.div`
  position: absolute;
  bottom: 40px;
  right: 15%;
  height: 60px;
  width: 100%;
  background-color: ${secondary};
  z-index: 1;

  @media ${tabletMin} {
    height: 80px;
  }
`;

export const StripeBottomMain = styled.footer`
  box-sizing: border-box;
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 60px;
  width: 100%;
  background-color: ${primaryLight};
  z-index: 2;

  @media ${tabletMin} {
    bottom: 20px;
    right: 20px;
    height: 80px;
  }
`;

export const MainHeading = styled.h1`
  z-index: 10;
  font-family: 'Montserrat';
  font-size: 2rem;
  font-weight: 500;
  color: ${textDark};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 12px 0 0 12px;

  @media ${tabletMin} {
    font-weight: 400;
    font-size: 3.6rem;
    letter-spacing: 0.5rem;
    margin: 20px 0 0 20px;
  }
`;

export const MainHeadingBold = styled.span`
  display: block;
  font-weight: 700;

  @media ${mobileS} {
    display: inline-block;
  }

  @media ${tabletMin} {
    font-weight: 500;
  }
`;

export const MainSubheading = styled.p`
  display: none;

  @media ${mobileS} {
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${textMedium};
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin: 0 0 0 14px;
    word-wrap: break-word;
    white-space: normal;

    > span {
      display: block;
    }
  }

  @media ${mobileM} {
    > span {
      display: inline-block;
    }
  }

  @media ${tabletMin} {
    font-size: 1.5rem;
    letter-spacing: 0.25rem;
    margin: 0 0 0 24px;
  }
`;

export const MainWrapper = styled.main`
  position: relative;
  z-index: 100;
  width: 100%;
  margin: 200px auto 0;

  @media ${tabletMin} {
    width: 70%;
    margin: 240px auto 0;
  }
`;

export const CreditText = styled.p`
  text-align: right;
  color: ${textMedium};
  font-size: 0.8rem;
  margin: 22px 12px 0 0;

  @media ${tabletMin} {
    font-size: 1rem;
    margin: 28px 20px 0 0;
  }
`;
