import { skills } from '../data'
import { ICONS } from '../data/icons'
import { motion } from 'framer-motion'
import { useContent } from '../hooks/useContent'
import SectionHeader from './SectionHeader'

function IconTile({ children }) {
  return (
    <div
      style={{
        width: 56,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        transition: 'transform 0.2s, border-color 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)' }}
    >
      {children}
    </div>
  )
}

export default function Skills() {
  const { skillCategories, sections } = useContent()

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
      'PostgreSQL': 'devicon-postgresql-plain',
      'Git': 'devicon-git-plain',
      'GitHub': 'devicon-github-original',
      'VS Code': 'devicon-vscode-plain',
      'Visual Studio': 'devicon-visualstudio-plain',
      'Xampp': null,
      'npm': 'devicon-npm-original-wordmark',
      'Scrum': null,
      'Jira': 'devicon-jira-plain',
      'SSMS': null,
      'Diseño relacional': null,
      'MongoDB': 'devicon-mongodb-plain'
    };
    return map[name] !== undefined ? map[name] : null;
  };

  return (
    <section id="skills" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
      <SectionHeader
        label={sections.skills.label}
        title={sections.skills.title}
        italic={sections.skills.italic}
        subtitle={sections.skills.subtitle}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {skills.map((cat, i) => {
          const Icon = ICONS[cat.icon]
          return (
            <motion.div
              key={cat.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bento-card"
              style={{ padding: '2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <div style={{ color: 'var(--accent)' }}>
                  {Icon && <Icon size={22} />}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{skillCategories[cat.cat] || cat.cat}</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                {cat.items.map(item => {
                  const deviconClass = getDeviconClass(item);
                  return (
                    <div key={item} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                      <IconTile>
                        {deviconClass ? (
                          <i className={`${deviconClass} ${item !== 'GitHub' ? 'colored' : ''}`} style={{ fontSize: '1.75rem', ...(item === 'GitHub' ? { color: 'var(--text)' } : {}) }}></i>
                        ) : item === 'Xampp' ? (
                          <img src="https://cdn.simpleicons.org/xampp/FB7A24" height="28" width="28" alt="Xampp" />
                        ) : item === 'REST APIs' ? (
                          <ICONS.Network size={26} color="#6366f1" />
                        ) : (
                          <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--text2)' }}>{item.substring(0, 2).toUpperCase()}</span>
                        )}
                      </IconTile>
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
