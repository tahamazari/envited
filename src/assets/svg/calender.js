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
        d="M37.666 26.904H19.843a.75.75 0 0 1 0-1.5h17.823a.75.75 0 0 1 0 1.5M33.201 30.81a.754.754 0 0 1-.754-.75c0-.414.331-.75.745-.75h.01a.75.75 0 0 1 0 1.5M28.764 30.81a.754.754 0 0 1-.754-.75c0-.414.33-.75.745-.75h.009a.75.75 0 0 1 0 1.5M24.317 30.81a.755.755 0 0 1-.755-.75c0-.414.332-.75.746-.75h.009a.75.75 0 0 1 0 1.5M33.201 34.696a.754.754 0 0 1-.754-.75c0-.414.331-.75.745-.75h.01a.75.75 0 0 1 0 1.5M28.764 34.696a.754.754 0 0 1-.754-.75c0-.414.33-.75.745-.75h.009a.75.75 0 0 1 0 1.5M24.317 34.696a.755.755 0 0 1-.755-.75c0-.414.332-.75.746-.75h.009a.75.75 0 0 1 0 1.5M32.794 22.791a.75.75 0 0 1-.75-.75V18.75a.75.75 0 0 1 1.5 0v3.291a.75.75 0 0 1-.75.75M24.715 22.791a.75.75 0 0 1-.75-.75V18.75a.75.75 0 0 1 1.5 0v3.291a.75.75 0 0 1-.75.75"
        fill="#8456EC"
      />
      <mask
        id="b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={19}
        y={19}
        width={20}
        height={21}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 19.58h19.5V39.5H19V19.58Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.521 21.08c-2.593 0-4.021 1.382-4.021 3.893v9.05c0 2.565 1.428 3.977 4.021 3.977h8.458C35.572 38 37 36.614 37 34.098v-9.125c.004-1.235-.328-2.195-.987-2.855-.678-.68-1.723-1.039-3.025-1.039h-8.467Zm8.458 18.42h-8.458C21.116 39.5 19 37.401 19 34.022v-9.049c0-3.328 2.116-5.394 5.521-5.394h8.467c1.709 0 3.122.512 4.087 1.48.937.94 1.43 2.293 1.425 3.916v9.123c0 3.332-2.116 5.402-5.521 5.402Z"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_14_887" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_14_887"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default SvgComponent
