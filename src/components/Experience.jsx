const experiences = [
{ id: 1, role: 'Roblox Game Developer', company: 'Ottodot - Singapore (Remote)', date: 'Nov 2024 - Nov 2025', details: 'Built and optimized gameplay systems in Lua, collaborated with designers and artists for smooth performance, met project deadlines and quality goals, tested and refined core mechanics.', link: 'https://www.ottodot.com/' },
{ id: 2, role: 'Developer', company: 'DONOPLAY - Pasay City, Philippines', date: 'Jun 2024 - Jun 2025', details: 'Created HTML-based mini games and integrated them into Android apps using WebView, developed native Android applications in Java, used Firebase Database for data storage and real-time updates, ensured smooth performance and compatibility across Android devices.' },
{ id: 3, role: 'IT Staff', company: 'Wbridges Manpower Corp - Pasay City, Philippines', date: 'Aug 2023 - Jun 2024', details: 'Provided network and IT infrastructure support, set up, maintained, and troubleshot systems and devices, monitored network performance and security, assisted users with technical issues.' }
]


export default function Experience(){
return (
<section id="experience" className="container">
<h2>Experience</h2>
<div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
{experiences.map(e => (
<article key={e.id}>
<div style={{ 
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginBottom: '0.5rem',
  gap: '1rem',
  flexWrap: 'wrap'
}}>
<h3 style={{ 
  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
  fontWeight: 500,
  color: 'var(--text-primary)'
}}>
  {e.role}
</h3>
<span className="mono" style={{ 
  fontSize: 'clamp(0.7rem, 1.8vw, 0.75rem)',
  color: 'var(--text-tertiary)',
  whiteSpace: 'nowrap'
}}>
  {e.date}
</span>
</div>
<p style={{ 
  fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
  color: 'var(--text-secondary)',
  marginBottom: '0.5rem'
}}>
  {e.link ? (
    <a 
      href={e.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="link-underline"
      style={{ color: 'var(--text-secondary)' }}
    >
      {e.company} ↗
    </a>
  ) : (
    e.company
  )}
</p>
<p style={{ 
  fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
  color: 'var(--text-secondary)',
  lineHeight: '1.6'
}}>
  {e.details}
</p>
</article>
))}
</div>
</section>
)
}