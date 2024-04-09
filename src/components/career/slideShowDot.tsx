type Props = {
  black: boolean;
};

export default function SlideShowDot({ black }: Props) {
  return (
    <svg
      height="10"
      width="10"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle r="4" cx="5" cy="5" fill={black ? "black" : "#CCCCCC"} />
    </svg>
  );
}
