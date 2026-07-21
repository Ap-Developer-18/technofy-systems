import React from "react";

export const OurApproach = () => (
  <svg viewBox="0 0 900 580" fill="none" className="w-full h-auto select-none">
    <defs>
      {/* Dynamic Core Gradient Mapping with Brand Primitives */}
      <linearGradient
        id="aCore"
        x1="0"
        y1="0"
        x2="160"
        y2="160"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#3b52ff"></stop>
        <stop offset=".5" stopColor="var(--color-brand-primary)"></stop>
        <stop offset="1" stopColor="#1025bf"></stop>
      </linearGradient>

      {/* Ambient Radial Mesh Layer */}
      <radialGradient id="aHalo" cx="50%" cy="50%" r="50%">
        <stop
          offset="0"
          stopColor="var(--color-brand-primary)"
          stopOpacity=".15"
        ></stop>
        <stop
          offset="1"
          stopColor="var(--color-brand-primary)"
          stopOpacity="0"
        ></stop>
      </radialGradient>

      {/* Flow Engine Connecting Lines Matrix */}
      <linearGradient id="aFlow" x1="0" y1="0" x2="1" y2="0">
        <stop
          offset="0"
          stopColor="var(--color-brand-primary)"
          stopOpacity=".15"
        ></stop>
        <stop
          offset=".5"
          stopColor="var(--color-brand-primary)"
          stopOpacity=".6"
        ></stop>
        <stop offset="1" stopColor="var(--color-brand-primary)"></stop>
      </linearGradient>

      {/* Pure Modular Card Background Backgrounds */}
      <linearGradient id="aCard" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--color-bg-base)"></stop>
        <stop offset="1" stopColor="#fbfdff"></stop>
      </linearGradient>

      {/* Main Bottom Solution Target Block */}
      <linearGradient id="aOut" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1025bf"></stop>
        <stop offset="1" stopColor="var(--color-brand-primary)"></stop>
      </linearGradient>

      {/* Pure Scannable Drop Shadows Layer */}
      <filter id="aSh" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="8"></feGaussianBlur>
        <feOffset dx="0" dy="8" result="o"></feOffset>
        <feComponentTransfer>
          <feFuncA type="linear" slope=".04"></feFuncA>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>

    {/* Ambient Glow Canvas */}
    <circle cx="450" cy="232" r="230" fill="url(#aHalo)"></circle>

    {/* NODE 1: Domain Experts */}
    <g filter="url(#aSh)">
      <rect
        x="34"
        y="116"
        width="264"
        height="110"
        rx="18"
        fill="url(#aCard)"
        stroke="var(--color-neutral-50)"
        strokeWidth="1.5"
      ></rect>
      <rect
        x="52"
        y="138"
        width="60"
        height="66"
        rx="14"
        fill="url(#aCore)"
        opacity=".1"
      ></rect>
      <g
        transform="translate(82 171)"
        stroke="var(--color-brand-primary)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle
          cx="-6"
          cy="-3"
          r="4"
          fill="var(--color-brand-primary)"
          fillOpacity=".2"
        ></circle>
        <circle
          cx="6"
          cy="-3"
          r="4"
          fill="var(--color-brand-primary)"
          fillOpacity=".2"
        ></circle>
        <circle
          cx="0"
          cy="-3"
          r="4"
          fill="var(--color-brand-primary)"
          fillOpacity=".4"
        ></circle>
        <path d="M-12 10c0-4 2-6 5-6s5 2 5 6M2 10c0-4 2-6 5-6s5 2 5 6"></path>
      </g>
      <text
        x="126"
        y="156"
        fontFamily="var(--font-poppins)"
        fontWeight="700"
        fontSize="15"
        fill="var(--color-neutral-950)"
      >
        Domain Experts
      </text>
      <text
        x="126"
        y="180"
        fontFamily="var(--font-figtree)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-neutral-600)"
      >
        Industry knowledge
      </text>
      <text
        x="126"
        y="198"
        fontFamily="var(--font-figtree)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-neutral-600)"
      >
        and practical insight
      </text>
    </g>

    {/* NODE 2: Technology Partners */}
    <g filter="url(#aSh)">
      <rect
        x="602"
        y="116"
        width="264"
        height="110"
        rx="18"
        fill="url(#aCard)"
        stroke="var(--color-neutral-50)"
        strokeWidth="1.5"
      ></rect>
      <rect
        x="620"
        y="138"
        width="60"
        height="66"
        rx="14"
        fill="url(#aCore)"
        opacity=".1"
      ></rect>
      <g
        transform="translate(650 171)"
        stroke="var(--color-brand-primary)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M-10-2l4-4a4 4 0 0 1 6 0l2 2 2-2a4 4 0 0 1 6 0l-10 10-2-2"
          fill="var(--color-brand-primary)"
          fillOpacity=".2"
        ></path>
        <path d="M-10 3l4 4 8-8"></path>
      </g>
      <text
        x="694"
        y="156"
        fontFamily="var(--font-poppins)"
        fontWeight="700"
        fontSize="15"
        fill="var(--color-neutral-950)"
      >
        Technology Partners
      </text>
      <text
        x="694"
        y="180"
        fontFamily="var(--font-figtree)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-neutral-600)"
      >
        Specialised technologies
      </text>
      <text
        x="694"
        y="198"
        fontFamily="var(--font-figtree)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-neutral-600)"
      >
        and platforms
      </text>
    </g>

    {/* NODE 3: Engineering Team */}
    <g filter="url(#aSh)">
      <rect
        x="34"
        y="248"
        width="264"
        height="110"
        rx="18"
        fill="url(#aCard)"
        stroke="var(--color-neutral-50)"
        strokeWidth="1.5"
      ></rect>
      <rect
        x="52"
        y="270"
        width="60"
        height="66"
        rx="14"
        fill="url(#aCore)"
        opacity=".1"
      ></rect>
      <g
        transform="translate(82 303)"
        stroke="var(--color-brand-primary)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m-7-4-7 4 7 4M7-4l7 4-7 4M4-7l-8 14"></path>
      </g>
      <text
        x="126"
        y="288"
        fontFamily="var(--font-poppins)"
        fontWeight="700"
        fontSize="15"
        fill="var(--color-neutral-950)"
      >
        Engineering Team
      </text>
      <text
        x="126"
        y="312"
        fontFamily="var(--font-figtree)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-neutral-600)"
      >
        Full-stack development
      </text>
      <text
        x="126"
        y="330"
        fontFamily="var(--font-figtree)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-neutral-600)"
      >
        and architecture
      </text>
    </g>

    {/* NODE 4: Academia & Research */}
    <g filter="url(#aSh)">
      <rect
        x="602"
        y="248"
        width="264"
        height="110"
        rx="18"
        fill="url(#aCard)"
        stroke="var(--color-neutral-50)"
        strokeWidth="1.5"
      ></rect>
      <rect
        x="620"
        y="270"
        width="60"
        height="66"
        rx="14"
        fill="url(#aCore)"
        opacity=".1"
      ></rect>
      <g
        transform="translate(650 303)"
        stroke="var(--color-brand-primary)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M-14-2L0-8l14 6-14 6z"
          fill="var(--color-brand-primary)"
          fillOpacity=".2"
        ></path>
        <path d="M-6 3v6c0 1.4 3 3.4 6 3.4s6-2 6-3.4V3"></path>
      </g>
      <text
        x="694"
        y="288"
        fontFamily="var(--font-poppins)"
        fontWeight="700"
        fontSize="15"
        fill="var(--color-neutral-950)"
      >
        Academia &amp; Research
      </text>
      <text
        x="694"
        y="312"
        fontFamily="var(--font-figtree)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-neutral-600)"
      >
        Innovation, research
      </text>
      <text
        x="694"
        y="330"
        fontFamily="var(--font-figtree)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-neutral-600)"
      >
        and emerging tech
      </text>
    </g>

    {/* Vector Signal Transmission Lines */}
    <g fill="none" stroke="url(#aFlow)" strokeWidth="2">
      <path id="ap1" d="M298 171 Q 380 200 450 232"></path>
      <path id="ap2" d="M602 171 Q 520 200 450 232"></path>
      <path id="ap3" d="M298 303 Q 380 268 450 232"></path>
      <path id="ap4" d="M602 303 Q 520 268 450 232"></path>
    </g>

    {/* Dynamic Signal Pulses Tracker */}
    <g fill="var(--color-brand-primary)">
      <circle r="3.5">
        <animateMotion dur="3.5s" repeatCount="indefinite">
          <mpath href="#ap1"></mpath>
        </animateMotion>
      </circle>
      <circle r="3.5">
        <animateMotion dur="3.5s" begin=".9s" repeatCount="indefinite">
          <mpath href="#ap2"></mpath>
        </animateMotion>
      </circle>
      <circle r="3.5">
        <animateMotion dur="3.5s" begin="1.8s" repeatCount="indefinite">
          <mpath href="#ap3"></mpath>
        </animateMotion>
      </circle>
      <circle r="3.5">
        <animateMotion dur="3.5s" begin="2.7s" repeatCount="indefinite">
          <mpath href="#ap4"></mpath>
        </animateMotion>
      </circle>
    </g>

    {/* Central Hub Processing Engine */}
    <circle
      cx="450"
      cy="232"
      r="100"
      fill="var(--color-brand-primary)"
      opacity=".06"
    ></circle>
    <circle cx="450" cy="232" r="72" fill="var(--color-bg-base)"></circle>
    <clipPath id="appCoreClip">
      <circle cx="450" cy="232" r="68"></circle>
    </clipPath>

    {/* Central Brand Core Graphic */}
    <image
      href="/logo.svg"
      x="395"
      y="197"
      width="110"
      height="70"
      clipPath="url(#appCoreClip)"
      preserveAspectRatio="xMidYMid slice"
    ></image>

    <circle
      cx="450"
      cy="232"
      r="68"
      fill="none"
      stroke="var(--color-neutral-50)"
      strokeWidth="2"
    ></circle>

    {/* Downward Output Pipe Layer */}
    <path id="aDown" d="M450 310 L 450 400" fill="none"></path>
    <g
      stroke="var(--color-brand-primary)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    >
      <line x1="450" y1="310" x2="450" y2="398" strokeDasharray="4 4"></line>
    </g>
    <path
      d="M444 392 L 450 400 L 456 392"
      stroke="var(--color-brand-primary)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    ></path>
    <circle r="4" fill="var(--color-brand-primary)">
      <animateMotion dur="2.6s" repeatCount="indefinite">
        <mpath href="#aDown"></mpath>
      </animateMotion>
    </circle>

    {/* TARGET BLOCK: Products & Solutions */}
    <g filter="url(#aSh)">
      <rect
        x="290"
        y="420"
        width="320"
        height="116"
        rx="22"
        fill="url(#aOut)"
      ></rect>
      <rect
        x="290"
        y="420"
        width="320"
        height="116"
        rx="22"
        fill="none"
        stroke="rgba(255,255,255,.2)"
        strokeWidth="1"
      ></rect>
      <text
        x="450"
        y="468"
        textAnchor="middle"
        fontFamily="var(--font-poppins)"
        fontWeight="700"
        fontSize="20"
        fill="#fff"
        letterSpacing=".5"
      >
        Products &amp; Solutions
      </text>
      <text
        x="450"
        y="494"
        textAnchor="middle"
        fontFamily="var(--font-figtree)"
        fontSize="13.5"
        fontWeight="500"
        fill="rgba(255,255,255,.85)"
      >
        Tailored to your needs.
      </text>
      <text
        x="450"
        y="514"
        textAnchor="middle"
        fontFamily="var(--font-figtree)"
        fontSize="13.5"
        fontWeight="500"
        fill="rgba(255,255,255,.85)"
      >
        Built for impact.
      </text>

      <path
        d="M580 438 l1.6 3 3 1.6 -3 1.6 -1.6 3 -1.6 -3 -3 -1.6 3 -1.6z"
        fill="#fff"
        opacity=".7"
      ></path>
    </g>
  </svg>
);

