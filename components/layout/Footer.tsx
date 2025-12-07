export function Footer() {
  return (
    <footer className="mt-4 border-t border-[color:var(--border)] py-6 text-xs text-[color:var(--muted)]">
      © {new Date().getFullYear()} Muhammad Arief Syazry Suid. Built with
      Next.js &amp; Tailwind CSS.
    </footer>
  );
}
