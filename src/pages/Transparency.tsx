export default function Transparency() {
  const year = new Date().getFullYear()
  return (
    <div className="section">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#00FF88', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Transparency</div>
          <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>We tell you what happens. All of it.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 620, lineHeight: 1.75 }}>Transparency reports, law enforcement request logs, security advisories, AI decisions — published semi-annually. If something affects our users, we say so.</p>
        </div>

        {/* Transparency report summary */}
        <div style={{ padding: '32px', borderRadius: 16, background: 'var(--surface)', border: '1px solid rgba(0,255,136,0.15)', marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#E8EDF3', marginBottom: 4 }}>Transparency Report — H1 {year}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Period: January 1 – June 30, {year} · Published: June {year}</div>
            </div>
            <span style={{ padding: '4px 14px', borderRadius: 20, background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', fontSize: 11, fontWeight: 700, color: '#00FF88' }}>Current</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 16 }}>
            {[
              { label: 'Law enforcement requests received', value: '0', color: '#00FF88' },
              { label: 'Data disclosed to law enforcement', value: '0', color: '#00FF88' },
              { label: 'Security advisories published', value: '0', color: '#00FF88' },
              { label: 'Data breaches', value: '0', color: '#00FF88' },
              { label: 'AI moderation actions', value: '47', color: '#FFD400', note: 'All reviewed by humans' },
              { label: 'Accounts suspended', value: '3', color: '#FF2E2E', note: 'Terms violation' },
            ].map(m => (
              <div key={m.label} style={{ padding: '16px', borderRadius: 12, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: m.color, marginBottom: 4 }}>{m.value}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5 }}>{m.label}</div>
                {m.note && <div style={{ fontSize: 10, color: m.color, marginTop: 4, fontWeight: 600 }}>{m.note}</div>}
              </div>
            ))}
          </div>
        </div>

        {[
          { title: 'Law enforcement requests', color: '#00FF88', items: [
            ['Our policy', "RALD complies with lawful requests from Nigerian authorities under Nigerian law. We do not comply with informal requests, requests from foreign governments without Nigerian legal basis, or requests we cannot verify as lawful."],
            ['What we require', 'A valid court order, warrant, or legal instrument under Nigerian law addressed to LILCKY STUDIO LIMITED. Informal emails and phone calls are declined.'],
            ['What we disclose', 'Only the minimum data specified in the legal instrument. We do not provide bulk data, speculative data, or data beyond the scope of the order.'],
            ['User notification', 'Where legally permitted, we notify affected users of requests before complying — giving them the opportunity to seek legal relief. We challenge overly broad or unlawful requests.'],
            ['E2EE exception', 'We cannot provide the contents of end-to-end encrypted messages — we do not hold the keys. We can confirm whether an account exists and provide non-content metadata if lawfully compelled.'],
          ]},
          { title: 'Data breach response', color: '#FF2E2E', items: [
            ['Detection', 'RALD maintains real-time anomaly detection across all production systems. Automated alerts trigger immediate incident response procedures.'],
            ['72-hour notification', 'In the event of a breach affecting personal data, RALD will notify affected users within 72 hours of becoming aware of the breach — in compliance with NDPR.'],
            ['NDPR reporting', "Breaches will be reported to the Nigeria Data Protection Bureau (NDPB) within the required timeframe."],
            ['What we disclose', 'What data was affected, how, when we discovered it, what steps we took, and what users should do. No minimization, no vague language.'],
            ['Post-incident review', 'Every security incident is followed by a root cause analysis. Findings are used to improve controls — and significant findings are published in our security advisory log.'],
          ]},
          { title: 'AI and automated decision transparency', color: '#FFD400', items: [
            ['When AI assists in decisions', 'AI-assisted decisions (recommendations, moderation flags, fraud alerts) are disclosed to affected users in the relevant product interface.'],
            ['Human review availability', 'Any AI-assisted decision affecting your account can be escalated to a human reviewer. Contact support@rald.cloud with the decision reference ID.'],
            ['What we log', 'Every AI action is logged: system, model version, trigger event, confidence score, action taken, human reviewer (if applicable), outcome.'],
            ['Semi-annual publication', 'Aggregated AI moderation statistics are published in this transparency report. No individual user data is included.'],
          ]},
          { title: 'Publishing schedule', color: '#00BFFF', items: [
            ['H1 report', 'Published in June each year. Covers January – June.'],
            ['H2 report', 'Published in December each year. Covers July – December.'],
            ['Security advisories', 'Published within 90 days of a resolved vulnerability being disclosed. Immediate notification for critical zero-day issues.'],
            ['Extraordinary events', 'Significant incidents (breaches, major outages, large-scale enforcement actions) are communicated immediately — not held for the semi-annual report.'],
          ]},
        ].map(block => (
          <div key={block.title} style={{ marginBottom: 44 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 4, height: 20, borderRadius: 2, background: block.color, display: 'inline-block', flexShrink: 0 }} />{block.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {block.items.map(([t,d]) => (
                <div key={t} style={{ padding: '16px 20px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: block.color, minWidth: 180, flexShrink: 0 }}>{t}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
