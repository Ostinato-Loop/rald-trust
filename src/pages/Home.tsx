const PILLARS = [
  { href: '/security', color: '#FF2E2E', icon: '🛡', title: 'Security', sub: 'Infrastructure & disclosure', bullets: ['AES-256 encryption at rest','TLS 1.2+ in transit','Cloudflare DDoS protection','48-hour vulnerability response SLA','NDPR + GDPR aligned'] },
  { href: '/privacy', color: '#A855F7', icon: '🔒', title: 'Privacy', sub: 'Data & rights', bullets: ['No data sold. Ever.','Collect only what is necessary','Nigerian data stays in Nigeria','Full user rights: access, delete, port','Privacy officer: privacy@rald.cloud'] },
  { href: '/verification', color: '#00E5FF', icon: '✓', title: 'Verification', sub: 'Identity & trust signals', bullets: ['4-tier verification system','Government ID (NIN, BVN, Passport)','Business CAC verification','Verification badge visible ecosystem-wide','Liveness detection + human review'] },
  { href: '/ai', color: '#FFD400', icon: '◈', title: 'AI Usage', sub: 'Wizmac & Sekani policy', bullets: ['Mandatory human oversight gates','No user data used in training without consent','Every AI action is logged & auditable','Users can opt out of all AI features','Kill switch available to trust team'] },
  { href: '/voice', color: '#FF4FAD', icon: '◎', title: 'Voice Licensing', sub: 'SIP & voice data', bullets: ['BBC linguistic framework — African languages','Consent required for all recording','Transcripts encrypted at rest','90-day default retention limit','Opt-out of voice history'] },
  { href: '/transparency', color: '#00FF88', icon: '◉', title: 'Transparency', sub: 'Reports & governance', bullets: ['Semi-annual transparency report','Law enforcement request log','Data breach notification: 72 hrs','AI model decision disclosure','Public security advisory log'] },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '88px 0 72px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 40% at 50% 0%,rgba(0,229,255,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 18px', borderRadius: 30, border: '1px solid rgba(0,229,255,0.2)', background: 'rgba(0,229,255,0.04)', marginBottom: 28 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#00FF88', boxShadow: '0 0 8px #00FF88', animation: 'pulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--trust)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Public Trust Center</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 22, lineHeight: 1.05 }}>
            <span className="gradient-text">Trust is not marketed.</span>
            <br />
            <span style={{ color: '#E8EDF3' }}>It is documented.</span>
          </h1>
          <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.75 }}>
            Every security commitment, every privacy standard, every AI policy, and every verification rule — written plainly, publicly, and permanently.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/privacy" style={{ padding: '11px 26px', borderRadius: 30, fontWeight: 700, fontSize: 13, background: 'var(--trust)', color: '#000' }}>Privacy Policy</a>
            <a href="/security" style={{ padding: '11px 26px', borderRadius: 30, fontWeight: 700, fontSize: 13, border: '1px solid rgba(255,255,255,0.1)', color: '#E8EDF3' }}>Security</a>
            <a href="/transparency" style={{ padding: '11px 26px', borderRadius: 30, fontWeight: 700, fontSize: 13, border: '1px solid rgba(255,255,255,0.1)', color: '#E8EDF3' }}>Transparency Report</a>
          </div>
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
      </section>

      {/* 6 trust pillars */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
            {PILLARS.map(p => (
              <a key={p.href} href={p.href} style={{
                display: 'block', padding: '28px 26px', borderRadius: 16,
                border: `1px solid ${p.color}20`, background: 'var(--surface)',
                transition: 'all 0.2s', textDecoration: 'none',
              }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor=p.color+'45';el.style.transform='translateY(-2px)'}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor=p.color+'20';el.style.transform='translateY(0)'}}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 22, color: p.color }}>{p.icon}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: '#E8EDF3' }}>{p.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>{p.sub}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 18 }}>
                  {p.bullets.map(b => (
                    <div key={b} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 12, color: 'var(--muted)' }}>
                      <span style={{ color: p.color, fontSize: 10, marginTop: 3, flexShrink: 0 }}>●</span>{b}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: p.color }}>Read full policy →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact bar */}
      <section style={{ padding: '48px 0', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
          {[
            { label: 'Privacy Questions', contact: 'privacy@rald.cloud', color: '#A855F7' },
            { label: 'Security Disclosures', contact: 'security@rald.cloud', color: '#FF2E2E' },
            { label: 'Legal Requests', contact: 'legal@rald.cloud', color: '#00E5FF' },
            { label: 'Business & Compliance', contact: 'business@rald.cloud', color: '#FF7A00' },
          ].map(c => (
            <div key={c.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{c.label}</div>
              <a href={`mailto:${c.contact}`} style={{ fontSize: 13, fontWeight: 700, color: c.color }}>{c.contact}</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
