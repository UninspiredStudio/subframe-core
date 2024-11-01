import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherListStart = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 12H3" />
    <path d="M16 18H3" />
    <path d="M10 6H3" />
    <path d="M21 18V8a2 2 0 0 0-2-2h-5" />
    <path d="m16 8-2-2 2-2" />
  </svg>
)
export default SvgFeatherListStart
