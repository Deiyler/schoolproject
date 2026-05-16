import { useState } from 'react'
import { ImageOff } from 'lucide-react'

function SafeImage({ src, alt, className = '', fallbackClassName = '' }) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-violet-100 to-cyan-50 text-slate-400 ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff size={28} />
        <span className="px-3 text-center text-xs font-medium">{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
    />
  )
}

export default SafeImage
