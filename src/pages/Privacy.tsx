function Block({ title, color, items }: { title: string; color: string; items: [string,string][] }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 4, height: 20, borderRadius: 2, background: color, display: 'inline-block', flexShrink: 0 }} />{title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(([t,d]) => (
          <div key={t} style={{ padding: '18px 22px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: color, minWidth: 180, flexShrink: 0 }}>{t}</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Privacy() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#A855F7', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Privacy</div>
          <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>Your data. Your control. Always.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.75, maxWidth: 620 }}>RALD's privacy policy is not a legal document designed to obscure what we do with your data. It is a plain-language commitment. We collect what is necessary, protect it rigorously, and give you complete visibility and control.</p>
        </div>

        <div style={{ padding: '20px 24px', borderRadius: 14, background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.2)', marginBottom: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20 }}>
          {[
            ['Data Controller', 'LILCKY STUDIO LIMITED'],
            ['Jurisdiction', 'Federal Republic of Nigeria'],
            ['Primary Law', 'NDPR 2019'],
            ['Privacy Officer', 'privacy@rald.cloud'],
            ['Last Updated', 'June 2026'],
            ['Effective', 'Immediately'],
          ].map(([k,v]) => (
            <div key={k}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{k}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#E8EDF3' }}>{v}</div>
            </div>
          ))}
        </div>

        <Block color="#A855F7" title="What we collect and why" items={[
          ['Account data', 'Email address, phone number (optional at registration), hashed password, account creation date. Required to operate your account.'],
          ['Profile data', 'Display name, bio, profile photo — all optional except email. Government ID collected only during voluntary identity verification.'],
          ['Device & session data', 'IP address, device type, browser, operating system, session timestamps. Used for security (detecting unauthorized access). Retained 90 days.'],
          ['Product usage data', 'Interactions with RALD products — pages visited, features used, actions taken. Used to improve the ecosystem. Never sold.'],
          ['Communications', 'Content of support communications is stored to provide assistance and improve support quality.'],
        ]} />

        <Block color="#A855F7" title="What we never do" items={[
          ['Sell your data', 'RALD does not sell personal data to any third party. This is an unconditional commitment — not subject to business circumstances.'],
          ['Share without consent', 'Personal data is not shared with companies outside the RALD ecosystem without your explicit, informed consent.'],
          ['Profile for advertising', 'We do not build advertising profiles. We do not share data with advertising networks. There are no third-party tracking pixels on RALD properties.'],
          ['Read E2EE messages', 'End-to-end encrypted messages cannot be read by RALD. Message content is never stored unencrypted. We cannot comply with requests for E2EE message content.'],
          ['Use your data to train AI without consent', 'User-generated content and personal data are not used to train AI models without explicit opt-in consent.'],
        ]} />

        <Block color="#A855F7" title="Your rights" items={[
          ['Access', 'Request a full copy of all data RALD holds about you. Available from app.rald.cloud → Privacy → Request Data Export.'],
          ['Correction', 'Correct any inaccurate personal data. Available from app.rald.cloud → Profile.'],
          ['Deletion', 'Request permanent deletion of your account and all associated data. Data purged within 30 days. Some data retained for legal compliance for up to 7 years.'],
          ['Restriction', 'Restrict how specific data is processed — for example, opt out of usage analytics from app.rald.cloud → Privacy → Preferences.'],
          ['Portability', 'Export your data in machine-readable JSON format from app.rald.cloud → Privacy → Export.'],
          ['Objection', 'Object to specific data processing activities. Email privacy@rald.cloud with your objection and we will respond within 30 days.'],
        ]} />

        <Block color="#A855F7" title="Data residency & retention" items={[
          ['Nigerian users', "User data belonging to Nigerian accounts is stored in Nigeria-region cloud infrastructure in compliance with NDPR's data localisation requirements."],
          ['Cross-border transfers', "Where data must cross borders (e.g., Cloudflare's global CDN), it is protected by Standard Contractual Clauses and equivalent transfer safeguards."],
          ['Active accounts', 'Data is retained while your account is active and for 30 days after deletion to allow recovery if deletion was accidental.'],
          ['Session data', 'Session and device data is retained for 90 days, then automatically purged.'],
          ['Legal retention', 'Some data may be retained for up to 7 years where required by Nigerian law (financial records, audit logs). This subset is clearly defined and minimal.'],
        ]} />

        <div style={{ padding: '24px 28px', borderRadius: 14, background: 'rgba(168,85,247,0.04)', border: '1px solid rgba(168,85,247,0.2)', marginTop: 8, textAlign: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Privacy questions or rights requests?</div>
          <a href="mailto:privacy@rald.cloud" style={{ color: '#A855F7', fontWeight: 700, fontSize: 13 }}>privacy@rald.cloud</a>
          <span style={{ color: 'var(--subtle)', margin: '0 12px' }}>·</span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>We respond within 30 days. Usually much faster.</span>
        </div>
      </div>
    </div>
  )
}
