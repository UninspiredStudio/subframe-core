import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherContrast = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <path d="M12 18a6 6 0 0 0 0-12v12z" />
  </svg>
)
export default SvgFeatherContrast
