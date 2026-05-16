function AuthorAvatar({ className = 'h-9 w-9', ring = false }) {
  return (
    <img
      src="/author-avatar.png"
      alt="Андрей Гущин"
      className={`shrink-0 rounded-xl object-cover ${ring ? 'ring-4 ring-white/30 shadow-lg' : 'shadow-md'} ${className}`}
    />
  )
}

export default AuthorAvatar
