<template>
  <svg viewBox="0 0 720 330" role="img" aria-labelledby="homolog-title homolog-desc">
    <title id="homolog-title">Alkane homologous series staircase</title>
    <desc id="homolog-desc">
      Five alkane members rise like steps. Each step adds CH2 and 14 g/mol, from methane 16 g/mol
      to pentane 72 g/mol.
    </desc>

    <text x="360" y="26" text-anchor="middle" class="heading">
      Each step adds CH₂ and 14 g/mol
    </text>

    <g>
      <rect x="30" y="230" width="110" height="52" rx="7" class="step step--1" />
      <text x="85" y="251" text-anchor="middle" class="formula">CH₄</text>
      <text x="85" y="270" text-anchor="middle" class="mass">16 g/mol</text>

      <rect x="160" y="202" width="110" height="80" rx="7" class="step step--2" />
      <text x="215" y="225" text-anchor="middle" class="formula">C₂H₆</text>
      <text x="215" y="247" text-anchor="middle" class="mass">30 g/mol</text>

      <rect x="290" y="172" width="110" height="110" rx="7" class="step step--3" />
      <text x="345" y="196" text-anchor="middle" class="formula">C₃H₈</text>
      <text x="345" y="218" text-anchor="middle" class="mass">44 g/mol</text>

      <rect x="420" y="142" width="110" height="140" rx="7" class="step step--4" />
      <text x="475" y="166" text-anchor="middle" class="formula">C₄H₁₀</text>
      <text x="475" y="188" text-anchor="middle" class="mass">58 g/mol</text>

      <rect x="550" y="112" width="110" height="170" rx="7" class="step step--5" />
      <text x="605" y="136" text-anchor="middle" class="formula">C₅H₁₂</text>
      <text x="605" y="158" text-anchor="middle" class="mass">72 g/mol</text>
    </g>

    <g class="plus">
      <text x="144" y="285" text-anchor="middle">+CH₂</text>
      <text x="274" y="255" text-anchor="middle">+CH₂</text>
      <text x="404" y="225" text-anchor="middle">+CH₂</text>
      <text x="534" y="195" text-anchor="middle">+CH₂</text>
    </g>

    <g class="trend">
      <path d="M675 285 L675 115" />
      <path d="M668 126 L675 112 L682 126" />
      <text x="692" y="205" text-anchor="middle" transform="rotate(90 692 205)">
        boiling point rises
      </text>
    </g>
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
.step--1 { fill: #e8f2ee; }
.step--2 { fill: #dcece6; }
.step--3 { fill: #cfe6df; }
.step--4 { fill: #c2dfd7; }
.step--5 { fill: #b4d8cf; }
.formula {
  font-family: system-ui, sans-serif;
  font-size: 18px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.mass {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  fill: var(--ink);
}
.plus text {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  font-weight: 700;
  fill: var(--amber-deep);
}
.trend path {
  fill: none;
  stroke: var(--amber);
  stroke-width: 2.5;
}
.trend text {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  fill: var(--amber-deep);
}
</style>
