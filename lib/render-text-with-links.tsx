import React from "react"

interface RenderTextWithLinksProps {
  text: string
  className?: string
}

export function RenderTextWithLinks({ text, className = "" }: RenderTextWithLinksProps) {
  // Match pattern: [text](url)
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    // Add text before link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    
    // Add link
    const linkText = match[1]
    const linkUrl = match[2]
    parts.push(
      <a
        key={`link-${match.index}`}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline font-medium"
      >
        {linkText}
      </a>
    )
    
    lastIndex = regex.lastIndex
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  // If no links found, return text as-is
  if (parts.length === 0) {
    return <span className={className}>{text}</span>
  }

  return <span className={className}>{parts}</span>
}
