export default function Footer(){
return (
<footer style={{ 
  borderTop: '1px solid var(--border-color)',
  marginTop: 'auto'
}}>
<div className="container" style={{ 
  padding: 'clamp(1.5rem, 3vw, 2rem) 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
  color: 'var(--text-tertiary)',
  gap: '0.5rem',
  textAlign: 'center'
}}>
<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
  <span className="mono">
    © {new Date().getFullYear()} Benedict Mendoza
  </span>
  <span>•</span>
  <span>
    Built with React + Vite
  </span>
</div>
<span style={{ fontSize: 'clamp(0.65rem, 1.8vw, 0.75rem)' }}>
  Created with assistance from Claude Sonnet 4.5 via GitHub Copilot
</span>
</div>
</footer>
)
}