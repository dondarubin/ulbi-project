export const AboutIcon = (props: { color: string }) => {
  const { color } = props;
  return (
    <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">

      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

      <g id="SVGRepo_iconCarrier">
        <path
          d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d="M8 14H13" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M8 10H9M16 10H12" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      </g>

    </svg>
  );
};
