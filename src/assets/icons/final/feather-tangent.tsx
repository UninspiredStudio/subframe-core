import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherTangent = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={17} cy={4} r={2} />
    <path d="M15.59 5.41 5.41 15.59" />
    <circle cx={4} cy={17} r={2} />
    <path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
  </svg>
)
export default SvgFeatherTangent
