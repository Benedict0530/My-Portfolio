export default function About(){
return (
<section id="about" className="container">
<h2>About</h2>
<div style={{ display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
{/* Profile Image */}
<div style={{ 
  flexShrink: 0,
  width: 'clamp(120px, 20vw, 150px)',
  height: 'clamp(120px, 20vw, 150px)',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid var(--border-color)',
  margin: '0 auto'
}}>
<img 
  src="/images/profile.jpg" 
  alt="Benedict Mendoza"
  style={{ 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover',
    display: 'block'
  }}
  onError={(e) => {
    e.target.style.display = 'none';
    e.target.parentElement.style.display = 'flex';
    e.target.parentElement.style.alignItems = 'center';
    e.target.parentElement.style.justifyContent = 'center';
    e.target.parentElement.style.backgroundColor = 'var(--bg-primary)';
    e.target.parentElement.innerHTML = '<span style="font-size: clamp(2rem, 5vw, 3rem); color: var(--text-tertiary)">BM</span>';
  }}
/>
</div>

{/* Bio Content */}
<div style={{ flex: 1, minWidth: 'min(300px, 100%)' }}>
<div style={{ 
  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', 
  lineHeight: '1.8',
  color: 'var(--text-primary)',
  marginBottom: '2rem'
}}>
<p style={{ marginBottom: '1.5rem' }}>
  Hi — I'm <strong>Benedict Mendoza</strong>, a Computer Engineer with 2 years of experience in IT support, troubleshooting, and software development.
</p>
<p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
  I specialize in Android development, game development with Lua, and IT infrastructure. Passionate about building efficient systems and continuously learning new technologies.
</p>
<p className="mono" style={{ 
  color: 'var(--text-tertiary)', 
  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
}}>
  Python • Java • JavaScript • Lua • HTML/CSS
</p>
</div>

<div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 1.5rem)', fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', flexWrap: 'wrap', alignItems: 'center' }}>
<a 
  href="https://github.com/Benedict0530" 
  target="_blank" 
  rel="noopener noreferrer"
  className="link-underline"
  style={{ color: 'var(--text-secondary)' }}
>
  github ↗
</a>
<a 
  href="https://www.linkedin.com/in/benedict-mendoza-74b3682ba/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="link-underline"
  style={{ color: 'var(--text-secondary)' }}
>
  linkedin ↗
</a>
<a 
  href="mailto:mendozabenedict14@gmail.com"
  className="link-underline"
  style={{ color: 'var(--text-secondary)' }}
>
  email ↗
</a>
<a 
  href="tel:+971568455143"
  className="link-underline"
  style={{ color: 'var(--text-secondary)' }}
>
  +971 56 845 5143
</a>
<span style={{ color: 'var(--border-color)', userSelect: 'none' }}>|</span>
<a 
  href="/cv/Benedict-Mendoza-CV.pdf"
  download="Benedict-Mendoza-CV.pdf"
  className="link-underline"
  style={{ 
    color: 'var(--text-primary)',
    fontWeight: 500
  }}
>
  download cv ↓
</a>
</div>
</div>
</div>
</section>
)
}