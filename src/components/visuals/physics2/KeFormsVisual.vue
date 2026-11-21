<template>
  <div class="ke-forms">
    <svg viewBox="0 0 720 260" role="img" aria-labelledby="kef-title kef-desc">
      <title id="kef-title">Translational, rotational and vibrational kinetic energy</title>
      <desc id="kef-desc">
        Three panels. A car moving along a straight road has translational kinetic energy.
        A spinning wheel has rotational kinetic energy about its axis. A vibrating string moves
        to and fro about its mean position and has vibrational kinetic energy.
      </desc>

      <g transform="translate(30 30)">
        <rect x="0" y="0" width="205" height="190" rx="8" fill="#fbf8f1" stroke="var(--line)" />
        <line x1="20" y1="142" x2="185" y2="142" stroke="var(--line)" stroke-width="2" />
        <rect x="54" y="106" width="86" height="30" rx="8" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
        <circle cx="72" cy="142" r="10" fill="var(--ink-soft)" />
        <circle cx="122" cy="142" r="10" fill="var(--ink-soft)" />
        <line x1="34" y1="88" x2="132" y2="88" stroke="var(--teal)" stroke-width="3" />
        <text x="102" y="176" text-anchor="middle" class="label">Translational</text>
        <text x="102" y="196" text-anchor="middle" class="small">straight-line motion</text>
      </g>

      <g transform="translate(255 30)">
        <rect x="0" y="0" width="205" height="190" rx="8" fill="#fbf8f1" stroke="var(--line)" />
        <circle cx="102" cy="104" r="48" fill="none" stroke="var(--teal-dark)" stroke-width="8" />
        <line x1="102" y1="104" x2="138" y2="70" stroke="var(--teal)" stroke-width="4" />
        <path d="M 154 70 A 54 54 0 0 1 156 132" fill="none" stroke="var(--amber)" stroke-width="3" />
        <text x="102" y="176" text-anchor="middle" class="label">Rotational</text>
        <text x="102" y="196" text-anchor="middle" class="small">about an axis</text>
      </g>

      <g transform="translate(480 30)">
        <rect x="0" y="0" width="205" height="190" rx="8" fill="#fbf8f1" stroke="var(--line)" />
        <path d="M 24 104 Q 60 52 102 104 T 180 104" fill="none" stroke="var(--teal-dark)" stroke-width="4" />
        <line x1="24" y1="104" x2="180" y2="104" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4" />
        <circle cx="102" cy="104" r="7" fill="var(--amber-deep)" />
        <text x="102" y="176" text-anchor="middle" class="label">Vibrational</text>
        <text x="102" y="196" text-anchor="middle" class="small">to and fro about a mean position</text>
      </g>
    </svg>

    <p class="sim-summary">
      <strong>One body can have more than one form at once.</strong>
      A rolling wheel translates and rotates. A struck string vibrates while its wave travels.
    </p>
  </div>
</template>

<style scoped>
.ke-forms { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.ke-forms svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.label { font-family: var(--sans); font-size: 15px; font-weight: 700; fill: var(--teal-dark); }
.small { font-family: var(--sans); font-size: 11px; fill: var(--ink-soft); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
