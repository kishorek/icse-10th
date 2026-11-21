<template>
  <svg viewBox="0 0 720 390" role="img" aria-labelledby="reaction-map-title reaction-map-desc">
    <title id="reaction-map-title">Combustion and chlorination reaction map for methane</title>
    <desc id="reaction-map-desc">
      Methane burns to carbon dioxide and water with enough oxygen, to carbon monoxide with less
      oxygen, and to soot with very little oxygen. With chlorine and UV light it substitutes one
      hydrogen at a time, producing chloromethane, dichloromethane, trichloromethane and
      tetrachloromethane.
    </desc>

    <rect x="280" y="16" width="160" height="44" rx="8" class="methane" />
    <text x="360" y="45" text-anchor="middle" class="methane-label">CH₄</text>

    <g class="connector">
      <path d="M280 38 L180 86" />
      <path d="M440 38 L540 86" />
      <path d="M180 108 L180 126" />
      <path d="M540 108 L540 126" />
      <path d="M540 172 L540 184" />
      <path d="M540 227 L540 239" />
      <path d="M540 282 L540 294" />
    </g>
    <text x="180" y="102" text-anchor="middle" class="branch-label">+ O₂</text>
    <text x="540" y="102" text-anchor="middle" class="branch-label">+ Cl₂ / UV</text>

    <g>
      <rect x="20" y="126" width="320" height="46" rx="8" class="result result--complete" />
      <text x="180" y="154" text-anchor="middle" class="result-text">enough O₂ → CO₂ + H₂O</text>
      <rect x="20" y="184" width="320" height="46" rx="8" class="result result--incomplete" />
      <text x="180" y="212" text-anchor="middle" class="result-text">less O₂ → CO + H₂O</text>
      <rect x="20" y="242" width="320" height="46" rx="8" class="result result--soot" />
      <text x="180" y="270" text-anchor="middle" class="result-text">very little O₂ → C + H₂O</text>
    </g>

    <g>
      <rect x="455" y="126" width="250" height="46" rx="8" class="result" />
      <text x="580" y="154" text-anchor="middle" class="result-text">CH₃Cl + HCl</text>
      <rect x="455" y="184" width="250" height="46" rx="8" class="result" />
      <text x="580" y="212" text-anchor="middle" class="result-text">CH₂Cl₂ + HCl</text>
      <rect x="455" y="242" width="250" height="46" rx="8" class="result" />
      <text x="580" y="270" text-anchor="middle" class="result-text">CHCl₃ + HCl</text>
      <rect x="455" y="300" width="250" height="46" rx="8" class="result" />
      <text x="580" y="328" text-anchor="middle" class="result-text">CCl₄ + HCl</text>
    </g>

    <text x="180" y="322" text-anchor="middle" class="note">One product, three oxygen levels</text>
    <text x="580" y="368" text-anchor="middle" class="note">One hydrogen replaced per step</text>
  </svg>
</template>

<style scoped>
.methane {
  fill: var(--teal);
  stroke: var(--teal-dark);
  stroke-width: 2;
}
.methane-label {
  font-family: system-ui, sans-serif;
  font-size: 22px;
  font-weight: 700;
  fill: var(--paper-2);
}
.connector path {
  fill: none;
  stroke: var(--teal);
  stroke-width: 2.5;
}
.branch-label {
  font-family: system-ui, sans-serif;
  font-size: 14px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.result {
  fill: var(--paper-2);
  stroke: var(--teal);
  stroke-width: 2;
}
.result--complete {
  fill: var(--ok-bg);
  stroke: var(--ok);
}
.result--incomplete {
  fill: var(--amber-light);
  stroke: var(--amber);
}
.result--soot {
  fill: #eee7df;
  stroke: #6d6156;
}
.result-text {
  font-family: system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  fill: var(--ink);
}
.note {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  fill: var(--ink-soft);
}
</style>
