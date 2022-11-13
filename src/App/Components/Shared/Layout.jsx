import { Background } from './Shared.style';
import {
  StripeTopBack,
  StripeTopMain,
  MainHeading,
  MainHeadingBold,
  MainSubheading,
  MainWrapper,
  StripeBottomMain,
  StripeBottomBack,
  CreditText,
} from './Layout.style';

const Layout = ({ children }) => {
  return (
    <Background>
      <StripeTopBack>
        <StripeTopMain>
          <MainHeading>
            Dorothy <MainHeadingBold>Yau</MainHeadingBold>
          </MainHeading>
          <MainSubheading>
            Full-Stack <span>Web Developer</span>
          </MainSubheading>
        </StripeTopMain>
      </StripeTopBack>
      <MainWrapper>{children}</MainWrapper>
      <StripeBottomBack>
        <StripeBottomMain>
          <CreditText>Built by Dorothy Yau | 2022</CreditText>
        </StripeBottomMain>
      </StripeBottomBack>
    </Background>
  );
};

export default Layout;
