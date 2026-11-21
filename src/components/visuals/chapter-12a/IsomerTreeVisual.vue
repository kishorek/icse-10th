<template>
  <svg viewBox="0 0 720 380" role="img" aria-labelledby="isomer-tree-title isomer-tree-desc">
    <title id="isomer-tree-title">Three routes to structural isomerism</title>
    <desc id="isomer-tree-desc">
      The same molecular formula can give chain isomers with different carbon skeletons, position
      isomers with a group in a different place, or functional isomers with a different functional
      group.
    </desc>

    <rect x="260" y="12" width="200" height="42" rx="8" class="root" />
    <text x="360" y="39" text-anchor="middle" class="root-label">Same molecular formula</text>

    <g class="connector">
      <path d="M320 54 L135 92" />
      <path d="M360 54 L360 92" />
      <path d="M400 54 L585 92" />
    </g>

    <g>
      <rect x="20" y="92" width="220" height="40" rx="8" class="head head--chain" />
      <text x="130" y="117" text-anchor="middle" class="head-label">Chain isomers</text>
      <text x="130" y="154" text-anchor="middle" class="formula">C₄H₁₀</text>
      <rect x="20" y="170" width="220" height="58" rx="8" class="example" />
      <text x="130" y="192" text-anchor="middle" class="example-name">Butane</text>
      <text x="130" y="212" text-anchor="middle" class="example-text">straight chain</text>
      <rect x="20" y="240" width="220" height="58" rx="8" class="example" />
      <text x="130" y="262" text-anchor="middle" class="example-name">2-Methylpropane</text>
      <text x="130" y="282" text-anchor="middle" class="example-text">branched chain</text>
    </g>

    <g>
      <rect x="250" y="92" width="220" height="40" rx="8" class="head head--position" />
      <text x="360" y="117" text-anchor="middle" class="head-label">Position isomers</text>
      <text x="360" y="154" text-anchor="middle" class="formula">C₄H₈</text>
      <rect x="250" y="170" width="220" height="58" rx="8" class="example" />
      <text x="360" y="192" text-anchor="middle" class="example-name">But-1-ene</text>
      <text x="360" y="212" text-anchor="middle" class="example-text">double bond at carbon 1</text>
      <rect x="250" y="240" width="220" height="58" rx="8" class="example" />
      <text x="360" y="262" text-anchor="middle" class="example-name">But-2-ene</text>
      <text x="360" y="282" text-anchor="middle" class="example-text">double bond at carbon 2</text>
    </g>

    <g>
      <rect x="480" y="92" width="220" height="40" rx="8" class="head head--functional" />
      <text x="590" y="117" text-anchor="middle" class="head-label">Functional isomers</text>
      <text x="590" y="154" text-anchor="middle" class="formula">C₂H₆O</text>
      <rect x="480" y="170" width="220" height="58" rx="8" class="example" />
      <text x="590" y="192" text-anchor="middle" class="example-name">Ethanol</text>
      <text x="590" y="212" text-anchor="middle" class="example-text">alcohol, –OH</text>
      <rect x="480" y="240" width="220" height="58" rx="8" class="example" />
      <text x="590" y="262" text-anchor="middle" class="example-name">Methoxymethane</text>
      <text x="590" y="282" text-anchor="middle" class="example-text">ether, –O–</text>
    </g>

    <text x="360" y="344" text-anchor="middle" class="note">
      Same formula first. Then ask: skeleton, position, or functional group?
    </text>
  </svg>
</template>

<style scoped>
.root {
  fill: var(--teal);
  stroke: var(--teal-dark);
  stroke-width: 2;
}
.root-label {
  font-family: system-ui, sans-serif;
  font-size: 15px;
  font-weight: 700;
  fill: var(--paper-2);
}
.connector path {
  fill: none;
  stroke: var(--teal);
  stroke-width: 2.5;
}
.head {
  stroke-width: 2;
}
.head--chain {
  fill: var(--teal-light);
  stroke: var(--teal);
}
.head--position {
  fill: var(--amber-light);
  stroke: var(--amber);
}
.head--functional {
  fill: #e8eef8;
  stroke: #4b6b9a;
}
.head-label {
  font-family: system-ui, sans-serif;
  font-size: 15px;
  font-weight: 700;
  fill: var(--ink);
}
.formula {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.example {
  fill: var(--paper-2);
  stroke: var(--line);
  stroke-width: 2;
}
.example-name {
  font-family: system-ui, sans-serif;
  font-size: 14px;
  font-weight: 700;
  fill: var(--ink);
}
.example-text {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  fill: var(--ink-soft);
}
.note {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  fill: var(--ink-soft);
}
</style>
