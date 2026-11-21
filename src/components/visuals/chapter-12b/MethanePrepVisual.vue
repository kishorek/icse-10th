<template>
  <svg viewBox="0 0 720 390" role="img" aria-labelledby="methane-prep-title methane-prep-desc">
    <title id="methane-prep-title">Laboratory preparation of methane and its tetrahedral molecule</title>
    <desc id="methane-prep-desc">
      Sodium ethanoate and soda lime are heated in a test tube. Methane is delivered through a
      tube and collected over water. An inset shows methane as a tetrahedral molecule.
    </desc>

    <rect x="70" y="70" width="80" height="190" rx="36" fill="var(--paper-2)" stroke="var(--teal)" stroke-width="3" />
    <rect x="78" y="120" width="64" height="130" rx="28" fill="var(--teal-light)" />
    <text x="110" y="150" text-anchor="middle" class="mixture">mixture</text>
    <text x="110" y="168" text-anchor="middle" class="small">ethanoate</text>
    <text x="110" y="184" text-anchor="middle" class="small">+ soda lime</text>

    <g class="flame">
      <path d="M110 300 C96 282 100 270 110 258 C120 270 124 282 110 300 Z" />
      <path d="M110 292 C103 282 106 276 110 270 C114 276 117 282 110 292 Z" fill="var(--amber-light)" />
    </g>
    <text x="110" y="324" text-anchor="middle" class="small">heat</text>

    <path
      d="M150 82 C210 82 210 82 210 130 L210 220 C210 255 245 268 285 268 L430 268"
      fill="none"
      stroke="var(--teal)"
      stroke-width="5"
      stroke-linecap="round"
    />
    <text x="235" y="108" text-anchor="middle" class="small">delivery tube</text>

    <rect x="410" y="286" width="250" height="62" rx="8" fill="#dcecf3" stroke="#3f7891" stroke-width="3" />
    <text x="535" y="365" text-anchor="middle" class="small">trough of water</text>

    <g class="bubbles">
      <circle cx="455" cy="270" r="5" />
      <circle cx="470" cy="258" r="4" />
      <circle cx="485" cy="270" r="5" />
    </g>

    <rect x="500" y="165" width="86" height="120" rx="8" fill="var(--paper-2)" stroke="var(--teal)" stroke-width="3" />
    <rect x="506" y="200" width="74" height="80" fill="#e6f0ec" />
    <text x="543" y="188" text-anchor="middle" class="small">methane</text>
    <text x="543" y="238" text-anchor="middle" class="small">collected</text>
    <text x="543" y="254" text-anchor="middle" class="small">over water</text>

    <g transform="translate(590 70)">
      <text x="0" y="-8" text-anchor="middle" class="heading">CH₄</text>
      <line x1="0" y1="10" x2="0" y2="58" stroke="var(--teal)" stroke-width="2" />
      <line x1="0" y1="10" x2="-42" y2="38" stroke="var(--teal)" stroke-width="2" />
      <line x1="0" y1="10" x2="42" y2="38" stroke="var(--teal)" stroke-width="2" />
      <line x1="0" y1="10" x2="0" y2="-16" stroke="var(--teal)" stroke-width="2" />
      <circle cx="0" cy="10" r="12" fill="var(--teal-light)" stroke="var(--teal)" stroke-width="2" />
      <circle cx="0" cy="62" r="8" fill="var(--paper-2)" stroke="var(--teal)" stroke-width="2" />
      <circle cx="-46" cy="40" r="8" fill="var(--paper-2)" stroke="var(--teal)" stroke-width="2" />
      <circle cx="46" cy="40" r="8" fill="var(--paper-2)" stroke="var(--teal)" stroke-width="2" />
      <circle cx="0" cy="-20" r="8" fill="var(--paper-2)" stroke="var(--teal)" stroke-width="2" />
      <text x="0" y="84" text-anchor="middle" class="small">tetrahedral</text>
    </g>

    <text x="360" y="34" text-anchor="middle" class="equation">
      CH₃COONa + NaOH → Na₂CO₃ + CH₄↑
    </text>
    <text x="360" y="54" text-anchor="middle" class="small">CaO, about 300°C</text>
  </svg>
</template>

<style scoped>
.heading {
  font-family: system-ui, sans-serif;
  font-size: 18px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.equation {
  font-family: ui-monospace, monospace;
  font-size: 16px;
  font-weight: 700;
  fill: var(--ink);
}
.mixture {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.small {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  fill: var(--ink-soft);
}
.flame path:first-child {
  fill: var(--amber);
}
.bubbles circle {
  fill: #7fb2c7;
  opacity: 0.8;
}
</style>
