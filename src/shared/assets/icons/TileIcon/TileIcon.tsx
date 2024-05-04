export const TileIcon = (props: { color: string, size?: string }) => {
  const { color, size = 30 } = props;

  return (
    <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M18,34v6H10V34h8m2-4H8a2,2,0,0,0-2,2V42a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V32a2,2,0,0,0-2-2Z" />
      <path fill={color} d="M18,8V22H10V8h8m2-4H8A2,2,0,0,0,6,6V24a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z" />
      <path fill={color} d="M38,8v6H30V8h8m2-4H28a2,2,0,0,0-2,2V16a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z" />
      <path
        fill={color}
        d="M38,26V40H30V26h8m2-4H28a2,2,0,0,0-2,2V42a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V24a2,2,0,0,0-2-2Z"
      />
    </svg>
  );
};
