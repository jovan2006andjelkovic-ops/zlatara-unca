/* Minimal gold line-art icons standing in for product photography. */

const ICONS = {
  rings: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a24b" stroke-width="2.2"><circle cx="38" cy="60" r="22"/><circle cx="62" cy="60" r="22"/><path d="M32 40 L38 26 L44 40" stroke-linejoin="round"/><circle cx="38" cy="26" r="3" fill="#e8c874" stroke="none"/></svg>`,
  "ring-stone": `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a24b" stroke-width="2.2"><circle cx="50" cy="62" r="26"/><path d="M40 34 L50 20 L60 34 L50 44 Z" stroke-linejoin="round"/><circle cx="50" cy="30" r="2.5" fill="#e8c874" stroke="none"/></svg>`,
  "ring-twist": `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a24b" stroke-width="2.2"><path d="M28 60 Q28 34 50 34 Q72 34 72 60 Q72 86 50 86 Q28 86 28 60Z"/><path d="M30 48 Q50 58 70 48 M30 72 Q50 62 70 72"/></svg>`,
  "ring-signet": `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a24b" stroke-width="2.2"><circle cx="50" cy="64" r="24"/><rect x="36" y="24" width="28" height="20" rx="3"/></svg>`,
  band: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a24b" stroke-width="2.2"><circle cx="50" cy="50" r="30"/><circle cx="50" cy="50" r="19"/></svg>`,
  coin: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a24b" stroke-width="2.2"><circle cx="50" cy="50" r="32"/><circle cx="50" cy="50" r="24" stroke-dasharray="3 4"/><path d="M40 50 L47 58 L61 42" stroke="#e8c874"/></svg>`,
  necklace: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a24b" stroke-width="2"><path d="M20 24 Q50 70 80 24"/><circle cx="50" cy="66" r="4" fill="#e8c874" stroke="none"/></svg>`,
  "necklace-pendant": `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a24b" stroke-width="2"><path d="M20 22 Q50 58 80 22"/><path d="M42 58 L50 74 L58 58 Z" stroke-linejoin="round"/><circle cx="50" cy="52" r="3" fill="#e8c874" stroke="none"/></svg>`,
  bracelet: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a24b" stroke-width="2.2"><ellipse cx="50" cy="50" rx="34" ry="20"/><path d="M20 44 Q50 60 80 44 M20 56 Q50 40 80 56"/></svg>`,
  earrings: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a24b" stroke-width="2.2"><circle cx="34" cy="30" r="5"/><path d="M34 35 Q34 55 34 66" /><circle cx="34" cy="72" r="6" fill="#e8c874" stroke="none"/><circle cx="66" cy="30" r="5"/><path d="M66 35 Q66 55 66 66"/><circle cx="66" cy="72" r="6" fill="#e8c874" stroke="none"/></svg>`
};

function iconFor(key) {
  return ICONS[key] || ICONS.rings;
}
