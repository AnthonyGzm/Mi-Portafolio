// Convierte texto con tags <strong>...</strong> a JSX real, sin dangerouslySetInnerHTML.
export function renderBio(text) {
  const parts = text.split(/(<strong>.*?<\/strong>)/g)
  return parts.map((part, i) => {
    const match = part.match(/^<strong>(.*?)<\/strong>$/)
    return match ? <strong key={i}>{match[1]}</strong> : part
  })
}
