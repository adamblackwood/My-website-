/* ═══════════════════════════════════════════════════════
   ServiceTag — Simple pill/badge for skill sets
   ═══════════════════════════════════════════════════════ */
export default function ServiceTag({ children }) {
  return (
    <span className="inline-block border border-subtle rounded-full px-4 py-1 text-sm text-muted">
      {children}
    </span>
  );
}
