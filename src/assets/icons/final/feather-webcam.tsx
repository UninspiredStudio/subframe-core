import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherWebcam = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx={12} cy={10} r={8} />
    <circle cx={12} cy={10} r={3} />
    <path d="M7 22h10" />
    <path d="M12 22v-4" />
  </svg>
)
export default SvgFeatherWebcam
