<template>
  <svg viewBox="0 0 720 330" role="img" aria-labelledby="spring-rule-title spring-rule-desc">
    <title id="spring-rule-title">Spring balance supporting a metre rule</title>
    <desc id="spring-rule-desc">
      A uniform metre rule is pivoted at its zero end. A 40 kgf weight hangs at 40 cm, and a spring balance
      pulls up at 100 cm. With a negligible rule the balance reads 16 kgf. When the rule itself weighs
      20 kgf at its midpoint, the balance reads 26 kgf.
    </desc>
    <defs>
      <marker markerUnits="userSpaceOnUse" id="spring-head" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
        <path d="M 0 0 L 12 6 L 0 12 z" fill="#0f5c5c" />
      </marker>
    </defs>

    <text x="190" y="26" text-anchor="middle" class="panel-title">(i) rule of negligible mass</text>
    <text x="540" y="26" text-anchor="middle" class="panel-title">(ii) rule of mass 20 kg</text>

    <g>
      <rect x="70" y="120" width="260" height="14" rx="3" fill="#f2e7d2" stroke="var(--teal-dark)" stroke-width="3" />
      <path d="M 70 138 L 70 162 L 52 182 L 88 182 Z" fill="var(--teal)" />
      <text x="70" y="202" text-anchor="middle" class="tiny">pivot A</text>

      <line x1="174" y1="134" x2="174" y2="176" stroke="var(--ink-soft)" stroke-width="2" />
      <rect x="154" y="176" width="40" height="26" rx="4" fill="#f5e3c8" stroke="var(--amber-deep)" stroke-width="2" />
      <text x="174" y="194" text-anchor="middle" class="weight">40</text>
      <text x="174" y="218" text-anchor="middle" class="tiny">40 cm</text>

      <line x1="330" y1="134" x2="330" y2="86" stroke="var(--teal)" stroke-width="3" marker-end="url(#spring-head)" />
      <text x="330" y="76" text-anchor="middle" class="force">F = 16 kgf</text>
      <text x="330" y="218" text-anchor="middle" class="tiny">100 cm</text>

      <line x1="70" y1="110" x2="174" y2="110" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4" />
      <text x="122" y="100" text-anchor="middle" class="tiny">40 cm</text>
      <line x1="70" y1="252" x2="330" y2="252" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4" />
      <text x="200" y="266" text-anchor="middle" class="tiny">100 cm</text>

      <text x="200" y="298" text-anchor="middle" class="note">40 × 40 = F × 100  →  F = 16 kgf</text>
    </g>

    <line x1="370" y1="40" x2="370" y2="300" stroke="var(--line)" stroke-width="1" />

    <g>
      <rect x="400" y="120" width="260" height="14" rx="3" fill="#f2e7d2" stroke="var(--teal-dark)" stroke-width="3" />
      <path d="M 400 138 L 400 162 L 382 182 L 418 182 Z" fill="var(--teal)" />
      <text x="400" y="202" text-anchor="middle" class="tiny">pivot A</text>

      <line x1="504" y1="134" x2="504" y2="176" stroke="var(--ink-soft)" stroke-width="2" />
      <rect x="484" y="176" width="40" height="26" rx="4" fill="#f5e3c8" stroke="var(--amber-deep)" stroke-width="2" />
      <text x="504" y="194" text-anchor="middle" class="weight">40</text>
      <text x="504" y="218" text-anchor="middle" class="tiny">40 cm</text>

      <line x1="530" y1="134" x2="530" y2="166" stroke="var(--ink-soft)" stroke-width="2" />
      <rect x="514" y="166" width="32" height="24" rx="4" fill="#d9e7df" stroke="var(--teal-dark)" stroke-width="2" />
      <text x="530" y="183" text-anchor="middle" class="weight">20</text>
      <text x="566" y="196" class="tiny">rule weight at 50 cm</text>

      <line x1="660" y1="134" x2="660" y2="86" stroke="var(--teal)" stroke-width="3" marker-end="url(#spring-head)" />
      <text x="660" y="76" text-anchor="middle" class="force">F = 26 kgf</text>
      <text x="660" y="218" text-anchor="middle" class="tiny">100 cm</text>

      <text x="540" y="298" text-anchor="middle" class="note">1600 + 1000 = F × 100  →  F = 26 kgf</text>
    </g>
  </svg>
</template>

<style scoped>
.panel-title,
.tiny,
.weight,
.force,
.note {
  font-family: system-ui, sans-serif;
}
.panel-title {
  font-size: 13px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.tiny {
  font-size: 10px;
  fill: var(--ink-soft);
}
.weight {
  font-size: 11px;
  font-weight: 700;
  fill: var(--ink);
}
.force {
  font-size: 12px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.note {
  font-size: 12px;
  fill: var(--ink);
}
</style>
