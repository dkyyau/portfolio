import { colours } from '../../../Utils/tokens';

const { textMedium } = colours;

const MailIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 50 50"
  >
    <g>
      <path
        stroke="none"
        fillRule="nonzero"
        fill={textMedium}
        fillOpacity={1}
        d="M24.973 28.71l24.695-18.585V9.043a2.016 2.016 0 00-2.016-2.016H2.293c-1.113 0-2.02.903-2.02 2.016v1.082zm0 0"
      />
      <path
        stroke="none"
        fillRule="nonzero"
        fill={textMedium}
        fillOpacity={1}
        d="M26.293 33.215a2.2 2.2 0 01-2.64 0L.272 15.617v25.281a2.02 2.02 0 002.02 2.02h45.36a2.016 2.016 0 002.015-2.02v-25.28zm0 0"
      />
    </g>
  </svg>
);

export default MailIcon;
