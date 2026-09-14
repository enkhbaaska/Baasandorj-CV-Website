import React from "react"

interface RenderTextWithLinksProps {
  text: string
  className?: string
}

// Match pattern: [text](url)
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
// Match pattern: **bold** or [text](url)
const tokenRegex = /\*\*([\s\S]+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g

function renderLink(text: string, url: string, key: string) {
  return (
    <a
      key={key}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline font-medium"
    >
      {text}
    </a>
  )
}

// Links only — used for the contents of a bold span
function renderLinks(text: string, keyPrefix: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match

  linkRegex.lastIndex = 0
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    parts.push(renderLink(match[1], match[2], `${keyPrefix}-link-${match.index}`))
    lastIndex = linkRegex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts
}

export function RenderTextWithLinks({ text, className = "" }: RenderTextWithLinksProps) {
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match

  tokenRegex.lastIndex = 0
  while ((match = tokenRegex.exec(text)) !== null) {
    // Add text before the token
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }

    if (match[1] !== undefined) {
      // Bold, which may contain links
      parts.push(
        <strong key={`bold-${match.index}`} className="font-semibold text-foreground">
          {renderLinks(match[1], `bold-${match.index}`)}
        </strong>
      )
    } else {
      parts.push(renderLink(match[2], match[3], `link-${match.index}`))
    }

    lastIndex = tokenRegex.lastIndex
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  // If no tokens found, return text as-is
  if (parts.length === 0) {
    return <span className={className}>{text}</span>
  }

  return <span className={className}>{parts}</span>
}
