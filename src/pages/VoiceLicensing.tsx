export default function VoiceLicensing() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#FF4FAD', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Voice Licensing</div>
          <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>Voice is personal. We treat it that way.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 620, lineHeight: 1.75 }}>Loop Voice and the BBC linguistic framework process spoken audio. This page documents exactly how voice data is captured, processed, stored, and protected — and what you can control.</p>
        </div>

        {[
          { title: 'What is captured', color: '#FF4FAD', items: [
            ['Inbound calls', 'When you call a Loop Voice business number, the audio stream is processed in real time to route your call. The audio itself is not stored unless recording is explicitly enabled.'],
            ['Voice commerce', 'When you interact with a voice storefront (order by phone), your spoken selections and payment confirmations are transcribed in-memory for the transaction.'],
            ['Sekani voice input', 'When you use a Sekani-powered voice feature, your speech is transcribed by BBC and passed to Sekani as text. The audio itself is processed in-memory only.'],
            ['Business recording', "Businesses can enable call recording on their Loop Voice lines. This requires: (1) a recorded disclosure to every caller, (2) the caller has not pressed the opt-out key, and (3) the business has accepted RALD's recording terms."],
          ]},
          { title: 'Consent framework', color: '#FF4FAD', items: [
            ['Caller disclosure', 'When call recording is enabled by a business, callers hear an automated disclosure before the conversation begins. There is no hidden recording.'],
            ['Opt-out mechanism', 'Callers can press a designated key (announced in the disclosure) to opt out of recording at any time. Their call continues unrecorded.'],
            ['Business acceptance', 'Businesses must accept RALD\'s Voice Recording Terms before enabling recording. They take on legal responsibility for compliance with applicable recording laws.'],
            ['No covert recording', 'RALD\'s infrastructure makes covert recording impossible — the disclosure and opt-out system is enforced at the platform level, not by business policy alone.'],
          ]},
          { title: 'Data handling', color: '#FF4FAD', items: [
            ['In-memory processing', 'All real-time voice processing (transcription, intent recognition, routing) occurs in-memory. Audio is not written to disk during processing.'],
            ['Transcript storage', 'When recording is enabled and the caller has not opted out, both audio and transcript are stored encrypted. Only the business account owner can access them.'],
            ['Encryption', 'Voice recordings and transcripts are encrypted at rest with AES-256. Access is controlled by RALD\'s permission system — support staff cannot read recordings.'],
            ['Default retention', 'Call records (metadata only: duration, timestamp, outcome) are retained for 90 days by default. Full recordings are retained for the period set by the business, up to a maximum of 365 days.'],
            ['Purge on request', 'Businesses can delete individual recordings or all recordings at any time from the Loop Voice console. Deletion is immediate and irreversible.'],
          ]},
          { title: 'BBC linguistic framework', color: '#FF4FAD', items: [
            ['What BBC is', 'Blanchard Blanquette Code is RALD\'s linguistic processing framework — not a public product, but the infrastructure that powers voice features across the ecosystem.'],
            ['Language scope', 'BBC is designed for Nigerian and West African linguistic reality: Standard English, Nigerian Pidgin English, Yoruba, Igbo, Hausa. Additional languages are in development.'],
            ['Cultural intelligence', 'BBC applies cultural and regional context to understanding speech — recognizing idiom, tone, and conversational norms specific to African contexts.'],
            ['No BBC data sharing', 'Voice data processed by BBC is never shared externally. BBC is RALD-internal infrastructure — there is no third-party voice processing involved.'],
            ['No BBC training on your calls', 'Your call recordings are not used to train BBC or any RALD AI model without your explicit written consent. Recorded calls belong to the business and the caller.'],
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
