export const MainIconTablet = (props: { color: string }) => {
  const { color } = props;
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke={color} strokeWidth="2" />
      <path d="M15 17H9" stroke={color} strokeWidth="2" />
    </svg>
  );
};
