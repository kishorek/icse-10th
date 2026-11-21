<template>
  <svg viewBox="0 0 720 330" role="img" aria-labelledby="fg-map-title fg-map-desc">
    <title id="fg-map-title">Functional groups arranged around a carbon skeleton</title>
    <desc id="fg-map-desc">
      A central carbon skeleton connects to nine functional groups: halide, alcohol, aldehyde,
      ketone, carboxylic acid, ether, ester, alkene and alkyne.
    </desc>

    <g class="spokes">
      <path d="M280 145 L170 55" />
      <path d="M280 165 L170 125" />
      <path d="M280 195 L170 195" />
      <path d="M280 215 L170 265" />
      <path d="M440 145 L550 55" />
      <path d="M440 165 L550 125" />
      <path d="M440 195 L550 195" />
      <path d="M440 215 L550 265" />
      <path d="M360 210 L360 285" />
    </g>

    <rect x="280" y="135" width="160" height="80" rx="14" class="center" />
    <text x="360" y="168" text-anchor="middle" class="center-label">Carbon</text>
    <text x="360" y="188" text-anchor="middle" class="center-label">skeleton</text>
    <text x="360" y="205" text-anchor="middle" class="center-sub">R</text>

    <g>
      <rect x="20" y="28" width="150" height="38" rx="8" class="pill" />
      <text x="95" y="52" text-anchor="middle" class="pill-label">–X  haloalkane</text>
      <rect x="20" y="98" width="150" height="38" rx="8" class="pill" />
      <text x="95" y="122" text-anchor="middle" class="pill-label">–OH  alcohol</text>
      <rect x="20" y="168" width="150" height="38" rx="8" class="pill" />
      <text x="95" y="192" text-anchor="middle" class="pill-label">–CHO  aldehyde</text>
      <rect x="20" y="238" width="150" height="38" rx="8" class="pill" />
      <text x="95" y="262" text-anchor="middle" class="pill-label">&gt;C=O  ketone</text>
    </g>

    <g>
      <rect x="550" y="28" width="150" height="38" rx="8" class="pill" />
      <text x="625" y="52" text-anchor="middle" class="pill-label">–COOH  acid</text>
      <rect x="550" y="98" width="150" height="38" rx="8" class="pill" />
      <text x="625" y="122" text-anchor="middle" class="pill-label">–O–  ether</text>
      <rect x="550" y="168" width="150" height="38" rx="8" class="pill" />
      <text x="625" y="192" text-anchor="middle" class="pill-label">–COO–  ester</text>
      <rect x="550" y="238" width="150" height="38" rx="8" class="pill" />
      <text x="625" y="262" text-anchor="middle" class="pill-label">C=C  alkene</text>
    </g>

    <rect x="285" y="285" width="150" height="34" rx="8" class="pill pill--bond" />
    <text x="360" y="307" text-anchor="middle" class="pill-label">C≡C  alkyne</text>
  </svg>
</template>

<style scoped>
.spokes path {
  fill: none;
  stroke: var(--line);
  stroke-width: 2;
}
.center {
  fill: var(--teal);
  stroke: var(--teal-dark);
  stroke-width: 2;
}
.center-label {
  font-family: system-ui, sans-serif;
  font-size: 17px;
  font-weight: 700;
  fill: var(--paper-2);
}
.center-sub {
  font-family: system-ui, sans-serif;
  font-size: 14px;
  fill: var(--paper-2);
}
.pill {
  fill: var(--paper-2);
  stroke: var(--teal);
  stroke-width: 2;
}
.pill--bond {
  fill: var(--amber-light);
  stroke: var(--amber);
}
.pill-label {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  font-weight: 600;
  fill: var(--ink);
}
</style>
