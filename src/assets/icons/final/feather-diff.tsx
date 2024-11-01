import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherDiff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 3v14" />
    <path d="M5 10h14" />
    <path d="M5 21h14" />
  </svg>
)
export default SvgFeatherDiff
