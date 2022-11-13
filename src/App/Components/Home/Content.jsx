import {
  Wrapper,
  Paragraph,
  Button,
  Subheading,
  LinkList,
  Link,
  LinkIcon,
} from './Content.style';
import MailIcon from './MailIcon';

const Content = () => {
  return (
    <Wrapper>
      <Paragraph>
        Hello! I'm Dorothy Yau, a full-stack web developer based in London, UK.
      </Paragraph>
      <Button
        href="https://drive.google.com/file/d/1Q5Xw77etwu-pu3HtDD_vxR5y0f9MVSbx/view?usp=sharing"
        target="_blank"
      >
        Download my CV
      </Button>
      <Subheading>Links</Subheading>
      <LinkList>
        <li>
          <Link href="mailto:dkyyau@gmail.com" target="_blank">
            <MailIcon />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/dorothyyau/" target="_blank">
            <LinkIcon
              alt="LinkedIn"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/dkyyau" target="_blank">
            <LinkIcon
              alt="GitHub"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            />
          </Link>
        </li>
        <li>
          <Link href="https://gitlab.com/dkyyau" target="_blank">
            <LinkIcon
              alt="GitLab"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg"
            />
          </Link>
        </li>
      </LinkList>
    </Wrapper>
  );
};

export default Content;