export const ValueCoCreation = () => (
  <svg
    viewBox="0 0 600 420"
    fill="none"
    className="w-full h-auto select-none overflow-visible"
  >
    <defs>
      {/* Premium Dashboard Module Canvas Gradient */}
      <linearGradient id="wkCard" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--color-bg-base)"></stop>
        <stop offset="1" stopColor="#f6f9ff"></stop>
      </linearGradient>

      {/* Dynamic Brand Highlight Arrays */}
      <linearGradient id="wkAccent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="var(--color-brand-primary)"></stop>
        <stop offset="1" stopColor="#5fd6f5"></stop>
      </linearGradient>

      {/* Analytical Area Chart Fill Matrix */}
      <linearGradient id="wkArea" x1="0" y1="0" x2="0" y2="1">
        <stop
          offset="0"
          stopColor="var(--color-brand-primary)"
          stopOpacity=".42"
        ></stop>
        <stop
          offset="1"
          stopColor="var(--color-brand-primary)"
          stopOpacity="0"
        ></stop>
      </linearGradient>

      {/* Dynamic Stream Glow Feeds */}
      <linearGradient id="wkYou" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stopColor="#5fd6f5" stopOpacity="0"></stop>
        <stop offset="1" stopColor="#5fd6f5"></stop>
      </linearGradient>

      <linearGradient id="wkUs" x1="0" y1="1" x2="0" y2="0">
        <stop
          offset="0"
          stopColor="var(--color-brand-primary)"
          stopOpacity="0"
        ></stop>
        <stop offset="1" stopColor="var(--color-brand-primary)"></stop>
      </linearGradient>

      {/* Expanded Filter Bounds to Prevent Shadow Clipping */}
      <filter id="wkSh" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="10"></feGaussianBlur>
        <feOffset dx="0" dy="8" result="o"></feOffset>
        <feComponentTransfer>
          <feFuncA type="linear" slope=".05"></feFuncA>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>

    {/* Shifted Center Main Group to Provide Perfect Safety Margins */}
    <g transform="translate(20, 20)">
      {/* Atmosphere Background Lights */}
      <circle cx="90" cy="80" r="120" fill="rgba(95,214,245,.08)"></circle>
      <circle
        cx="480"
        cy="320"
        r="130"
        fill="var(--color-brand-primary)"
        opacity=".05"
      ></circle>

      {/* Connecting Flow Stream Nodes */}
      <path id="wkS1" d="M156 350 C 190 296 224 286 256 252" fill="none"></path>
      <path id="wkS2" d="M404 350 C 372 296 338 286 306 252" fill="none"></path>

      <path
        d="M156 350 C 190 296 224 286 256 252"
        stroke="url(#wkYou)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".75"
      ></path>
      <path
        d="M404 350 C 372 296 338 286 306 252"
        stroke="url(#wkUs)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".75"
      ></path>

      {/* Active Signal Core Pulse Loop */}
      <circle r="3.6" fill="#5fd6f5">
        <animateMotion dur="3.6s" repeatCount="indefinite">
          <mpath href="#wkS1"></mpath>
        </animateMotion>
      </circle>
      <circle r="3.6" fill="var(--color-brand-primary)">
        <animateMotion dur="3.6s" begin="1.3s" repeatCount="indefinite">
          <mpath href="#wkS2"></mpath>
        </animateMotion>
      </circle>

      {/* Input Source Matrix Badges */}
      <g filter="url(#wkSh)">
        <rect
          x="120"
          y="332"
          width="78"
          height="34"
          rx="17"
          fill="url(#wkAccent)"
        ></rect>
      </g>
      <text
        x="159"
        y="354"
        textAnchor="middle"
        fontFamily="var(--font-poppins)"
        fontWeight="700"
        fontSize="13"
        fill="#fff"
        letterSpacing="0.5"
      >
        YOU
      </text>

      <g filter="url(#wkSh)">
        <rect
          x="332"
          y="332"
          width="160"
          height="34"
          rx="17"
          fill="#1025bf"
        ></rect>
      </g>
      <text
        x="412"
        y="354"
        textAnchor="middle"
        fontFamily="var(--font-poppins)"
        fontWeight="700"
        fontSize="12"
        fill="#fff"
        letterSpacing="0.5"
      >
        TECHNOFY SYSTEMS
      </text>

      {/* Perspective Card Structural Backdrops */}
      <rect
        x="158"
        y="62"
        width="262"
        height="186"
        rx="20"
        fill="var(--color-brand-primary)"
        opacity=".04"
        transform="rotate(-3 289 155)"
      ></rect>
      <rect
        x="166"
        y="56"
        width="252"
        height="186"
        rx="20"
        fill="var(--color-brand-primary)"
        opacity=".07"
        transform="rotate(2 292 149)"
      ></rect>

      {/* Main Active Application Card Block */}
      <g filter="url(#wkSh)">
        <rect
          x="156"
          y="58"
          width="252"
          height="188"
          rx="20"
          fill="url(#wkCard)"
          stroke="var(--color-neutral-50)"
          strokeWidth="1.5"
        ></rect>
        <circle cx="182" cy="88" r="11" fill="url(#wkAccent)"></circle>
        <path
          d="M177 88l3.4 3 6.4-6.4"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        ></path>

        <text
          x="202"
          y="93"
          fontFamily="var(--font-poppins)"
          fontWeight="700"
          fontSize="13"
          fill="var(--color-neutral-950)"
        >
          Your solution
        </text>

        {/* Performance Status Engine Variant */}
        <rect
          x="344"
          y="80"
          width="50"
          height="18"
          rx="9"
          fill="#22c55e"
          opacity=".12"
        ></rect>
        <circle cx="357" cy="89" r="3" fill="#22c55e"></circle>
        <text
          x="377"
          y="93"
          textAnchor="middle"
          fontFamily="var(--font-poppins)"
          fontWeight="700"
          fontSize="9"
          fill="#16924a"
        >
          LIVE
        </text>

        {/* Scaled Value Highlight Widget */}
        <rect
          x="176"
          y="112"
          width="66"
          height="34"
          rx="9"
          fill="var(--color-brand-primary)"
          opacity=".06"
        ></rect>
        <text
          x="188"
          y="126"
          fontFamily="var(--font-figtree)"
          fontWeight="600"
          fontSize="8.5"
          fill="var(--color-neutral-600)"
          letterSpacing=".5"
        >
          IMPACT
        </text>
        <text
          x="188"
          y="140"
          fontFamily="var(--font-poppins)"
          fontWeight="700"
          fontSize="13"
          fill="var(--color-brand-primary)"
        >
          +42%
        </text>

        {/* Micro Analytics Coordinate Chart Pipeline */}
        <path
          d="M176 210 L 206 192 L 234 198 L 262 172 L 292 180 L 320 152 L 350 158 L 388 130 L 388 222 L 176 222 Z"
          fill="url(#wkArea)"
        ></path>
        <path
          d="M176 210 L 206 192 L 234 198 L 262 172 L 292 180 L 320 152 L 350 158 L 388 130"
          stroke="url(#wkAccent)"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <circle
          cx="388"
          cy="130"
          r="5"
          fill="#fff"
          stroke="url(#wkAccent)"
          strokeWidth="2.6"
        ></circle>
      </g>

      {/* Floating Component Status Badge */}
      <g filter="url(#wkSh)">
        <rect
          x="384"
          y="36"
          width="126"
          height="58"
          rx="14"
          fill="var(--color-bg-base)"
          stroke="var(--color-neutral-50)"
          strokeWidth="1.5"
        ></rect>
        <rect
          x="400"
          y="52"
          width="26"
          height="26"
          rx="7"
          fill="url(#wkAccent)"
        ></rect>
        <path
          d="M407 65l3 3 6-6"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        ></path>
        <rect
          x="436"
          y="54"
          width="60"
          height="6"
          rx="3"
          fill="var(--color-brand-primary)"
          opacity=".4"
        ></rect>
        <rect
          x="436"
          y="68"
          width="42"
          height="6"
          rx="3"
          fill="var(--color-brand-primary)"
          opacity=".15"
        ></rect>
      </g>

      {/* Floating Dynamic Value Node */}
      <g filter="url(#wkSh)">
        <rect
          x="36"
          y="120"
          width="102"
          height="56"
          rx="14"
          fill="var(--color-bg-base)"
          stroke="var(--color-neutral-50)"
          strokeWidth="1.5"
        ></rect>
        <path
          d="M60 138 l1.9 4.2 4.2 1.9 -4.2 1.9 -1.9 4.2 -1.9 -4.2 -4.2 -1.9 4.2 -1.9z"
          fill="url(#wkAccent)"
        ></path>
        <text
          x="82"
          y="144"
          fontFamily="var(--font-poppins)"
          fontWeight="700"
          fontSize="11.5"
          fill="var(--color-neutral-950)"
        >
          Value
        </text>
        <text
          x="82"
          y="158"
          fontFamily="var(--font-figtree)"
          fontWeight="500"
          fontSize="10"
          fill="var(--color-neutral-600)"
        >
          co-created
        </text>
      </g>
    </g>
  </svg>
);
