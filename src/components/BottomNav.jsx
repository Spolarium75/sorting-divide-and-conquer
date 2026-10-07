function BottomNav({
  currentSection,
  totalSections,
  onPrevious,
  onNext,
}) {
  return (
    <footer className="border-t border-white/10 pt-5">
      <div className="flex items-center justify-between gap-4">

        <button
          onClick={onPrevious}
          disabled={currentSection === 0}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 transition hover:text-white disabled:pointer-events-none disabled:opacity-20"
        >
          ← Previous
        </button>

        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
          <span className="text-[#d4a72c]">
            {String(currentSection + 1).padStart(2, '0')}
          </span>

          <span className="text-white/20">/</span>

          <span className="text-white/40">
            {String(totalSections).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={onNext}
          disabled={currentSection === totalSections - 1}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 transition hover:text-[#d4a72c] disabled:pointer-events-none disabled:opacity-20"
        >
          Next →
        </button>

      </div>
    </footer>
  )
}

export default BottomNav