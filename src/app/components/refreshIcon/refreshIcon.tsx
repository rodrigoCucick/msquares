interface RefreshIconInterface {
  size: number;
}

export default function RefreshIcon({size}: RefreshIconInterface): JSX.Element {
  return (
    <svg
      height={size}
      width={size}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 28.00 28.00"
      xmlSpace="preserve"
      fill="#ffffff">
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g>
          <g>
            <g>
              <path d="M22,16c0,4.41-3.586,8-8,8s-8-3.59-8-8s3.586-8,8-8l2.359,0.027l-1.164,1.164l2.828,2.828 L24.035,6l-6.012-6l-2.828,2.828L16.375,4H14C7.375,4,2,9.371,2,16s5.375,12,12,12s12-5.371,12-12H22z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
