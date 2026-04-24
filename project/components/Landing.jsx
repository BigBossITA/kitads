
// Landing Page Component for KitAds
const Landing = ({ onEnterApp }) => {
  const [openFaq, setOpenFaq] = React.useState(null);

  const faqs = [
  { q: "Come funziona KitAds?", a: "Carica le foto del tuo prodotto o incolla il link del tuo store. Scegli un presentatore, descrivi la scena se vuoi, seleziona lo stile e clicca Genera. In pochi secondi hai video e grafiche pronti per la pubblicazione." },
  { q: "Devo avere competenze tecniche?", a: "No. KitAds è pensato per chi vende prodotti, non per chi conosce l'AI. Nessun prompt da scrivere, nessuno strumento da configurare." },
  { q: "Quali formati ricevo?", a: "Reel verticale 9:16, TikTok Clip, Video spot 16:9, Post Instagram, Story, Banner Feed, Post quadrato, Cover Facebook, Banner orizzontale. Tutti generati in automatico." },
  { q: "Posso usare il mio presentatore o la mia voce?", a: "Sì. Puoi scegliere un presentatore dalla libreria o creare il tuo clone digitale. Puoi anche clonare la tua voce per rendere ogni contenuto autentico e disponibile in qualsiasi lingua." },
  { q: "In quante lingue posso generare i contenuti?", a: "In qualsiasi lingua. KitAds genera contenuti multilingua senza bisogno di doppiaggio manuale." },
  { q: "C'è un piano gratuito?", a: "Sì. Puoi provare KitAds gratuitamente senza carta di credito e senza abbonamento." }];


  const features = [
  { title: "Velocità", sub: "Nessun prompt da scrivere", body: "Carica il prodotto e genera in secondi." },
  { title: "Semplicità", sub: "Basta un link o tre foto", body: "Al resto pensa KitAds." },
  { title: "Multi-canale", sub: "Tutti i formati", body: "Reel, TikTok, Meta Ads, YouTube. Tutti i formati, in una sola piattaforma." }];


  return (
    <div style={landingStyles.root}>
      {/* NAV */}
      <nav style={landingStyles.nav}>
        <div style={landingStyles.navInner}>
          <div style={landingStyles.logo}>
            <img src="uploads/logo-bianco-kitads-8fff61f2.png" alt="KitAds" style={{ height: 32, objectFit: 'contain', filter: 'brightness(10)' }} />
          </div>
          <div style={landingStyles.navLinks}>
            <a href="#chi-siamo" style={landingStyles.navLink}>Chi siamo</a>
            <a href="#faq" style={landingStyles.navLink}>FAQ</a>
            <a href="https://kitads.it/contatti/" style={landingStyles.navLink}>Contatti</a>
          </div>
          <button style={{ ...landingStyles.ctaBtn, fontFamily: "Lato" }} onClick={onEnterApp}>Prova gratis</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={landingStyles.hero}>
        <div style={landingStyles.heroBadge}>
          <span style={landingStyles.heroBadgeDot}>🚀</span>
          La nuova era dell'advertising
        </div>
        <h1 style={landingStyles.heroH1}>
          Ads made<br />
          <span style={landingStyles.heroSpan}>simple.</span>
        </h1>
        <p style={landingStyles.heroSub}>
          Carica il tuo prodotto, scegli un presentatore, genera video e grafiche pronti per TikTok, Instagram e Meta Ads. In pochi secondi, senza competenze tecniche.
        </p>
        <div style={landingStyles.heroCtas}>
          <button style={{ ...landingStyles.ctaBtn, fontFamily: "Lato" }} onClick={onEnterApp}>Prova gratis</button>
          <a href="#scopri" style={landingStyles.ctaSecondary}>Scopri di più</a>
        </div>

        {/* Dashboard preview mockup */}
        <div style={landingStyles.heroPreview}>
          <div style={landingStyles.previewBar}>
            <span style={{ ...landingStyles.previewDot, background: '#FF5F57' }} />
            <span style={{ ...landingStyles.previewDot, background: '#FFBD2E' }} />
            <span style={{ ...landingStyles.previewDot, background: '#28C840' }} />
            <span style={landingStyles.previewTitle}>KitAds Studio</span>
          </div>
          <div style={landingStyles.previewBody}>
            {/* Sidebar mini */}
            <div style={landingStyles.previewSidebar}>
              {['Home', 'Crea contenuto', 'I miei prodotti', 'Presentatori', 'I miei contenuti', 'Impostazioni'].map((item, i) =>
              <div key={item} style={{ ...landingStyles.previewSideItem, ...(i === 0 ? landingStyles.previewSideActive : {}) }}>
                  <span style={landingStyles.previewSideDot} />
                  {item}
                </div>
              )}
            </div>
            {/* Main area */}
            <div style={landingStyles.previewMain}>
              <div style={landingStyles.previewGrid}>
                {/* Video card */}
                <div style={landingStyles.previewCard}>
                  <div style={landingStyles.previewCardMedia}>
                    <img src="uploads/FOX.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.85 }} />
                    <div style={landingStyles.previewPlayBtn}>▶</div>
                  </div>
                  <div style={landingStyles.previewCardInfo}>
                    <span style={landingStyles.previewCardTag}>Video Reel</span>
                    <span style={landingStyles.previewCardStatus}>● Completato</span>
                  </div>
                </div>
                <div style={landingStyles.previewCard}>
                  <div style={{ ...landingStyles.previewCardMedia, background: 'linear-gradient(135deg,#1E1B4B,#2D1B69)' }}>
                    <div style={landingStyles.previewAvatarCircle}>AI</div>
                    <div style={{ ...landingStyles.previewPlayBtn, opacity: 0.6 }}>▶</div>
                  </div>
                  <div style={landingStyles.previewCardInfo}>
                    <span style={landingStyles.previewCardTag}>Avatar Spot</span>
                    <span style={{ ...landingStyles.previewCardStatus, color: '#F97316' }}>● Processing</span>
                  </div>
                </div>
                <div style={landingStyles.previewCard}>
                  <div style={{ ...landingStyles.previewCardMedia, background: 'linear-gradient(135deg,#0F0E26,#1a183a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={landingStyles.previewStaticAd}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: '#5B4FCF', marginBottom: 6 }} />
                      <div style={{ width: '80%', height: 4, borderRadius: 4, background: '#2A2760', marginBottom: 4 }} />
                      <div style={{ width: '60%', height: 4, borderRadius: 4, background: '#2A2760' }} />
                    </div>
                  </div>
                  <div style={landingStyles.previewCardInfo}>
                    <span style={landingStyles.previewCardTag}>Post Social</span>
                    <span style={landingStyles.previewCardStatus}>● Completato</span>
                  </div>
                </div>
              </div>
              {/* Progress bar example */}
              <div style={landingStyles.previewProgress}>
                <div style={landingStyles.previewProgressLabel}>
                  <span style={{ color: '#8880B0', fontSize: 11 }}>Generazione in corso...</span>
                  <span style={{ color: '#F97316', fontSize: 11 }}>73%</span>
                </div>
                <div style={landingStyles.previewProgressBar}>
                  <div style={{ ...landingStyles.previewProgressFill, width: '73%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVITY SECTION */}
      <section id="scopri" style={landingStyles.section}>
        <div style={landingStyles.sectionLabel}>Il tuo prodotto ovunque, in ogni lingua.</div>
        <h2 style={landingStyles.sectionH2}>Basta immaginare. È il momento di generare.</h2>
        <p style={landingStyles.sectionSub}>Scegli lo stile, seleziona il presentatore, descrivi la scena. KitAds genera tutto.</p>

        {/* Output grid */}
        <div style={landingStyles.outputGrid}>
          {[
          { label: 'Video Reel', aspect: '9/16', bg: 'linear-gradient(160deg,#1a1040,#2d1b69)' },
          { label: 'TikTok Clip', aspect: '9/16', bg: 'linear-gradient(160deg,#0d1a2d,#1a3a5c)' },
          { label: 'Instagram Post', aspect: '1/1', bg: 'linear-gradient(160deg,#2d0f1a,#5c1a3a)' },
          { label: 'Video Spot', aspect: '16/9', bg: 'linear-gradient(160deg,#1a2d0f,#3a5c1a)' }].
          map((card) =>
          <div key={card.label} style={{ ...landingStyles.outputCard, background: card.bg }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={landingStyles.outputCardPlaceholder}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                    <polygon points="13,10 24,16 13,22" fill="rgba(255,255,255,0.3)" />
                  </svg>
                </div>
              </div>
              <div style={landingStyles.outputCardLabel}>{card.label}</div>
            </div>
          )}
        </div>
      </section>

      {/* HUMAN CREATIVITY SECTION */}
      <section style={landingStyles.sectionDark}>
        <div style={landingStyles.twoCol}>
          <div style={landingStyles.twoColText}>
            <h2 style={{ ...landingStyles.sectionH2, textAlign: 'left', fontSize: 42 }}>Video spot, reel verticali,<br />clip TikTok e grafiche statiche.</h2>
            <p style={{ ...landingStyles.sectionSub, textAlign: 'left', maxWidth: 480 }}>
              Tutto generato dall'AI, pronto per essere pubblicato.
            </p>
            <button style={{ ...landingStyles.ctaBtn, marginTop: 32 }} onClick={onEnterApp}>Prova gratis</button>
          </div>
          <div style={landingStyles.twoColVisual}>
            <div style={landingStyles.statsCard}>
              <div style={landingStyles.statItem}><span style={landingStyles.statNum}>3</span><span style={landingStyles.statLabel}>foto del prodotto</span></div>
              <div style={landingStyles.statDivider} />
              <div style={landingStyles.statItem}><span style={landingStyles.statNum}>5s</span><span style={landingStyles.statLabel}>clip gratuita</span></div>
              <div style={landingStyles.statDivider} />
              <div style={landingStyles.statItem}><span style={landingStyles.statNum}>24h</span><span style={landingStyles.statLabel}>consegna</span></div>
            </div>
            <p style={{ color: '#8880B0', fontSize: 14, textAlign: 'center', marginTop: 20, maxWidth: 300 }}>
              Carica un prodotto o incolla il link del tuo store. Il resto lo fa l'AI.
            </p>
          </div>
        </div>
      </section>

      {/* AVATAR SECTION */}
      <section style={landingStyles.section}>
        <h2 style={landingStyles.sectionH2}>Presentatori realistici parlanti</h2>
        <p style={landingStyles.sectionSub}>
          Scegli un presentatore dalla libreria o crea il tuo clone digitale. Parla in qualsiasi lingua, in qualsiasi stile.
        </p>
        {/* Avatar grid placeholder */}
        <div style={landingStyles.avatarGrid}>
          {['Realistico M', 'Realistico F', 'Anime Style', 'Fantasy', '3D Avatar', 'Corporate M', 'Corporate F', 'Custom Clone'].map((name, i) =>
          <div key={name} style={landingStyles.avatarCard}>
              <div style={{ ...landingStyles.avatarImg, background: `hsl(${240 + i * 15},50%,${18 + i * 2}%)` }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="16" r="8" fill="rgba(255,255,255,0.15)" />
                  <ellipse cx="20" cy="34" rx="12" ry="8" fill="rgba(255,255,255,0.1)" />
                </svg>
              </div>
              <div style={landingStyles.avatarName}>{name}</div>
            </div>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section style={landingStyles.sectionDark} id="chi-siamo">
        <div style={landingStyles.sectionLabel}>Il tuo prodotto ovunque, in ogni lingua.</div>
        <div style={landingStyles.featuresGrid}>
          {features.map((f) =>
          <div key={f.title} style={landingStyles.featureCard}>
              <div style={landingStyles.featureTitle}>{f.title}</div>
              <div style={landingStyles.featureSub}>{f.sub}</div>
              <p style={landingStyles.featureBody}>{f.body}</p>
            </div>
          )}
        </div>
      </section>

      {/* VIDEO SPOT SECTION */}
      <section style={landingStyles.section}>
        <h2 style={landingStyles.sectionH2}>Video spot professionali,<br />creati con l'AI.</h2>
        <p style={landingStyles.sectionSub} style={{ maxWidth: 680, margin: '0 auto', color: '#8880B0', textAlign: 'center', lineHeight: 1.8 }}>
          Non solo clip brevi: realizziamo video spot completi, strutturati e pensati per convertire. Dallo storytelling alla sceneggiatura, dalla voce narrante agli avatar realistici, fino al montaggio finale, ogni fase è ottimizzata con l'intelligenza artificiale e rifinita da professionisti.
        </p>
        <div style={landingStyles.spotCards}>
          {['Storytelling', 'Voce narrante', 'Avatar realistici', 'Montaggio finale'].map((step, i) =>
          <div key={step} style={landingStyles.spotStep}>
              <div style={landingStyles.spotStepNum}>0{i + 1}</div>
              <div style={landingStyles.spotStepLabel}>{step}</div>
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={landingStyles.ctaSection}>
        <h2 style={{ ...landingStyles.sectionH2, fontSize: 52 }}>Inizia oggi a produrre<br />contenuti pubblicitari efficaci.</h2>
        <p style={{ color: '#8880B0', fontSize: 18, marginTop: 20, lineHeight: 1.8 }}>
          Nessun impegno, nessuna carta, nessun abbonamento.
        </p>
        <button style={{ ...landingStyles.ctaBtn, fontSize: 18, padding: '16px 48px', marginTop: 40 }} onClick={onEnterApp}>Prova gratis</button>
      </section>

      {/* FAQ */}
      <section id="faq" style={landingStyles.section}>
        <h2 style={landingStyles.sectionH2}>FAQ</h2>
        <div style={landingStyles.faqList}>
          {faqs.map((f, i) =>
          <div key={i} style={landingStyles.faqItem} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div style={landingStyles.faqQ}>
                <span>{f.q}</span>
                <span style={{ color: '#5B4FCF', fontSize: 20 }}>{openFaq === i ? '−' : '+'}</span>
              </div>
              {openFaq === i && <p style={landingStyles.faqA}>{f.a}</p>}
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={landingStyles.footer}>
        <div style={landingStyles.footerInner}>
          <img src="uploads/logo-bianco-kitads-8fff61f2.png" alt="KitAds" style={{ height: 32, objectFit: 'contain', marginBottom: 16, filter: 'brightness(10)' }} />
          <p style={{ color: '#4A4470', fontSize: 13, maxWidth: 480, textAlign: 'center', lineHeight: 1.7 }}>
            KitAds personalizza modelli AI, non li vende. Supervisione umana, etica e trasparenza UE/Italia. Dati cancellabili su richiesta.
          </p>
          <p style={{ color: '#4A4470', fontSize: 12, marginTop: 16 }}>© 2026 KitAds™ è un marchio di Promptare. Tutti i diritti riservati.</p>
          <div style={landingStyles.footerLinks}>
            <a href="https://kitads.it/termini-e-condizioni/" style={landingStyles.footerLink}>Termini e condizioni</a>
            <a href="https://www.promptare.it/privacy-policy/" style={landingStyles.footerLink}>Privacy Policy</a>
            <a href="mailto:ciao@promptare.it" style={landingStyles.footerLink}>ciao@promptare.it</a>
          </div>
        </div>
      </footer>
    </div>);

};

const landingStyles = {
  root: { background: '#08071A', color: '#F0EFFE', fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: '100vh' },
  nav: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1E1B42', background: 'rgba(8,7,26,0.9)', backdropFilter: 'blur(20px)' },
  navInner: { maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', gap: 32 },
  logo: { flex: 1 },
  navLinks: { display: 'flex', gap: 32 },
  navLink: { color: '#8880B0', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' },
  ctaBtn: { background: 'linear-gradient(135deg, #5B4FCF, #7B6FEF)', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer', letterSpacing: '0.01em' },
  hero: { paddingTop: 160, paddingBottom: 120, textAlign: 'center', maxWidth: 1100, margin: '0 auto', padding: '160px 32px 120px' },
  heroBadge: { display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(91,79,207,0.12)', border: '1px solid rgba(91,79,207,0.3)', borderRadius: 100, padding: '6px 16px', fontSize: 13, color: '#8880B0', marginBottom: 32 },
  heroBadgeDot: { fontSize: 16 },
  heroH1: { fontSize: 96, fontWeight: 800, lineHeight: 1.0, margin: '0 0 24px', letterSpacing: '-0.04em' },
  heroSpan: { background: 'linear-gradient(135deg,#F97316,#FB923C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSub: { fontSize: 18, color: '#8880B0', lineHeight: 1.8, margin: '0 0 48px' },
  heroCtas: { display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 80 },
  ctaSecondary: { color: '#8880B0', textDecoration: 'none', fontSize: 14, fontWeight: 500 },
  heroPreview: { background: '#0F0E26', border: '1px solid #1E1B42', borderRadius: 16, overflow: 'hidden', maxWidth: 900, margin: '0 auto', boxShadow: '0 40px 120px rgba(91,79,207,0.2)' },
  previewBar: { background: '#0A0920', borderBottom: '1px solid #1E1B42', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 },
  previewDot: { width: 10, height: 10, borderRadius: '50%', display: 'inline-block' },
  previewTitle: { flex: 1, textAlign: 'center', fontSize: 12, color: '#4A4470' },
  previewBody: { display: 'flex', height: 380 },
  previewSidebar: { width: 160, borderRight: '1px solid #1E1B42', padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4 },
  previewSideItem: { padding: '8px 12px', borderRadius: 8, fontSize: 12, color: '#8880B0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 },
  previewSideActive: { background: 'rgba(91,79,207,0.15)', color: '#7B6FEF' },
  previewSideDot: { width: 6, height: 6, borderRadius: '50%', background: 'currentColor', opacity: 0.5 },
  previewMain: { flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 16 },
  previewGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, flex: 1 },
  previewCard: { background: '#08071A', borderRadius: 10, overflow: 'hidden', border: '1px solid #1E1B42' },
  previewCardMedia: { height: 140, background: 'linear-gradient(135deg,#0d0c25,#1a1840)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  previewPlayBtn: { position: 'absolute', bottom: 10, right: 10, background: 'rgba(255,255,255,0.1)', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff' },
  previewAvatarCircle: { width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg,#5B4FCF,#7B6FEF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 },
  previewStaticAd: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 12 },
  previewCardInfo: { padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  previewCardTag: { fontSize: 10, color: '#5B4FCF', fontWeight: 600 },
  previewCardStatus: { fontSize: 10, color: '#28C840' },
  previewProgress: { background: '#0A0920', borderRadius: 8, padding: '10px 14px' },
  previewProgressLabel: { display: 'flex', justifyContent: 'space-between', marginBottom: 8 },
  previewProgressBar: { height: 4, background: '#1E1B42', borderRadius: 4 },
  previewProgressFill: { height: '100%', background: 'linear-gradient(90deg,#5B4FCF,#F97316)', borderRadius: 4 },
  section: { maxWidth: 1100, margin: '0 auto', padding: '120px 32px' },
  sectionDark: { background: '#0A0920', padding: '120px 32px' },
  sectionLabel: { textAlign: 'center', fontSize: 13, color: '#5B4FCF', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 },
  sectionH2: { fontSize: 56, fontWeight: 800, textAlign: 'center', lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 24px' },
  sectionSub: { textAlign: 'center', color: '#8880B0', fontSize: 17, lineHeight: 1.8, maxWidth: 640, margin: '0 auto' },
  outputGrid: { display: 'flex', gap: 16, marginTop: 64, justifyContent: 'center', flexWrap: 'wrap' },
  outputCard: { borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.06)', width: 200, height: 260 },
  outputCardPlaceholder: { opacity: 0.5 },
  outputCardLabel: { padding: '12px 16px', fontSize: 13, fontWeight: 600, color: '#8880B0', borderTop: '1px solid rgba(255,255,255,0.06)' },
  twoCol: { maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 80, alignItems: 'center' },
  twoColText: { flex: 1 },
  twoColVisual: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' },
  statsCard: { background: '#0F0E26', border: '1px solid #1E1B42', borderRadius: 20, padding: '32px 48px', display: 'flex', gap: 40, alignItems: 'center' },
  statItem: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 },
  statNum: { fontSize: 40, fontWeight: 800, color: '#F97316' },
  statLabel: { fontSize: 12, color: '#8880B0', textAlign: 'center' },
  statDivider: { width: 1, height: 48, background: '#1E1B42' },
  avatarGrid: { display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 16, marginTop: 64 },
  avatarCard: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 },
  avatarImg: { width: '100%', aspectRatio: '3/4', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #1E1B42' },
  avatarName: { fontSize: 11, color: '#8880B0', textAlign: 'center' },
  featuresGrid: { maxWidth: 1100, margin: '32px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 },
  featureCard: { background: '#0F0E26', border: '1px solid #1E1B42', borderRadius: 16, padding: 40 },
  featureTitle: { fontSize: 28, fontWeight: 800, marginBottom: 4 },
  featureSub: { color: '#5B4FCF', fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' },
  featureBody: { color: '#8880B0', fontSize: 15, lineHeight: 1.8, margin: 0 },
  spotCards: { display: 'flex', gap: 0, marginTop: 64, justifyContent: 'center', maxWidth: 900, margin: '64px auto 0' },
  spotStep: { flex: 1, padding: '32px 24px', borderLeft: '1px solid #1E1B42', '&:first-child': { borderLeft: 'none' } },
  spotStepNum: { fontSize: 40, fontWeight: 800, color: 'rgba(91,79,207,0.3)', marginBottom: 8 },
  spotStepLabel: { fontSize: 16, fontWeight: 600 },
  ctaSection: { textAlign: 'center', padding: '160px 32px', background: 'linear-gradient(180deg,#08071A 0%,#0D0B2A 100%)' },
  faqList: { maxWidth: 720, margin: '64px auto 0', display: 'flex', flexDirection: 'column', gap: 0 },
  faqItem: { borderBottom: '1px solid #1E1B42', padding: '24px 0', cursor: 'pointer' },
  faqQ: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 16, fontWeight: 600 },
  faqA: { color: '#8880B0', fontSize: 15, lineHeight: 1.8, marginTop: 16, margin: '16px 0 0' },
  footer: { borderTop: '1px solid #1E1B42', padding: '64px 32px' },
  footerInner: { maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  footerLinks: { display: 'flex', gap: 32, marginTop: 24 },
  footerLink: { color: '#4A4470', textDecoration: 'none', fontSize: 13 }
};

Object.assign(window, { Landing });