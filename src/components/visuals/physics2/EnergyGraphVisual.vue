<template>
  <div class="energy-graph">
    <svg viewBox="0 0 720 330" role="img" aria-labelledby="eg-title eg-desc">
      <title id="eg-title">Potential, kinetic and total energy against height</title>
      <desc id="eg-desc">
        The potential energy falls in a straight line from mgh at the top to zero at the ground.
        The kinetic energy rises from zero at the top to mgh at the ground. The total energy line
        stays horizontal at mgh. At half the height, U and K are both equal to mgh divided by two.
      </desc>

      <line x1="88" y1="260" x2="650" y2="260" stroke="var(--ink-soft)" stroke-width="2" />
      <line x1="88" y1="260" x2="88" y2="54" stroke="var(--ink-soft)" stroke-width="2" />
      <text x="370" y="304" text-anchor="middle" class="axis">height above ground</text>
      <text x="32" y="160" text-anchor="middle" class="axis" transform="rotate(-90 32 160)">energy</text>

      <line x1="88" y1="66" x2="610" y2="66" stroke="var(--ink-soft)" stroke-width="3" stroke-dasharray="7 5" />
      <text x="620" y="71" class="label">total = mgh</text>

      <line x1="88" y1="66" x2="610" y2="260" stroke="var(--teal-dark)" stroke-width="4" />
      <text x="572" y="246" class="label teal">U</text>
      <line x1="88" y1="260" x2="610" y2="66" stroke="var(--amber-deep)" stroke-width="4" />
      <text x="576" y="84" class="label amber">K</text>

      <line x1="349" y1="66" x2="349" y2="260" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4" />
      <circle cx="349" cy="163" r="6" fill="var(--ink)" />
      <text x="356" y="154" class="small">h/2: U = K = mgh/2</text>

      <text x="88" y="282" text-anchor="middle" class="small">0</text>
      <text x="610" y="282" text-anchor="middle" class="small">h</text>
      <text x="80" y="66" text-anchor="end" class="small">mgh</text>
      <text x="80" y="263" text-anchor="end" class="small">0</text>
    </svg>

    <div class="table-wrap">
      <table class="compare-table">
        <caption>Energy at three heights in free fall</caption>
        <thead>
          <tr><th scope="col">Height</th><th scope="col">U</th><th scope="col">K</th><th scope="col">U + K</th></tr>
        </thead>
        <tbody>
          <tr><th scope="row">h (top)</th><td>mgh</td><td>0</td><td>mgh</td></tr>
          <tr><th scope="row">h/2</th><td>mgh/2</td><td>mgh/2</td><td>mgh</td></tr>
          <tr><th scope="row">0 (ground)</th><td>0</td><td>mgh</td><td>mgh</td></tr>
        </tbody>
      </table>
    </div>

    <p class="sim-summary">
      <strong>Read the crossing point.</strong>
      At h/2 the U and K lines cross, so the two energies are equal. The total line has not moved.
    </p>
  </div>
</template>

<style scoped>
.energy-graph { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.6rem; }
.energy-graph svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.axis, .label, .small { font-family: var(--sans); }
.axis { font-size: 12px; fill: var(--ink-soft); }
.label { font-size: 14px; font-weight: 700; fill: var(--ink-soft); }
.label.teal { fill: var(--teal-dark); }
.label.amber { fill: var(--amber-deep); }
.small { font-size: 12px; fill: var(--ink-soft); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
