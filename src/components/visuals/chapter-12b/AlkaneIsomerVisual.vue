<template>
  <svg viewBox="0 0 720 390" role="img" aria-labelledby="alkane-visual-title alkane-visual-desc">
    <title id="alkane-visual-title">Alkane family and chain isomers</title>
    <desc id="alkane-visual-desc">
      The alkane staircase runs from methane to pentane, adding CH2 and 14 g/mol. Butane has two
      chain isomers and pentane has three.
    </desc>

    <text x="160" y="26" text-anchor="middle" class="heading">The alkane family</text>
    <g>
      <rect x="20" y="250" width="52" height="42" rx="6" class="step" />
      <text x="46" y="276" text-anchor="middle" class="step-text">C₁</text>
      <rect x="80" y="220" width="52" height="72" rx="6" class="step" />
      <text x="106" y="246" text-anchor="middle" class="step-text">C₂</text>
      <rect x="140" y="190" width="52" height="102" rx="6" class="step" />
      <text x="166" y="216" text-anchor="middle" class="step-text">C₃</text>
      <rect x="200" y="160" width="52" height="132" rx="6" class="step" />
      <text x="226" y="186" text-anchor="middle" class="step-text">C₄</text>
      <rect x="260" y="130" width="52" height="162" rx="6" class="step" />
      <text x="286" y="156" text-anchor="middle" class="step-text">C₅</text>
    </g>
    <text x="160" y="318" text-anchor="middle" class="note">+CH₂ each step · +14 g/mol</text>
    <text x="160" y="340" text-anchor="middle" class="formula">CₙH₂ₙ₊₂</text>
    <text x="160" y="366" text-anchor="middle" class="note">boiling point rises</text>

    <line x1="325" y1="24" x2="325" y2="368" stroke="var(--line)" stroke-width="2" />

    <text x="525" y="26" text-anchor="middle" class="heading">Chain isomers</text>

    <text x="345" y="70" class="label">Butane, C₄H₁₀</text>
    <g class="skeleton">
      <line x1="345" y1="94" x2="405" y2="94" />
      <line x1="405" y1="94" x2="465" y2="94" />
      <line x1="465" y1="94" x2="525" y2="94" />
    </g>
    <text x="550" y="99" class="small">straight</text>
    <g class="skeleton">
      <line x1="345" y1="130" x2="405" y2="130" />
      <line x1="405" y1="130" x2="465" y2="130" />
      <line x1="405" y1="130" x2="405" y2="165" />
    </g>
    <text x="550" y="135" class="small">2-methylpropane</text>

    <text x="345" y="205" class="label">Pentane, C₅H₁₂</text>
    <g class="skeleton">
      <line x1="345" y1="230" x2="405" y2="230" />
      <line x1="405" y1="230" x2="465" y2="230" />
      <line x1="465" y1="230" x2="525" y2="230" />
      <line x1="525" y1="230" x2="585" y2="230" />
    </g>
    <text x="605" y="235" class="small">straight</text>
    <g class="skeleton">
      <line x1="345" y1="270" x2="405" y2="270" />
      <line x1="405" y1="270" x2="465" y2="270" />
      <line x1="465" y1="270" x2="525" y2="270" />
      <line x1="405" y1="270" x2="405" y2="305" />
    </g>
    <text x="550" y="275" class="small">2-methylbutane</text>
    <g class="skeleton">
      <line x1="345" y1="325" x2="405" y2="325" />
      <line x1="405" y1="325" x2="465" y2="325" />
      <line x1="405" y1="325" x2="405" y2="355" />
      <line x1="405" y1="325" x2="405" y2="295" />
    </g>
    <text x="550" y="330" class="small">2,2-dimethylpropane</text>
  </svg>
</template>

<style scoped>
.heading {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.step {
  fill: var(--teal-light);
  stroke: var(--teal);
  stroke-width: 2;
}
.step-text {
  font-family: system-ui, sans-serif;
  font-size: 14px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.formula {
  font-family: system-ui, sans-serif;
  font-size: 18px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.note {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  fill: var(--ink-soft);
}
.label {
  font-family: system-ui, sans-serif;
  font-size: 14px;
  font-weight: 700;
  fill: var(--ink);
}
.small {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  fill: var(--ink-soft);
}
.skeleton line {
  stroke: var(--teal);
  stroke-width: 3;
  stroke-linecap: round;
}
</style>
