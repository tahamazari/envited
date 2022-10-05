import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    fill="none"
  >
    <g filter="url(#a)">
      <rect
        x={5}
        y={5}
        width={48}
        height={48}
        rx={10}
        fill="#fff"
        shapeRendering="crispEdges"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.25 25.5A1.751 1.751 0 1 0 31 27.251c0-.966-.785-1.751-1.75-1.751Zm0 5A3.253 3.253 0 0 1 26 27.251 3.254 3.254 0 0 1 29.25 24a3.254 3.254 0 0 1 3.25 3.251 3.253 3.253 0 0 1-3.25 3.249Z"
        fill="#8456EC"
      />
      <mask
        id="b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={21}
        y={19}
        width={17}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 19h16.5v19.5H21V19Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.25 20.5c-3.723 0-6.75 3.057-6.75 6.813 0 4.779 5.623 9.435 6.75 9.683 1.125-.249 6.75-4.905 6.75-9.683 0-3.756-3.029-6.813-6.75-6.813Zm0 18c-1.794 0-8.25-5.552-8.25-11.187C21 22.729 24.7 19 29.25 19c4.548 0 8.25 3.729 8.25 8.313 0 5.635-6.456 11.187-8.25 11.187Z"
          fill="#8456EC"
        />
      </g>
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={58}
        height={58}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_14_878" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_14_878"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default SvgComponent
