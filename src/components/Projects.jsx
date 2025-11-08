import { useState, useEffect } from 'react'

const sample = [
{ 
  id: 1, 
  title: 'Build a Panini Mastery Mode', 
  desc: 'Fast-paced puzzle game teaching students how to decompose composite figures into simpler shapes. Navigate through vibrant Italian-themed kitchens, make and cook Paninis perfectly, and learn about composite figures through delicious sandwiches.', 
  tech: 'Lua, Roblox Studio', 
  link: 'https://www.roblox.com/games/91837729663176/Build-a-Panini-Mastery-Mode', 
  images: ['/images/panini-1.jpg', '/images/panini-2.jpg', '/images/panini-3.jpg'] 
},
{ 
  id: 2, 
  title: 'Cube Bites Mastery Mode', 
  desc: 'Interactive learning experience where students get the correct box by volume, arrange different flavors of unit-cube shaped sweets inside boxes, and match the volume of liquid from dispensers to cups.', 
  tech: 'Lua, Roblox Studio', 
  link: 'https://www.roblox.com/games/129471440780453/Cube-Bites-Mastery-Mode', 
  images: ['/images/cube-1.jpg', '/images/cube-2.jpg', '/images/cube-3.jpg'] 
},
{ 
  id: 3, 
  title: 'Angle Explorer Mastery Mode', 
  desc: 'Adventure learning game where students explore ancient ruins and find secrets within the pyramid. Test knowledge with naming, measuring, and drawing of angles to unlock doors and reach the last room of each floor to gather treasures.', 
  tech: 'Lua, Roblox Studio', 
  link: 'https://www.roblox.com/games/92086969078165/Angle-Explorer-Mastery-Mode', 
  images: ['/images/angle-1.jpg', '/images/angle-2.jpg', '/images/angle-3.jpg'] 
},
{ 
  id: 4, 
  title: 'Starline Mechanic Mastery Mode', 
  desc: 'Space-themed educational game where students repair spaceships with the power of parallel & perpendicular lines. Locate and fix broken parts by solving fun mini-games and master parallel & perpendicular lines while being the best space mechanic.', 
  tech: 'Lua, Roblox Studio', 
  link: 'https://www.roblox.com/games/134704523320302/Starline-Mechanic-Mastery-Mode', 
  images: ['/images/starline-1.jpg', '/images/starline-2.jpg', '/images/starline-3.jpg'] 
},
]

function ImageCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--bg-primary)'
    }}>
      {images.map((img, index) => (
        <img 
          key={index}
          src={img} 
          alt={`${title} - Image ${index + 1}`}
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '100%', 
            maxHeight: '100%', 
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            display: 'block'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            if (index === currentIndex) {
              e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; font-size: 2rem; color: var(--text-tertiary)">🎮</div>';
            }
          }}
        />
      ))}
      
      {/* Carousel indicators */}
      <div style={{ 
        position: 'absolute',
        bottom: '0.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.4rem',
        zIndex: 10
      }}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.5)',
              transition: 'background-color 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Projects(){
return (
<section id="projects" className="container">
<h2>Projects</h2>
<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
{sample.map(p => (
<article 
  key={p.id} 
  className="card"
  style={{ 
    padding: '0',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    minHeight: window.innerWidth <= 768 ? 'auto' : '200px'
  }}
>
  {/* Project Image */}
  <div style={{ 
    width: window.innerWidth <= 768 ? '100%' : '400px',
    aspectRatio: '16 / 9',
    flexShrink: 0,
    backgroundColor: 'var(--bg-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: window.innerWidth <= 768 ? 'none' : '1px solid var(--border-color)',
    borderBottom: window.innerWidth <= 768 ? '1px solid var(--border-color)' : 'none',
    overflow: 'hidden',
    position: 'relative'
  }}>
    <ImageCarousel images={p.images} title={p.title} />
  </div>

  {/* Project Content */}
  <div style={{ 
    flex: 1, 
    padding: 'clamp(1rem, 3vw, 1.5rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: 0
  }}>
    <div>
      <h3 style={{ 
        fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
        fontWeight: 500,
        marginBottom: '0.5rem',
        color: 'var(--text-primary)'
      }}>
        {p.title}
      </h3>
      <p style={{ 
        fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
        color: 'var(--text-secondary)',
        marginBottom: '0.75rem',
        lineHeight: '1.5'
      }}>
        {p.desc}
      </p>
      <p className="mono" style={{ 
        fontSize: 'clamp(0.7rem, 1.8vw, 0.75rem)',
        color: 'var(--text-tertiary)'
      }}>
        {p.tech}
      </p>
    </div>
    <div>
      <a 
        href={p.link} 
        target="_blank" 
        rel="noreferrer"
        className="link-underline"
        style={{ 
          fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
          color: 'var(--text-secondary)',
          display: 'inline-block',
          marginTop: '0.5rem'
        }}
      >
        view project ↗
      </a>
    </div>
  </div>
</article>
))}
</div>

{/* Additional projects note */}
<p style={{ 
  marginTop: '2rem',
  fontSize: '0.875rem',
  color: 'var(--text-tertiary)',
  textAlign: 'center',
  fontStyle: 'italic'
}}>
  + Many more educational Roblox games and projects
</p>
</section>
)
}