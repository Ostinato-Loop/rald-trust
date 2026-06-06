export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'var(--surface)', marginTop: 80 }}>
      <div className="container" style={{ padding: '48px 24px 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 10, color: 'var(--trust)' }}>RALD Trust Center</div>
            <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>RALD's public commitment to security, privacy, and transparency. No marketing. Just facts.</p>
          </div>
          {[
            { title: 'Trust', links: [['/', 'Overview'],['/security','Security'],['/privacy','Privacy']] },
            { title: 'Standards', links: [['/verification','Verification'],['/ai','AI Usage'],['/voice','Voice Licensing']] },
            { title: 'Reports', links: [['/transparency','Transparency']] },
            { title: 'RALD', links: [['https://learn.rald.cloud','Learn'],['https://status.rald.cloud','Status'],['https://app.rald.cloud','My Account']] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--subtle)', marginBottom: 14 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {col.links.map(([href, label]) => (
                  <a key={href} href={href} style={{ fontSize: 12, color: 'var(--muted)' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='#E8EDF3')}
                    onMouseLeave={e=>(e.currentTarget.style.color='var(--muted)')}>{label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <span style={{ fontSize: 11, color: 'var(--subtle)' }}>© 2026 RALD · LILCKY STUDIO LIMITED · Nigeria</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="mailto:privacy@rald.cloud" style={{ fontSize: 11, color: 'var(--subtle)' }}>privacy@rald.cloud</a>
            <a href="mailto:security@rald.cloud" style={{ fontSize: 11, color: 'var(--subtle)' }}>security@rald.cloud</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
