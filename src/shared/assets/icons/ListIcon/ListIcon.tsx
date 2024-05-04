export const ListIcon = (props: { color: string, size?: string }) => {
  const { color, size = 30 } = props;

  return (
    <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke={color} strokeWidth="2" />
      <path d="M16 10L8 10" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 14L8 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
