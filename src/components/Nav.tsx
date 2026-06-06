import { useLocation } from 'wouter'

const LINKS = [
  { href: '/', label: 'Overview' },
  { href: '/security', label: 'Security' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/verification', label: 'Verification' },
  { href: '/ai', label: 'AI Usage' },
  { href: '/voice', label: 'Voice Licensing' },
  { href: '/transparency', label: 'Transparency' },
]

export default function Nav() {
  const [loc] = useLocation()
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(5,10,15,0.92)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 60, gap: 0, justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 900, fontSize: 16, letterSpacing: '-0.02em', flexShrink: 0 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#00E5FF,#0066FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>✦</div>
          <span style={{ color: '#E8EDF3' }}>RALD</span>
          <span style={{ color: 'var(--trust)' }}>Trust</span>
        </a>
        <div style={{ display: 'flex', gap: 2, alignItems: 'center', overflowX: 'auto' }} className="trust-nav">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap',
              color: loc === l.href ? '#E8EDF3' : 'var(--muted)',
              background: loc === l.href ? 'rgba(0,229,255,0.08)' : 'transparent',
              borderBottom: loc === l.href ? '2px solid var(--trust)' : '2px solid transparent',
              transition: 'all 0.15s',
            }}>{l.label}</a>
          ))}
        </div>
        <a href="https://rald.cloud" style={{ padding: '7px 16px', borderRadius: 30, fontSize: 12, fontWeight: 700, border: '1px solid rgba(255,255,255,0.1)', color: 'var(--muted)', flexShrink: 0 }}>rald.cloud →</a>
      </div>
      <style>{`.trust-nav::-webkit-scrollbar{display:none}`}</style>
    </nav>
  )
}
