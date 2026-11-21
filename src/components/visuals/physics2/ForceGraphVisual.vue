<template>
  <div class="force-graph">
    <svg viewBox="0 0 720 330" role="img" aria-labelledby="fg-title fg-desc">
      <title id="fg-title">Work as the area under a force-displacement graph</title>
      <desc id="fg-desc">
        The left graph shows a constant 20 N force over 5 m. The shaded rectangle has area 100 J.
        The right graph shows force increasing uniformly from 0 to 20 N over 5 m. The shaded
        triangle has area 50 J. In both graphs the area under the line gives the work done.
      </desc>

      <g>
        <line x1="58" y1="248" x2="302" y2="248" stroke="var(--ink-soft)" stroke-width="2" />
        <line x1="58" y1="248" x2="58" y2="58" stroke="var(--ink-soft)" stroke-width="2" />
        <text x="180" y="286" text-anchor="middle" class="axis">displacement s / m</text>
        <text x="26" y="156" text-anchor="middle" class="axis" transform="rotate(-90 26 156)">force F / N</text>
        <rect x="58" y="116" width="180" height="132" fill="var(--teal-light)" stroke="none" />
        <line x1="58" y1="116" x2="238" y2="116" stroke="var(--teal-dark)" stroke-width="4" />
        <text x="148" y="106" text-anchor="middle" class="small">constant force 20 N</text>
        <text x="148" y="186" text-anchor="middle" class="area">area = 100 J</text>
        <text x="58" y="266" text-anchor="middle" class="tick">0</text>
        <text x="238" y="266" text-anchor="middle" class="tick">5</text>
        <text x="42" y="120" text-anchor="end" class="tick">20</text>
        <text x="150" y="312" text-anchor="middle" class="caption">Constant force: W = Fs</text>
      </g>

      <g>
        <line x1="408" y1="248" x2="652" y2="248" stroke="var(--ink-soft)" stroke-width="2" />
        <line x1="408" y1="248" x2="408" y2="58" stroke="var(--ink-soft)" stroke-width="2" />
        <text x="530" y="286" text-anchor="middle" class="axis">displacement s / m</text>
        <polygon points="408,248 588,248 588,116" fill="var(--teal-light)" />
        <line x1="408" y1="248" x2="588" y2="116" stroke="var(--teal-dark)" stroke-width="4" />
        <text x="520" y="202" text-anchor="middle" class="area">area = 50 J</text>
        <text x="408" y="266" text-anchor="middle" class="tick">0</text>
        <text x="588" y="266" text-anchor="middle" class="tick">5</text>
        <text x="392" y="120" text-anchor="end" class="tick">20</text>
        <text x="500" y="312" text-anchor="middle" class="caption">Increasing force: W = ½ × 20 × 5</text>
      </g>

      <text x="360" y="30" text-anchor="middle" class="title-text">Area under the graph = work done</text>
    </svg>

    <p class="sim-summary">
      <strong>Read the area, not just the height.</strong>
      A constant force gives a rectangle; a force rising uniformly from zero gives a triangle.
      The two graphs above use the same maximum force and displacement but do not represent the
      same work.
    </p>
  </div>
</template>

<style scoped>
.force-graph { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.6rem; }
.force-graph svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.axis, .small, .tick, .caption, .area, .title-text { font-family: var(--sans); }
.axis { font-size: 12px; fill: var(--ink-soft); }
.small { font-size: 12px; fill: var(--ink-soft); }
.tick { font-size: 12px; fill: var(--ink); }
.caption { font-size: 13px; font-weight: 700; fill: var(--teal-dark); }
.area { font-size: 15px; font-weight: 700; fill: var(--teal-dark); }
.title-text { font-size: 16px; font-weight: 700; fill: var(--ink); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
