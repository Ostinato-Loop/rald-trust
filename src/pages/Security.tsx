function Block({ title, color, items }: { title: string; color: string; items: [string,string][] }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 4, height: 20, borderRadius: 2, background: color, display: 'inline-block', flexShrink: 0 }} />{title}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 12 }}>
        {items.map(([t,d]) => (
          <div key={t} style={{ padding: '18px 20px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#E8EDF3', marginBottom: 6 }}>{t}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Security() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#FF2E2E', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Security</div>
          <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>Security by design. Not by checkbox.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 600, lineHeight: 1.75 }}>RALD's security is not a compliance checkbox. Every system, every API, every data store is built with security as the first requirement — not an afterthought.</p>
        </div>

        <Block color="#FF2E2E" title="Infrastructure" items={[
          ['Hosting', 'Cloudflare Pages and Workers — global edge network with built-in DDoS mitigation, anycast routing, and automatic failover. No single point of failure.'],
          ['Encryption at rest', 'All data encrypted with AES-256. Sensitive fields (government IDs, payment credentials) use additional field-level encryption with separate key management.'],
          ['Encryption in transit', 'TLS 1.2 minimum enforced across all endpoints. HSTS headers set. TLS 1.0 and 1.1 permanently disabled. Certificate lifecycle managed by Cloudflare.'],
          ['Secrets management', 'API keys, signing keys, and credentials managed through Cloudflare Workers Secrets — never stored in code or environment files. Rotated quarterly or on demand.'],
          ['Network isolation', "Production systems are isolated from development and staging environments. No cross-environment data sharing."],
        ]} />

        <Block color="#FF2E2E" title="Authentication" items={[
          ['Password hashing', 'bcrypt with minimum cost factor 12. Passwords are never stored in plain text or logged at any point in the authentication flow.'],
          ['Rate limiting', 'Authentication endpoints are rate-limited per IP and per account. Repeated failures trigger CAPTCHA, then progressive lockouts.'],
          ['Session tokens', 'RS256 JWTs with short expiry. Refresh tokens rotate on every use. All sessions are individually addressable and revocable.'],
          ['Two-factor authentication', 'Email-based 2FA is live. TOTP authenticator app support (Google Authenticator, Authy) is in Phase I deployment.'],
          ['SSO tokens', 'SSO handoff tokens are single-use, signed, short-lived (60 seconds), and tied to a specific redirect URI. Replay attacks are impossible.'],
        ]} />

        <Block color="#FF2E2E" title="Application Security" items={[
          ['OWASP alignment', 'RALD applications are reviewed against the OWASP Top 10. Critical and high findings must be resolved before any production deployment.'],
          ['Dependency scanning', 'All npm and system dependencies are scanned for known CVEs on every build. Critical vulnerabilities block deployment.'],
          ['Content Security Policy', "All RALD web properties set a strict CSP header. Inline scripts are prohibited. Only RALD-origin resources are trusted."],
          ['CORS policy', 'CORS is set to explicit allow-lists per endpoint. No wildcard CORS in production. All cross-origin requests are validated.'],
          ['API authentication', 'Every API endpoint requires a valid JWT or API key. Unauthenticated requests are rejected at the gateway layer — no fallback to public access.'],
        ]} />

        <Block color="#FF2E2E" title="Vulnerability Disclosure" items={[
          ['How to report', 'Email security@rald.cloud with: description, steps to reproduce, affected component, and your contact information. PGP key available on request.'],
          ['Response SLA', 'We acknowledge every report within 48 hours. We provide a status update within 7 business days. We notify you when the issue is resolved.'],
          ['Credit policy', 'Responsible disclosures are credited publicly in our security advisory log (with your permission). We do not pursue legal action against good-faith researchers.'],
          ['Scope', 'In scope: all *.rald.cloud properties. Out of scope: third-party services (Cloudflare, Google Fonts, etc.) and social engineering attacks.'],
        ]} />

        <Block color="#FF2E2E" title="Compliance" items={[
          ['NDPR', "Aligned with Nigeria's National Data Protection Regulation (NDPR) 2019 and the Implementation Framework 2020. Nigerian user data is stored in Nigeria-region infrastructure."],
          ['GDPR', 'GDPR principles are applied to all user data as a baseline — regardless of geography. This includes data minimization, purpose limitation, and user rights.'],
          ['SOC 2 (planned)', 'SOC 2 Type II audit is on the 2025 roadmap. Target completion: Q4 2025.'],
          ['ISO 27001 (planned)', 'ISO 27001 certification is on the long-term security roadmap.'],
        ]} />

        <div style={{ padding: '28px 32px', borderRadius: 16, background: 'rgba(255,46,46,0.04)', border: '1px solid rgba(255,46,46,0.15)', textAlign: 'center', marginTop: 16 }}>
          <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>Found a vulnerability?</div>
          <p style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 20 }}>We take every report seriously. We respond within 48 hours. Responsible disclosure is always credited.</p>
          <a href="mailto:security@rald.cloud" style={{ padding: '10px 24px', borderRadius: 30, background: '#FF2E2E', color: '#fff', fontWeight: 700, fontSize: 13 }}>security@rald.cloud</a>
        </div>
      </div>
    </div>
  )
}
