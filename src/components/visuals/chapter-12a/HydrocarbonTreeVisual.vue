<template>
  <svg viewBox="0 0 720 340" role="img" aria-labelledby="hydro-tree-title hydro-tree-desc">
    <title id="hydro-tree-title">Classification tree for hydrocarbons</title>
    <desc id="hydro-tree-desc">
      Hydrocarbons divide into open-chain aliphatic compounds and cyclic compounds. Aliphatic
      compounds are saturated alkanes or unsaturated alkenes and alkynes. Cyclic compounds are
      alicyclic or aromatic.
    </desc>

    <rect x="285" y="12" width="150" height="42" rx="8" class="box box--root" />
    <text x="360" y="39" text-anchor="middle" class="label label--strong label--root">Hydrocarbons</text>

    <g class="connector">
      <path d="M330 54 L180 88" />
      <path d="M390 54 L540 88" />
    </g>

    <rect x="85" y="88" width="190" height="42" rx="8" class="box" />
    <text x="180" y="115" text-anchor="middle" class="label">Aliphatic (open chain)</text>
    <rect x="445" y="88" width="190" height="42" rx="8" class="box" />
    <text x="540" y="115" text-anchor="middle" class="label">Cyclic (closed chain)</text>

    <g class="connector">
      <path d="M135 130 L90 170" />
      <path d="M225 130 L270 170" />
      <path d="M495 130 L450 170" />
      <path d="M585 130 L630 170" />
    </g>

    <rect x="12" y="170" width="156" height="54" rx="8" class="box box--accent" />
    <text x="90" y="192" text-anchor="middle" class="label label--strong">Saturated</text>
    <text x="90" y="212" text-anchor="middle" class="label">alkanes</text>
    <rect x="192" y="170" width="156" height="54" rx="8" class="box box--accent" />
    <text x="270" y="192" text-anchor="middle" class="label label--strong">Unsaturated</text>
    <text x="270" y="212" text-anchor="middle" class="label">alkenes, alkynes</text>
    <rect x="372" y="170" width="156" height="54" rx="8" class="box box--accent" />
    <text x="450" y="192" text-anchor="middle" class="label label--strong">Alicyclic</text>
    <text x="450" y="212" text-anchor="middle" class="label">ring, no aromatic ring</text>
    <rect x="552" y="170" width="156" height="54" rx="8" class="box box--accent" />
    <text x="630" y="192" text-anchor="middle" class="label label--strong">Aromatic</text>
    <text x="630" y="212" text-anchor="middle" class="label">benzene ring</text>

    <g class="connector">
      <path d="M90 224 L90 258" />
      <path d="M270 224 L270 258" />
    </g>
    <text x="90" y="278" text-anchor="middle" class="label">CₙH₂ₙ₊₂</text>
    <text x="270" y="278" text-anchor="middle" class="label">CₙH₂ₙ or CₙH₂ₙ₋₂</text>
    <text x="450" y="278" text-anchor="middle" class="label">ring, saturated or unsaturated</text>
    <text x="630" y="278" text-anchor="middle" class="label">C₆H₆</text>

    <text x="360" y="320" text-anchor="middle" class="note">
      First decide open or ring. Then decide single or multiple bonds.
    </text>
  </svg>
</template>

<style scoped>
.box {
  fill: var(--paper-2);
  stroke: var(--line);
  stroke-width: 2;
}
.box--root {
  fill: var(--teal);
  stroke: var(--teal-dark);
}
.box--accent {
  fill: var(--teal-light);
  stroke: var(--teal);
}
.connector path {
  fill: none;
  stroke: var(--teal);
  stroke-width: 2.5;
}
.label {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  fill: var(--ink);
}
.label--strong {
  font-weight: 700;
}
.label--root {
  fill: var(--paper-2);
}
.note {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  fill: var(--ink-soft);
}
</style>
