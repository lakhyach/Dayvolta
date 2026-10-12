/*
 * Dayvolta brand lockup: sunrise mark (half sun over horizon with rays)
 * + wordmark. The sunrise reads as "Day" and the lime accent as energy.
 */

const Mark = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    {/* horizon */}
    <path
      d="M10 44H54"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* rising half-sun */}
    <path
      d="M20 44a12 12 0 0 1 24 0"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* rays */}
    <path d="M32 12v7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M14 21l5 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M50 21l-5 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const Logo = ({ size = 24, text = true, sup = false }) => (
  <span className="flex items-center">
    <Mark size={size} />
    {text && (
      <span className="ml-2 text-lg uppercase tracking-tighter">
        Dayvolta
        {sup && <sup className="ml-1 text-xs">®</sup>}
      </span>
    )}
  </span>
);

export { Mark };
export default Logo;
