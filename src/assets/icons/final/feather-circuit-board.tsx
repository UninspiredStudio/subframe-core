import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherCircuitBoard = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <path d="M11 9h4a2 2 0 0 0 2-2V3" />
    <circle cx={9} cy={9} r={2} />
    <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
    <circle cx={15} cy={15} r={2} />
  </svg>
)
export default SvgFeatherCircuitBoard
