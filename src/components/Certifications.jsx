const certifications = [
  { 
    id: 1, 
    name: 'Introduction to Cybersecurity', 
    issuer: 'Cisco', 
    date: 'January 23, 2023',
    description: 'Introductory knowledge of cybersecurity, including global implications of cyber threats, vulnerabilities and threat detection, and defense strategies.',
    link: 'https://www.credly.com/badges/5ce6a05e-5b24-418e-a719-e37163680552',
    badge: '/images/I2CS__1_.png',
    isCertificate: true
  },
  { 
    id: 2, 
    name: 'Arduino-Based Post-Harvest Rice Dryer and Peeling Machine', 
    issuer: 'STI College San Pablo, Philippines', 
    date: 'June 2023',
    description: 'Certificate of Completion for developing an Arduino-based capstone project that automates rice grain drying and husking for Lamot 1 Irrigators Association, Calauan, Laguna. The system uses Arduino Mega microcontroller to provide a cost-effective and sustainable solution for local farmers.',
    link: '#',
    badge: '/images/arduino-cert.jpg',
    isCertificate: true
  },
  { 
    id: 3, 
    name: 'BOSH Safety Officer 1', 
    issuer: 'WilSafe Training Center', 
    date: '2023',
    description: 'Certified Safety Officer Level 1 trained in occupational safety and health standards, workplace hazard identification, and safety management systems.',
    link: 'https://wilsafetrainingcenter.com/',
    badge: '/images/bosh-cert.png',
    isCertificate: true
  }
]

export default function Certifications(){
  return (
    <section id="certifications" className="container" style={{ marginTop: '5rem' }}>
      <h2>Certifications</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {certifications.map(cert => (
          <article 
            key={cert.id} 
            className="card"
            style={{ 
              padding: 'clamp(1rem, 3vw, 1.5rem)',
              display: 'flex',
              gap: 'clamp(1rem, 3vw, 2rem)',
              alignItems: 'flex-start',
              flexWrap: 'wrap'
            }}
          >
            {/* Certificate Badge */}
            <div style={{ 
              width: 'clamp(80px, 15vw, 120px)',
              height: 'clamp(80px, 15vw, 120px)',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              overflow: 'hidden'
            }}>
              <img 
                src={cert.badge} 
                alt={`${cert.name} badge`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: cert.isCertificate ? 'contain' : 'contain',
                  padding: '0.5rem'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span style="font-size: 2rem">📜</span>';
                }}
              />
            </div>

            {/* Certificate Details */}
            <div style={{ flex: 1, minWidth: 'min(250px, 100%)' }}>
              <h3 style={{ 
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
                fontWeight: 500,
                marginBottom: '0.25rem',
                color: 'var(--text-primary)'
              }}>
                {cert.name}
              </h3>
              <p style={{ 
                fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                color: 'var(--text-secondary)',
                marginBottom: '0.5rem'
              }}>
                {cert.issuer}
              </p>
              <p className="mono" style={{ 
                fontSize: 'clamp(0.7rem, 1.8vw, 0.75rem)',
                color: 'var(--text-tertiary)',
                marginBottom: '0.75rem'
              }}>
                Issued: {cert.date}
              </p>
              <p style={{ 
                fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                marginBottom: '0.75rem'
              }}>
                {cert.description}
              </p>
              {cert.link !== '#' && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="link-underline"
                  style={{ 
                    fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                    color: 'var(--text-secondary)',
                    display: 'inline-block'
                  }}
                >
                  view certificate ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
