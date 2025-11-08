export default function Header(){
return (
<header style={{ 
  borderBottom: '1px solid var(--border-color)', 
  position: 'sticky',
  top: 0,
  zIndex: 100,
  backdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)'
}}>
<div className="container" style={{ 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between',
  padding: 'clamp(0.75rem, 2vw, 1.25rem) clamp(0.75rem, 3vw, 1.5rem)',
  maxWidth: '800px',
  gap: '1rem'
}}>
<h1 className="mono" style={{ 
  fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)', 
  fontWeight: 500,
  color: 'var(--text-primary)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}}>
  ~/benedict-mendoza
</h1>
<nav style={{ 
  display: 'flex', 
  gap: 'clamp(0.5rem, 2vw, 2rem)',
  flexShrink: 0
}}>
<a href="#about" className="link-underline" style={{ 
  fontSize: 'clamp(0.7rem, 2vw, 0.875rem)',
  color: 'var(--text-secondary)',
  whiteSpace: 'nowrap'
}}>about</a>
<a href="#projects" className="link-underline" style={{ 
  fontSize: 'clamp(0.7rem, 2vw, 0.875rem)',
  color: 'var(--text-secondary)',
  whiteSpace: 'nowrap'
}}>projects</a>
<a href="#experience" className="link-underline" style={{ 
  fontSize: 'clamp(0.7rem, 2vw, 0.875rem)',
  color: 'var(--text-secondary)',
  whiteSpace: 'nowrap'
}}>experience</a>
<a href="#certifications" className="link-underline" style={{ 
  fontSize: 'clamp(0.7rem, 2vw, 0.875rem)',
  color: 'var(--text-secondary)',
  whiteSpace: 'nowrap'
}}>certs</a>
</nav>
</div>
</header>
)
}