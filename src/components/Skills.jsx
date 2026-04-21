import { skills } from '../data'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function Skills() {
  const getDeviconClass = (name) => {
    const map = {
      'HTML5': 'devicon-html5-plain',
      'CSS3': 'devicon-css3-plain',
      'JavaScript': 'devicon-javascript-plain',
      'Bootstrap 5': 'devicon-bootstrap-plain',
      'Tailwind CSS': 'devicon-tailwindcss-original',
      'React': 'devicon-react-original',
      'Node.js': 'devicon-nodejs-plain',
      'Express.js': 'devicon-express-original',
      '.NET (MVC)': 'devicon-dotnetcore-plain',
      'C#': 'devicon-csharp-plain',
      'Python': 'devicon-python-plain',
      'REST APIs': null,
      'Php': 'devicon-php-plain',
      'Selenium': 'devicon-selenium-original',
      'SQL Server': 'devicon-microsoftsqlserver-plain',
      'MySQL': 'devicon-mysql-plain',
      'Git': 'devicon-git-plain',
      'GitHub': 'devicon-github-original',
      'VS Code': 'devicon-vscode-plain',
      'Visual Studio': 'devicon-visualstudio-plain',
      'Xampp': null,
      'npm': 'devicon-npm-original-wordmark',
      'Scrum': null,
      'Jira': 'devicon-jira-plain',
      'SSMS': null,
      'T-SQL': null,
      'Diseño relacional': null,
      'MongoDB': 'devicon-mongodb-plain'
    };
    return map[name] !== undefined ? map[name] : null;
  };

  return (
    <section id="skills" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem' }}>
          Habilidades & Tecnologías
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text2)', maxWidth: 600, margin: '0 auto' }}>
          Un conjunto completo de herramientas para construir aplicaciones modernas, desde el concepto hasta el despliegue.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
        {skills.map((cat, i) => {
          const Icon = Icons[cat.icon]
          return (
            <motion.div 
              key={cat.cat} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bento-card" 
              style={{ padding: '2rem', flex: '1 1 300px', maxWidth: '450px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <div style={{ color: 'var(--accent)' }}>
                  {Icon && <Icon size={22} />}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{cat.cat}</h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                {cat.items.map(item => {
                  const deviconClass = getDeviconClass(item);
                  return (
                    <div key={item} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                      {deviconClass ? (
                        <i className={`${deviconClass} ${item !== 'GitHub' ? 'colored' : ''}`} style={{ fontSize: '2.5rem', ...(item === 'GitHub' ? { color: 'var(--text)' } : {}) }}></i>
                      ) : item === 'Xampp' ? (
                        <img src="https://cdn.simpleicons.org/xampp/FB7A24" height="40" width="40" alt="Xampp" />
                      ) : item === 'T-SQL' ? (
                        <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <path d="M50 15 C20 15, 10 25, 10 35 L10 65 C10 75, 20 85, 50 85 C80 85, 90 75, 90 65 L90 35 C90 25, 80 15, 50 15 Z" fill="none" stroke="#CC292B" strokeWidth="6"/>
                          <path d="M10 35 C10 45, 20 55, 50 55 C80 55, 90 45, 90 35" fill="none" stroke="#CC292B" strokeWidth="6"/>
                          <text x="50" y="72" fontSize="28" fontWeight="bold" fill="#CC292B" textAnchor="middle" fontFamily="sans-serif">T</text>
                        </svg>
                      ) : item === 'REST APIs' ? (
                        <Icons.Network size={40} color="#6366f1" />
                      ) : (
                        <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                           <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text2)' }}>{item.substring(0, 2).toUpperCase()}</span>
                        </div>
                      )}
                      <span style={{ fontSize: '0.8rem', color: 'var(--text2)', fontWeight: 500, textAlign: 'center' }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

