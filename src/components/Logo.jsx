export function Logo(props) {
  return (
    <span class="whitepace-nowrap flex items-center gap-2" {...props}>
      <svg aria-hidden="true" viewBox="0 0 40 40" className="h-10 w-auto">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
          fill="#2563EB"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 20 20;-90 20 20"
            dur="2s"
            repeatCount="1"
            fill="freeze"
            begin="1s"
          />
        </path>
      </svg>
      <span class="text-sm">OyDocs</span>
    </span>
  )
}
