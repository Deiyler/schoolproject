function Footer({ isLight }) {
  return (
    <footer
      className={`mt-16 border-t ${
        isLight ? 'border-slate-300/80' : 'border-white/10'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm md:px-6">
        Школьный проект, 10 класс
      </div>
    </footer>
  )
}

export default Footer
