export const UserProfileIcon = (props: { color: string }) => {
  const { color } = props;
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.7956 20.7059C17.4537 19.6427 16.7004 18.7033 15.6526 18.0332C14.6047 17.3632 13.3208 17 12 17C10.6792 17 9.3953 17.3632 8.34743 18.0332C7.29957 18.7033 6.5463 19.6427 6.20445 20.7059"
        stroke={color}
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="2" />
    </svg>
  );
};
