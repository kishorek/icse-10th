<template>
  <svg
    viewBox="0 0 720 300"
    role="img"
    aria-labelledby="carbon-bonding-title carbon-bonding-desc"
  >
    <title id="carbon-bonding-title">Carbon forms four bonds and joins into chains and rings</title>
    <desc id="carbon-bonding-desc">
      A central carbon atom with four bonds to hydrogen, a carbon chain with a branch, and a
      six-carbon ring.
    </desc>

    <text x="120" y="30" text-anchor="middle" class="visual-heading">Tetravalency</text>
    <text x="360" y="30" text-anchor="middle" class="visual-heading">Chains and branches</text>
    <text x="600" y="30" text-anchor="middle" class="visual-heading">Rings</text>

    <g stroke="var(--teal)" stroke-width="3" stroke-linecap="round">
      <line x1="120" y1="120" x2="120" y2="65" />
      <line x1="120" y1="160" x2="120" y2="215" />
      <line x1="100" y1="140" x2="55" y2="140" />
      <line x1="140" y1="140" x2="185" y2="140" />
    </g>
    <circle cx="120" cy="140" r="24" fill="var(--teal-light)" stroke="var(--teal)" stroke-width="3" />
    <text x="120" y="146" text-anchor="middle" class="visual-atom">C</text>
    <text x="120" y="55" text-anchor="middle" class="visual-label">H</text>
    <text x="120" y="238" text-anchor="middle" class="visual-label">H</text>
    <text x="45" y="146" text-anchor="middle" class="visual-label">H</text>
    <text x="195" y="146" text-anchor="middle" class="visual-label">H</text>
    <text x="120" y="275" text-anchor="middle" class="visual-note">four shared pairs</text>

    <g stroke="var(--teal)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <polyline points="255,180 300,130 345,180 390,130 435,180" />
      <line x1="345" y1="180" x2="345" y2="230" />
    </g>
    <g fill="var(--teal-light)" stroke="var(--teal)" stroke-width="3">
      <circle cx="255" cy="180" r="13" />
      <circle cx="300" cy="130" r="13" />
      <circle cx="345" cy="180" r="13" />
      <circle cx="390" cy="130" r="13" />
      <circle cx="435" cy="180" r="13" />
      <circle cx="345" cy="230" r="13" />
    </g>
    <text x="345" y="265" text-anchor="middle" class="visual-note">straight chain with a branch</text>

    <polygon
      points="600,90 643,115 643,165 600,190 557,165 557,115"
      fill="var(--teal-light)"
      stroke="var(--teal)"
      stroke-width="4"
    />
    <g fill="var(--teal)">
      <circle cx="600" cy="90" r="5" />
      <circle cx="643" cy="115" r="5" />
      <circle cx="643" cy="165" r="5" />
      <circle cx="600" cy="190" r="5" />
      <circle cx="557" cy="165" r="5" />
      <circle cx="557" cy="115" r="5" />
    </g>
    <text x="600" y="225" text-anchor="middle" class="visual-note">closed ring</text>
  </svg>
</template>

<style scoped>
.visual-heading {
  font-family: system-ui, sans-serif;
  font-size: 15px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.visual-atom {
  font-family: system-ui, sans-serif;
  font-size: 22px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.visual-label {
  font-family: system-ui, sans-serif;
  font-size: 15px;
  font-weight: 700;
  fill: var(--ink);
}
.visual-note {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  fill: var(--ink-soft);
}
</style>
