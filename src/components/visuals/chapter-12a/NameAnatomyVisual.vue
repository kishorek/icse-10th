<template>
  <svg viewBox="0 0 720 310" role="img" aria-labelledby="name-anatomy-title name-anatomy-desc">
    <title id="name-anatomy-title">Parts of an IUPAC name</title>
    <desc id="name-anatomy-desc">
      The name 2-methylbutane is split into locant 2, prefix methyl, root but and suffix ane.
      The structure below shows the methyl branch on carbon 2 of a four-carbon chain.
    </desc>

    <text x="360" y="24" text-anchor="middle" class="heading">2-methylbutane</text>

    <g>
      <rect x="40" y="46" width="100" height="46" rx="8" class="part part--locant" />
      <text x="90" y="76" text-anchor="middle" class="part-text">2-</text>
      <text x="90" y="112" text-anchor="middle" class="part-label">locant</text>

      <rect x="160" y="46" width="150" height="46" rx="8" class="part part--prefix" />
      <text x="235" y="76" text-anchor="middle" class="part-text">methyl</text>
      <text x="235" y="112" text-anchor="middle" class="part-label">prefix: branch</text>

      <rect x="330" y="46" width="130" height="46" rx="8" class="part part--root" />
      <text x="395" y="76" text-anchor="middle" class="part-text">but</text>
      <text x="395" y="112" text-anchor="middle" class="part-label">root: 4 carbons</text>

      <rect x="480" y="46" width="130" height="46" rx="8" class="part part--suffix" />
      <text x="545" y="76" text-anchor="middle" class="part-text">ane</text>
      <text x="545" y="112" text-anchor="middle" class="part-label">suffix: single bonds</text>
    </g>

    <g stroke="var(--teal)" stroke-width="4" stroke-linecap="round">
      <line x1="180" y1="210" x2="260" y2="160" />
      <line x1="260" y1="160" x2="340" y2="210" />
      <line x1="340" y1="210" x2="420" y2="160" />
      <line x1="260" y1="160" x2="260" y2="105" />
    </g>
    <g fill="var(--teal-light)" stroke="var(--teal)" stroke-width="3">
      <circle cx="180" cy="210" r="15" />
      <circle cx="260" cy="160" r="15" />
      <circle cx="340" cy="210" r="15" />
      <circle cx="420" cy="160" r="15" />
      <circle cx="260" cy="105" r="15" />
    </g>
    <g class="number">
      <text x="180" y="242" text-anchor="middle">1</text>
      <text x="260" y="145" text-anchor="middle">2</text>
      <text x="340" y="242" text-anchor="middle">3</text>
      <text x="420" y="145" text-anchor="middle">4</text>
    </g>
    <text x="260" y="88" text-anchor="middle" class="branch">methyl branch</text>
    <text x="360" y="275" text-anchor="middle" class="note">
      Number from the end that gives the branch the lowest locant.
    </text>
  </svg>
</template>

<style scoped>
.heading {
  font-family: system-ui, sans-serif;
  font-size: 22px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.part {
  stroke-width: 2;
}
.part--locant {
  fill: var(--amber-light);
  stroke: var(--amber);
}
.part--prefix {
  fill: #e6f0ec;
  stroke: var(--teal);
}
.part--root {
  fill: #dcece6;
  stroke: var(--teal);
}
.part--suffix {
  fill: #cfe6df;
  stroke: var(--teal);
}
.part-text {
  font-family: system-ui, sans-serif;
  font-size: 18px;
  font-weight: 700;
  fill: var(--ink);
}
.part-label {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  fill: var(--ink-soft);
}
.number text {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  font-weight: 700;
  fill: var(--amber-deep);
}
.branch {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  fill: var(--teal-dark);
}
.note {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  fill: var(--ink-soft);
}
</style>
