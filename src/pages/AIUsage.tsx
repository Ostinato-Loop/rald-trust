export default function AIUsage() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#FFD400', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>AI Usage Policy</div>
          <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>AI that serves people. Not the other way around.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 640, lineHeight: 1.75 }}>RALD uses two AI systems — Wizmac and Sekani. Neither is autonomous. Both operate under strict rules, mandatory human oversight, and full audit logging. This page documents exactly what they do, what they cannot do, and how your data is governed within them.</p>
        </div>

        {[
          { system: 'Wizmac', color: '#00E5FF', role: 'Permanent Knowledge Graph', desc: "RALD's institutional memory system. Stores verified ecosystem knowledge — product documentation, policies, architectural decisions. NOT a decision engine. NOT a user-facing assistant.", items: [
            ['What it stores', 'Ecosystem knowledge: product docs, policy documents, architectural decisions, trust records. Does not store personal user data.'],
            ['What it does not do', 'Does not interact with users. Does not take autonomous action. Does not access user accounts, messages, or transactions.'],
            ['Who can access it', 'Authorized RALD engineering and trust team members, and the Sekani orchestration system for knowledge retrieval.'],
            ['Oversight', 'New knowledge requires human approval. RALD trust team can quarantine or remove any item without a code deployment.'],
          ]},
          { system: 'Sekani', color: '#A855F7', role: 'AI Orchestration Layer', desc: "RALD's event-driven AI coordination system. Voice-first. Activates on specific triggers, processes events, takes defined actions, terminates. NOT a general AI assistant.", items: [
            ['What it does', 'Orchestrates AI-assisted operations: routes voice input through BBC, retrieves knowledge from Wizmac, coordinates ecosystem actions within defined boundaries.'],
            ['Human oversight gates', 'Consequential actions (payments, account changes, data modifications) require explicit user or operator confirmation. Sekani cannot bypass these gates.'],
            ['Session isolation', 'Sekani maintains context only within a single session. No cross-session memory by default. Each activation starts fresh.'],
            ['Kill switch', 'RALD trust team can deactivate any or all Sekani capabilities instantly — no code deployment required.'],
          ]},
          { system: 'BBC', color: '#FFD400', role: 'Linguistic Framework', desc: "Blanchard Blanquette Code — RALD's linguistic intelligence layer. Enables African-language understanding, cultural context, and voice interaction. Powers Sekani's voice processing.", items: [
            ['Language support', 'Designed for Nigerian and West African languages: Yoruba, Igbo, Hausa, Pidgin English, and Standard English. More languages in roadmap.'],
            ['Cultural context', 'BBC applies cultural and regional context to language understanding — not just translation. Understands idiom, tone, and regional nuance.'],
            ['Voice processing', 'BBC converts speech to structured intent. Audio is processed in-memory and not retained after transcription unless user has consented to voice history.'],
            ['No autonomous decisions', 'BBC is a processing layer — it does not make decisions. It provides structured input to Sekani, which operates under its own oversight rules.'],
          ]},
        ].map(s => (
          <div key={s.system} style={{ marginBottom: 52 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `${s.color}15`, border: `1px solid ${s.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: s.color, fontWeight: 800 }}>◈</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 900, color: s.color }}>{s.system}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{s.role}</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, paddingLeft: 54 }}>{s.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {s.items.map(([t, d]) => (
                <div key={t} style={{ padding: '16px 20px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: s.color, minWidth: 160, flexShrink: 0 }}>{t}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ padding: '28px', borderRadius: 16, background: 'rgba(255,212,0,0.04)', border: '1px solid rgba(255,212,0,0.15)' }}>
          <h2 style={{ fontWeight: 800, fontSize: 16, marginBottom: 16, color: '#E8EDF3' }}>Your AI controls</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12 }}>
            {[
              ['Opt out of AI features', 'app.rald.cloud → Privacy → AI Features → Disable. Removes your data from all AI inference pipelines — not just the UI.'],
              ['Request AI decision explanation', 'If an AI-assisted decision has affected your account, email privacy@rald.cloud. You have the right to a human explanation.'],
              ['Export AI interaction history', 'When voice history is launched (opt-in), you can export all transcripts from app.rald.cloud → Privacy → Export.'],
              ['Right to human review', 'Any AI-assisted moderation decision can be escalated to a human reviewer. Contact support@rald.cloud with the decision reference.'],
            ].map(([t,d]) => (
              <div key={t} style={{ padding: '14px 16px', borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: '#FFD400', marginBottom: 5 }}>{t}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
