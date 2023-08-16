export const ArrowIconLeft = (props: {color: string}) => {
  const { color } = props;
  return (
    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <path d="M15 19L9 12L10.5 10.25M15 5L13 7.33333" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        {' '}
      </g>

    </svg>
  );
};
