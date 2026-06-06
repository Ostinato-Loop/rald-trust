import { Route, Switch } from 'wouter'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Security from './pages/Security'
import Privacy from './pages/Privacy'
import Verification from './pages/Verification'
import AIUsage from './pages/AIUsage'
import VoiceLicensing from './pages/VoiceLicensing'
import Transparency from './pages/Transparency'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <main style={{ flex: 1 }}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/security" component={Security} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/verification" component={Verification} />
          <Route path="/ai" component={AIUsage} />
          <Route path="/voice" component={VoiceLicensing} />
          <Route path="/transparency" component={Transparency} />
          <Route>
            <div style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, textAlign: 'center', padding: 40 }}>
              <div style={{ fontSize: 64, fontWeight: 900, color: 'var(--subtle)' }}>404</div>
              <a href="/" style={{ padding: '10px 24px', borderRadius: 30, background: 'var(--trust)', color: '#000', fontWeight: 700, fontSize: 13 }}>Back to Trust Center</a>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  )
}
