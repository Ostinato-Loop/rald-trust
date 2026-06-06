export default function Verification() {
  const levels = [
    { level: 'Basic', badge: '✉', color: '#6B7A8D', req: ['Valid email address','Email verified via OTP'], unlocks: ['Messaging','DunaRald free content','Basic Loop browsing'] },
    { level: 'Phone Verified', badge: '📱', color: '#00BFFF', req: ['Basic level complete','Valid phone number','Phone verified via OTP'], unlocks: ['Phone-based 2FA','PayRald wallet (limited)','Loop seller listing (limited)'] },
    { level: 'Identity Verified', badge: '✓', color: '#00E5FF', req: ['Phone level complete','Government-issued ID: NIN slip, BVN document, or International Passport','Selfie with liveness check'], unlocks: ['Full PayRald access','Loop verified seller badge','High-value transactions','Business account creation'] },
    { level: 'Business Verified', badge: '⬡', color: '#00FF88', req: ['Identity level complete','CAC registration certificate (or equivalent regional business registration)','Business address verification'], unlocks: ['Verified business badge (all products)','Business email @company.rald.cloud','Enterprise API access','Priority support SLA'] },
  ]

  return (
    <div className="section">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#00E5FF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Verification</div>
          <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>Who is verified. How. Why.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 600, lineHeight: 1.75 }}>RALD's 4-tier verification system answers the fundamental question of every digital interaction: is this a real, verified person or business? Verification is always voluntary — but unlocks progressively more of the ecosystem.</p>
        </div>

        {/* Tier cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16, marginBottom: 60 }}>
          {levels.map((l, i) => (
            <div key={l.level} style={{ padding: '24px', borderRadius: 16, background: 'var(--surface)', border: `1px solid ${l.color}25` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${l.color}15`, border: `1px solid ${l.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{l.badge}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: l.color }}>Tier {i + 1}</div>
                  <div style={{ fontSize: 12, color: '#E8EDF3', fontWeight: 600 }}>{l.level}</div>
                </div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Requirements</div>
              {l.req.map(r => (
                <div key={r} style={{ fontSize: 12, color: 'var(--muted)', padding: '3px 0', display: 'flex', gap: 6 }}>
                  <span style={{ color: l.color, flexShrink: 0, fontSize: 10, marginTop: 3 }}>▸</span>{r}
                </div>
              ))}
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '14px 0 8px' }}>Unlocks</div>
              {l.unlocks.map(u => (
                <div key={u} style={{ fontSize: 12, color: 'var(--muted)', padding: '3px 0', display: 'flex', gap: 6 }}>
                  <span style={{ color: l.color, flexShrink: 0, fontSize: 10, marginTop: 3 }}>✓</span>{u}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Process */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3' }}>Verification process</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
          {[
            ['Submission', 'Submit credentials from app.rald.cloud → Verification. For identity verification, this means uploading your ID document and a selfie.'],
            ['Automated review', "RALD's verification system runs automated checks: document authenticity analysis, liveness detection, and government database cross-reference. Most complete in under 5 minutes."],
            ['Human review', 'If automated review cannot confirm a document with high confidence, a trained RALD verification specialist reviews manually. Manual reviews complete within 24 business hours.'],
            ['Badge issued', 'Once verified, your RALD Profile is updated with the verification badge. The badge is visible across all ecosystem products — no re-verification per product.'],
            ['Maintenance', 'Verification is valid until your documents expire. RALD notifies you 60 days before expiry. You re-verify with a new document — your history is preserved.'],
          ].map(([step, desc], i) => (
            <div key={step} style={{ display: 'flex', gap: 20, padding: '16px 20px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#00E5FF', flexShrink: 0 }}>{i + 1}</div>
              <div>
                <div style={{ fontWeight: 700, color: '#E8EDF3', fontSize: 13, marginBottom: 4 }}>{step}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Data handling */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3' }}>How verification data is handled</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
          {[
            ['Document encryption', 'Government ID images are encrypted with field-level encryption immediately on upload. Only the verification system can read them — not support staff.'],
            ['Minimal retention', 'ID document images are deleted after successful verification. We retain only the verification outcome, document type, and expiry date.'],
            ['No third-party sharing', 'Verification data is never shared with third parties, other RALD products, or any external identity services without your consent.'],
            ['Verification proof only', "RALD products receive a verification status signal ('identity_verified': true/false) — not your actual document or any document data."],
          ].map(([t,d]) => (
            <div key={t} style={{ padding: '16px 18px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#00E5FF', marginBottom: 6 }}>{t}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.65 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
