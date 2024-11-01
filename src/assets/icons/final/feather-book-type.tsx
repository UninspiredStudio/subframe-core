import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherBookType = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    <path d="M16 8V6H8v2" />
    <path d="M12 6v7" />
    <path d="M10 13h4" />
  </svg>
)
export default SvgFeatherBookType
