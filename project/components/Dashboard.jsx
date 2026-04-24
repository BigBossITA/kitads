
// ─── MOCK DATA ───────────────────────────────────────────────────────────────
const MOCK_PRODUCTS = [
{
  id: 'p1',
  name: 'Bibita Energetica Volt',
  price: '€2.90',
  category: 'Bevande / Energy Drink',
  colors: ['#E8C84A', '#1A1A2E', '#E63946'],
  copy: ['Energia immediata', 'Zero zuccheri', 'Gusto intenso', 'Formato 250ml'],
  thumb: null,
  campaigns: [
  { id: 'c1', name: 'Lancio Spring 2026', style: 'Video dinamico', dest: 'TikTok & Reels', status: 'completed', outputs: 5, date: '20 Apr' },
  { id: 'c2', name: 'Meta Feed Promo', style: 'Avatar presenta prodotto', dest: 'Meta Ads', status: 'processing', outputs: 2, date: '23 Apr' }]

},
{
  id: 'p2',
  name: 'Scarpe Running Pro X',
  price: '€129.00',
  category: 'Abbigliamento / Footwear',
  colors: ['#FF6B35', '#1C1C2E', '#F5F5F5'],
  copy: ['Ammortizzazione avanzata', 'Peso piuma', 'Grip totale', 'Disponibile 36-47'],
  thumb: null,
  campaigns: [
  { id: 'c3', name: 'Brand Spot Q2', style: 'Video spot', dest: 'YouTube Pre-roll', status: 'completed', outputs: 3, date: '18 Apr' }]

}];


const STYLES = [
{ id: 'hyper', label: 'Video dinamico', desc: 'Transizioni veloci, energia pura', color: '#7C3AED', grad: 'linear-gradient(135deg,#3b1f6e,#7c3aed)' },
{ id: 'unboxing', label: 'Unboxing', desc: 'Rivelazione del prodotto, mani reali', color: '#F97316', grad: 'linear-gradient(135deg,#7c2d12,#f97316)' },
{ id: 'ugc', label: 'Avatar presenta prodotto', desc: 'Presentatore che parla, stile organico', color: '#10B981', grad: 'linear-gradient(135deg,#064e3b,#10b981)' },
{ id: 'brand', label: 'Video spot', desc: 'Cinematico, tono premium', color: '#3B82F6', grad: 'linear-gradient(135deg,#1e3a5f,#3b82f6)' }];


const SCENES = [
{ id: 'studio', label: 'Studio', sub: 'Sfondo neutro professionale', grad: 'linear-gradient(135deg,#1a1a2e,#2d2d4e)', emoji: '⬜' },
{ id: 'lifestyle', label: 'Lifestyle esterno', sub: 'Ambientazione naturale', grad: 'linear-gradient(135deg,#0d2818,#1a4a2e)', emoji: '🌿' },
{ id: 'kitchen', label: 'Cucina e Casa', sub: 'Setting domestico', grad: 'linear-gradient(135deg,#2a1a0d,#4a2e1a)', emoji: '🏠' },
{ id: 'branded', label: 'Background del tuo brand', sub: 'Colori del tuo brand', grad: 'linear-gradient(135deg,#1a0d2a,#3a1a5e)', emoji: '🎨' }];


const AVATARS = [
{ id: 1, name: 'Sofia', style: 'F · Realistica', col: '#2d1b69' }, { id: 2, name: 'Marco', style: 'M · Realistico', col: '#1a2d1b' },
{ id: 3, name: 'Yuki', style: 'Anime', col: '#2d1a1a' }, { id: 4, name: 'Atlas', style: 'Fantasy', col: '#1a1a2d' },
{ id: 5, name: 'Nova', style: '3D', col: '#1e2a1e' }, { id: 6, name: 'Alex', style: 'Corporate M', col: '#1a2020' }];


const PROCESS_STEPS = [
{ label: 'Analisi immagini prodotto', key: 'img' },
{ label: 'Rilevamento nome e prezzo', key: 'price' },
{ label: 'Classificazione categoria', key: 'cat' },
{ label: 'Estrazione palette colori', key: 'colors' },
{ label: 'Generazione testo pubblicitario', key: 'copy' }];


const STATIC_FORMATS = [
{ id: '1:1', label: '1:1', desc: 'Post quadrato' },
{ id: '4:5', label: '4:5', desc: 'Post verticale' },
{ id: '9:16', label: '9:16', desc: 'Story / Reel' },
{ id: '16:9', label: '16:9', desc: 'Banner orizzontale' }];


// ─── HELPERS ─────────────────────────────────────────────────────────────────
const StatusDot = ({ status }) => {
  const c = { completed: '#28C840', processing: '#F97316', draft: '#4A4470' };
  const l = { completed: 'Completata', processing: 'In elaborazione', draft: 'Bozza' };
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: c[status], background: c[status] + '18', border: `1px solid ${c[status]}33`, borderRadius: 100, padding: '3px 10px' }}>● {l[status]}</span>;
};

const RecommendedBadge = () => (
  <span style={{ position: 'absolute', top: 10, right: 10, background: 'linear-gradient(135deg,#5B4FCF,#7B6FEF)', borderRadius: 100, padding: '2px 10px', fontSize: 10, fontWeight: 700, color: '#fff', zIndex: 1 }}>
    Consigliato per te
  </span>
);

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────
const Sidebar = ({ products, activeProductId, setActiveProductId, onBackToLanding, credits, view, setView }) => {
  const [expanded, setExpanded] = React.useState({ 'p1': true, 'p2': false });
  return (
    <div style={DS.sidebar}>
      <div style={DS.sidebarTop}>
        <img src="uploads/logo-bianco-kitads-8fff61f2.png" alt="KitAds" style={{ cursor: 'pointer', filter: 'brightness(10)', objectFit: "contain", width: "35.9961px", height: "35.9961px" }} onClick={onBackToLanding} />
      </div>

      <div style={DS.sidebarSection}>
        <div style={DS.sidebarSectionLabel}>I miei prodotti</div>
        {products.map((p) =>
        <div key={p.id}>
            <div style={{ ...DS.sidebarProduct, ...(activeProductId === p.id && view === 'home' ? DS.sidebarProductActive : {}) }}
          onClick={() => { setActiveProductId(p.id); setView('home'); setExpanded((e) => ({ ...e, [p.id]: !e[p.id] })); }}>
              <div style={{ ...DS.sidebarProductDot, background: p.colors?.[0] || '#5B4FCF' }} />
              <span style={{ flex: 1, fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
              <span style={{ fontSize: 10, color: '#4A4470' }}>{expanded[p.id] ? '▾' : '▸'}</span>
            </div>
            {expanded[p.id] && p.campaigns.map((c) =>
          <div key={c.id} style={DS.sidebarCampaign}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: { completed: '#28C840', processing: '#F97316', draft: '#4A4470' }[c.status], flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: '#8880B0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.name}</span>
              </div>
          )}
          </div>
        )}
      </div>

      <div style={{ flex: 1 }} />

      <div style={DS.sidebarBottom}>
        <div
          style={{ ...DS.sidebarProduct, ...(view === 'settings' ? DS.sidebarProductActive : {}), marginBottom: 4 }}
          onClick={() => setView('settings')}>
          <span style={{ fontSize: 13, opacity: 0.5 }}>⚙</span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Impostazioni</span>
        </div>
        <div style={DS.creditsChip}>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#F97316' }}>{credits}</span>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700 }}>crediti</div>
            <div style={{ fontSize: 10, color: '#4A4470' }}>disponibili</div>
          </div>
        </div>
        <div style={DS.sidebarUser}>
          <div style={DS.userAvatar}>K</div>
          <div><div style={{ fontSize: 13, fontWeight: 600 }}>Kit User</div><div style={{ fontSize: 11, color: '#4A4470' }}>Free Plan</div></div>
        </div>
      </div>
    </div>);

};

// ─── TOP BAR ──────────────────────────────────────────────────────────────────
const TopBar = ({ onStart, bar }) => {
  return (
    <div style={DS.creationBarWrap}>
      <div style={DS.creationBar}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 4px' }}>
          {bar.productName ?
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px' }}>
              {bar.productFile ?
                <img src={bar.productFile} style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover' }} /> :
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#5B4FCF,#F97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>🔗</div>
              }
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#F0EFFE' }}>{bar.productName}</div>
                <div style={{ fontSize: 10, color: '#5B4FCF' }}>✓ prodotto caricato</div>
              </div>
            </div> :
            <div style={{ padding: '8px 12px', color: '#4A4470', fontSize: 13 }}>
              Carica un prodotto per iniziare
            </div>
          }
        </div>
        <button style={DS.generateBtn} onClick={onStart}>
          <span style={{ fontSize: 16 }}>✦</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800 }}>Crea contenuto</div>
            <div style={{ fontSize: 10, opacity: 0.8 }}>inizia da qui</div>
          </div>
        </button>
      </div>
    </div>);
};


// ─── PRODUCT UPLOAD MODAL ────────────────────────────────────────────────────
const ProductModal = ({ onClose, onDone }) => {
  const [url, setUrl] = React.useState('');
  const [file, setFile] = React.useState(null);
  const [fileUrl, setFileUrl] = React.useState(null);
  const fileRef = React.useRef();

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = (ev) => setFileUrl(ev.target.result);
    reader.readAsDataURL(f);
  };

  const handleDone = () => {
    if (file) onDone({ type: 'file', file: fileUrl, name: file.name.replace(/\.[^.]+$/, '') });else
    if (url) onDone({ type: 'url', url, name: new URL(url.startsWith('http') ? url : 'https://' + url).hostname.replace('www.', '') });
  };

  return (
    <div style={DS.modalOverlay} onClick={onClose}>
      <div style={DS.modalBox} onClick={(e) => e.stopPropagation()}>
        <div style={DS.modalHeader}>
          <h3 style={{ fontSize: 22, fontWeight: 800 }}>Carica il tuo prodotto</h3>
          <span style={DS.modalClose} onClick={onClose}>✕</span>
        </div>
        <p style={{ color: '#8880B0', fontSize: 14, marginBottom: 32, lineHeight: 1.7 }}>
          Carica fino a 3 foto del prodotto o incolla il link della scheda ecommerce.<br />
          Più alta è la risoluzione, migliore sarà il risultato.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 20, alignItems: 'center' }}>
          <div style={{ ...DS.uploadZone, ...(fileUrl ? { borderColor: '#5B4FCF', background: 'rgba(91,79,207,0.05)' } : {}) }}
          onClick={() => fileRef.current.click()}>
            <input type="file" ref={fileRef} style={{ display: 'none' }} onChange={handleFile} accept="image/*" multiple />
            {fileUrl ?
            <div style={{ textAlign: 'center' }}>
                <img src={fileUrl} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 12, marginBottom: 12, boxShadow: '0 8px 30px rgba(91,79,207,0.3)' }} />
                <div style={{ color: '#28C840', fontWeight: 700, fontSize: 13 }}>✓ {file?.name}</div>
                <div style={{ color: '#4A4470', fontSize: 11, marginTop: 4 }}>Clicca per cambiare</div>
              </div> :

            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.25 }}>⬆</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Trascina le foto qui</div>
                <div style={{ color: '#4A4470', fontSize: 12 }}>PNG, JPG, WebP · max 3 foto</div>
              </div>
            }
          </div>
          <div style={{ color: '#4A4470', fontSize: 13, fontWeight: 600 }}>oppure</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#8880B0', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Link ecommerce</div>
            <input style={DS.textInput} placeholder="https://tuostore.it/prodotto" value={url} onChange={(e) => setUrl(e.target.value)} />
            <div style={{ fontSize: 11, color: '#4A4470', marginTop: 8, lineHeight: 1.6 }}>Amazon, Shopify, WooCommerce, Etsy e oltre 200 piattaforme supportate.</div>
          </div>
        </div>

        <button style={{ ...DS.primaryBtn, marginTop: 32, opacity: file || url ? 1 : 0.4, width: '100%', padding: '14px', fontSize: 15 }}
        disabled={!file && !url} onClick={handleDone}>
          Analizza con AI →
        </button>
      </div>
    </div>);

};

// ─── PROCESSING MODAL (AI DATA EXTRACTION) ───────────────────────────────────
const ProcessingModal = ({ productData, onDone }) => {
  const [step, setStep] = React.useState(0);
  const [revealed, setRevealed] = React.useState({});
  const [editMode, setEditMode] = React.useState(false);
  const [draftText, setDraftText] = React.useState('');

  const EXTRACTED = {
    name: productData?.name || 'Bibita Energetica Volt',
    price: '€2.90',
    category: 'Bevande / Energy Drink',
    colors: ['#E8C84A', '#E63946', '#1A1A2E', '#F5F5F5'],
    copy: ['Energia immediata', 'Zero zuccheri', 'Gusto intenso', 'Formato 250ml', 'Ideale pre-workout']
  };

  React.useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setStep((s) => {
        const next = s + 1;
        setRevealed((r) => ({ ...r, [PROCESS_STEPS[s]?.key]: true }));
        return next;
      });
      i++;
      if (i >= PROCESS_STEPS.length) {
        clearInterval(t);
        const generated = `Scopri ${EXTRACTED.name}. ${EXTRACTED.copy.slice(0, 3).join(', ')}. ${EXTRACTED.copy.slice(3).join('. ')}. Provalo ora!`;
        setDraftText(generated);
      }
    }, 700);
    return () => clearInterval(t);
  }, []);

  const done = step >= PROCESS_STEPS.length;

  return (
    <div style={DS.modalOverlay}>
      <div style={{ ...DS.modalBox, maxWidth: 680 }}>
        <div style={DS.modalHeader}>
          <h3 style={{ fontSize: 22, fontWeight: 800 }}>
            {done ? '✓ Prodotto analizzato' : 'Sto analizzando il tuo prodotto…'}
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 8 }}>
          {/* Left: steps */}
          <div>
            {PROCESS_STEPS.map((s, i) =>
            <div key={s.key} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid #1E1B42' }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
                background: i < step ? '#28C840' : i === step ? 'rgba(91,79,207,0.3)' : '#1E1B42',
                color: i < step ? '#fff' : i === step ? '#7B6FEF' : '#4A4470',
                animation: i === step ? 'pulse 1s ease infinite' : 'none'
              }}>
                  {i < step ? '✓' : i === step ? '◉' : '○'}
                </div>
                <span style={{ fontSize: 13, color: i < step ? '#28C840' : i === step ? '#F0EFFE' : '#4A4470', fontWeight: i <= step ? 600 : 400 }}>{s.label}</span>
              </div>
            )}
          </div>

          {/* Right: revealed data */}
          <div style={{ background: '#08071A', borderRadius: 14, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {revealed.price &&
            <div style={{ animation: 'fadeUp 0.4s ease both' }}>
                <div style={DS.extractLabel}>Prodotto rilevato</div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>{EXTRACTED.name}</div>
                <div style={{ color: '#F97316', fontWeight: 700, fontSize: 16, marginTop: 2 }}>{EXTRACTED.price}</div>
              </div>
            }
            {revealed.cat &&
            <div style={{ animation: 'fadeUp 0.4s ease both' }}>
                <div style={DS.extractLabel}>Categoria</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{EXTRACTED.category}</div>
              </div>
            }
            {revealed.colors &&
            <div style={{ animation: 'fadeUp 0.4s ease both' }}>
                <div style={DS.extractLabel}>Colori dominanti</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                  {EXTRACTED.colors.map((c) =>
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 20, height: 20, borderRadius: 4, background: c, border: '1px solid rgba(255,255,255,0.1)' }} />
                      <span style={{ fontSize: 10, color: '#8880B0' }}>{c}</span>
                    </div>
                )}
                </div>
              </div>
            }
            {revealed.copy &&
            <div style={{ animation: 'fadeUp 0.4s ease both' }}>
                <div style={DS.extractLabel}>Parole chiave</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                  {EXTRACTED.copy.map((c) =>
                <span key={c} style={{ background: 'rgba(91,79,207,0.15)', border: '1px solid rgba(91,79,207,0.3)', borderRadius: 100, padding: '3px 10px', fontSize: 11, color: '#C4BFFF', fontWeight: 600 }}>{c}</span>
                )}
                </div>
              </div>
            }
            {!revealed.price && <div style={{ color: '#4A4470', fontSize: 13, textAlign: 'center', marginTop: 20 }}>Analisi in corso…</div>}
          </div>
        </div>

        {done &&
        <div style={{ marginTop: 28, animation: 'fadeUp 0.4s ease both' }}>
            <div style={{ fontSize: 13, color: '#8880B0', marginBottom: 10 }}>
              Ho analizzato il tuo prodotto. Ecco il testo che ho preparato per te:
            </div>
            {!editMode ?
            <div style={{ background: '#08071A', border: '1px solid #1E1B42', borderRadius: 12, padding: '14px 18px', fontSize: 14, color: '#F0EFFE', lineHeight: 1.75, marginBottom: 16 }}>
                {draftText}
              </div> :
            <textarea
                style={{ ...DS.textInput, width: '100%', minHeight: 96, resize: 'vertical', lineHeight: 1.75, marginBottom: 16 }}
                value={draftText}
                onChange={(e) => setDraftText(e.target.value)} />
            }
            <div style={{ display: 'flex', gap: 12 }}>
              <button style={{ ...DS.primaryBtn, flex: 1, padding: '13px', fontSize: 14 }} onClick={() => onDone(draftText)}>
                {editMode ? 'Conferma testo — continua →' : 'Sì, va bene — continua →'}
              </button>
              {!editMode &&
              <button style={{ ...DS.ghostBtn, flex: 1, padding: '13px', fontSize: 14 }} onClick={() => setEditMode(true)}>
                  No, voglio modificarlo
                </button>
              }
            </div>
          </div>
        }
      </div>
    </div>);

};

// ─── STEP 3: COSA VUOI CREARE? ───────────────────────────────────────────────
const ContentTypeModal = ({ onClose, onDone, productCategory }) => {
  const rec = (productCategory || '').toLowerCase().includes('footwear') ? 'video' : 'both';
  const [sel, setSel] = React.useState(null);

  const types = [
    { id: 'static', icon: '🖼', label: 'Post statico', desc: 'Immagini per social e advertising. Perfetto per promozioni, offerte e catalogo.' },
    { id: 'video',  icon: '🎬', label: 'Video',        desc: 'Clip per TikTok, Reel, Spot. Il formato che converte di più.' },
    { id: 'both',   icon: '✦',  label: 'Entrambi',     desc: 'Video e grafiche insieme. Massima copertura su tutti i canali.' },
  ];

  return (
    <div style={DS.modalOverlay} onClick={onClose}>
      <div style={{ ...DS.modalBox, maxWidth: 600 }} onClick={(e) => e.stopPropagation()}>
        <div style={DS.modalHeader}>
          <h3 style={{ fontSize: 22, fontWeight: 800 }}>Cosa vuoi creare?</h3>
          <span style={DS.modalClose} onClick={onClose}>✕</span>
        </div>
        <p style={{ color: '#8880B0', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
          L'AI ha già selezionato quello più adatto al tuo prodotto. Puoi cambiare quando vuoi.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {types.map((t) => {
            const isRec = t.id === rec;
            const isSel = sel === t.id || (!sel && isRec);
            return (
              <div key={t.id} onClick={() => setSel(t.id)}
                style={{ ...DS.destCard, display: 'flex', alignItems: 'center', gap: 20,
                  ...(isSel ? { border: '2px solid #5B4FCF', background: 'rgba(91,79,207,0.08)' } :
                    isRec   ? { border: '1px solid rgba(91,79,207,0.4)' } : {}) }}>
                {isRec && <RecommendedBadge />}
                <div style={{ fontSize: 34, lineHeight: 1 }}>{t.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{t.label}</div>
                  <div style={{ color: '#8880B0', fontSize: 13, lineHeight: 1.5 }}>{t.desc}</div>
                </div>
                {isSel && <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#5B4FCF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0 }}>✓</div>}
              </div>
            );
          })}
        </div>
        <button style={{ ...DS.primaryBtn, marginTop: 24, width: '100%', padding: '14px', fontSize: 15 }}
          onClick={() => onDone(sel || rec)}>
          Continua →
        </button>
      </div>
    </div>);
};

// ─── AVATAR + SCENE MODAL ────────────────────────────────────────────────────
const AvatarSceneModal = ({ onClose, onDone, bar }) => {
  const [selAvatar, setSelAvatar] = React.useState(bar.avatarId || null);
  const [selScene, setSelScene] = React.useState(bar.scene || null);
  const [tabView, setTabView] = React.useState('avatar');

  return (
    <div style={DS.modalOverlay} onClick={onClose}>
      <div style={{ ...DS.modalBox, maxWidth: 700 }} onClick={(e) => e.stopPropagation()}>
        <div style={DS.modalHeader}>
          <div style={{ display: 'flex', gap: 0, background: '#08071A', borderRadius: 10, padding: 4 }}>
            {['avatar', 'scene'].map((t) =>
            <div key={t} onClick={() => setTabView(t)}
            style={{ padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer',
              background: tabView === t ? '#1E1B42' : 'transparent',
              color: tabView === t ? '#F0EFFE' : '#4A4470' }}>
                {t === 'avatar' ? 'Avatar' : 'Scena'}
              </div>
            )}
          </div>
          <span style={DS.modalClose} onClick={onClose}>✕</span>
        </div>

        {tabView === 'avatar' &&
        <div>
            <p style={{ color: '#8880B0', fontSize: 13, marginBottom: 20 }}>Scegli chi apparirà nel tuo spot. Disponibile in qualsiasi lingua.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
              {AVATARS.map((av) =>
            <div key={av.id} style={{ ...DS.avatarCard2, ...(selAvatar === av.id ? { border: `2px solid #5B4FCF`, boxShadow: '0 0 20px rgba(91,79,207,0.3)' } : {}) }}
            onClick={() => setSelAvatar(av.id)}>
                  <div style={{ ...DS.avatarCard2Img, background: `linear-gradient(135deg,${av.col},#0F0E26)` }}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="14" r="7" fill="rgba(255,255,255,0.18)" /><ellipse cx="18" cy="30" rx="11" ry="7" fill="rgba(255,255,255,0.1)" /></svg>
                    {selAvatar === av.id && <div style={{ position: 'absolute', top: 6, right: 6, width: 18, height: 18, borderRadius: '50%', background: '#5B4FCF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>✓</div>}
                  </div>
                  <div style={{ padding: '10px 12px' }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{av.name}</div>
                    <div style={{ color: '#5B4FCF', fontSize: 11, fontWeight: 600 }}>{av.style}</div>
                  </div>
                </div>
            )}
            </div>
            <button style={{ ...DS.primaryBtn, marginTop: 20, width: '100%', opacity: selAvatar ? 1 : 0.4 }} disabled={!selAvatar}
          onClick={() => setTabView('scene')}>
              Continua: scegli la scena →
            </button>
          </div>
        }

        {tabView === 'scene' &&
        <div>
            <p style={{ color: '#8880B0', fontSize: 13, marginBottom: 20 }}>Dove appare il tuo avatar con il prodotto?</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
              {SCENES.map((sc) =>
            <div key={sc.id} style={{ ...DS.sceneCard, ...(selScene === sc.id ? { border: `2px solid #5B4FCF`, boxShadow: '0 0 20px rgba(91,79,207,0.2)' } : {}) }}
            onClick={() => setSelScene(sc.id)}>
                  <div style={{ height: 90, borderRadius: '10px 10px 0 0', background: sc.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 80%, rgba(0,0,0,0.3), transparent)' }} />
                    {sc.id === 'studio' && <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }} />}
                    {sc.id === 'lifestyle' && <div style={{ fontSize: 24 }}>🌿</div>}
                    {sc.id === 'kitchen' && <div style={{ fontSize: 24 }}>🏠</div>}
                    {sc.id === 'branded' && <div style={{ width: 40, height: 20, borderRadius: 6, background: 'rgba(91,79,207,0.5)', border: '1px solid rgba(91,79,207,0.8)' }} />}
                    {selScene === sc.id && <div style={{ position: 'absolute', top: 8, right: 8, width: 18, height: 18, borderRadius: '50%', background: '#5B4FCF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>✓</div>}
                  </div>
                  <div style={{ padding: '10px 14px' }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{sc.label}</div>
                    <div style={{ color: '#8880B0', fontSize: 11 }}>{sc.sub}</div>
                  </div>
                </div>
            )}
            </div>
            <button style={{ ...DS.primaryBtn, marginTop: 20, width: '100%', opacity: selScene && selAvatar ? 1 : 0.4 }} disabled={!selScene || !selAvatar}
          onClick={() => onDone(selAvatar, selScene)}>
              Applica selezione ✓
            </button>
          </div>
        }
      </div>
    </div>);

};

// ─── STEP 4A: POST STATICO ────────────────────────────────────────────────────
const StaticOptionsModal = ({ onClose, onDone }) => {
  const [formats, setFormats] = React.useState(['1:1', '4:5']);
  const [textOption, setTextOption] = React.useState('draft');
  const [withPresenter, setWithPresenter] = React.useState(null);

  const toggleFormat = (f) =>
    setFormats((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);

  const textOptions = [
    { id: 'draft',  label: 'Usa il testo che ho preparato', desc: 'Il testo generato automaticamente per il tuo prodotto' },
    { id: 'custom', label: 'Scrivo io il testo',            desc: 'Inserisci il messaggio che vuoi mostrare' },
    { id: 'none',   label: 'Senza testo',                   desc: 'Solo l\'immagine del prodotto, nessuna scritta' },
  ];

  const canContinue = formats.length > 0 && withPresenter !== null;

  return (
    <div style={DS.modalOverlay} onClick={onClose}>
      <div style={{ ...DS.modalBox, maxWidth: 640 }} onClick={(e) => e.stopPropagation()}>
        <div style={DS.modalHeader}>
          <h3 style={{ fontSize: 22, fontWeight: 800 }}>Imposta i tuoi post</h3>
          <span style={DS.modalClose} onClick={onClose}>✕</span>
        </div>

        {/* Formati */}
        <div style={{ marginBottom: 28 }}>
          <div style={DS.extractLabel}>Dimensioni — puoi scegliere più formati</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 10, flexWrap: 'wrap' }}>
            {STATIC_FORMATS.map((f) => {
              const active = formats.includes(f.id);
              const aiRec  = f.id === '1:1' || f.id === '4:5';
              return (
                <div key={f.id} onClick={() => toggleFormat(f.id)}
                  style={{ ...DS.destCard, padding: '12px 18px', minWidth: 100, textAlign: 'center', position: 'relative',
                    ...(active ? { border: '2px solid #5B4FCF', background: 'rgba(91,79,207,0.08)' } : {}) }}>
                  {aiRec && formats.length >= 1 && <div style={{ position: 'absolute', top: 4, right: 6, fontSize: 9, color: '#5B4FCF', fontWeight: 700 }}>★</div>}
                  <div style={{ fontWeight: 800, fontSize: 18 }}>{f.id}</div>
                  <div style={{ fontSize: 11, color: '#8880B0', marginTop: 2 }}>{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testo sul post */}
        <div style={{ marginBottom: 28 }}>
          <div style={DS.extractLabel}>Testo sul post</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
            {textOptions.map((t) => (
              <div key={t.id} onClick={() => setTextOption(t.id)}
                style={{ ...DS.destCard, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12,
                  ...(textOption === t.id ? { border: '2px solid #5B4FCF', background: 'rgba(91,79,207,0.08)' } : {}) }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', flexShrink: 0, border: `2px solid ${textOption === t.id ? '#5B4FCF' : '#4A4470'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {textOption === t.id && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5B4FCF' }} />}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.label}</div>
                  <div style={{ color: '#8880B0', fontSize: 12, marginTop: 2 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Presentatore */}
        <div style={{ marginBottom: 28 }}>
          <div style={DS.extractLabel}>Presentatore nel post?</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
            {[
              { id: true,  label: 'Con presentatore', icon: '🧑', desc: 'Un avatar parla o appare nel post' },
              { id: false, label: 'Solo prodotto',    icon: '📦', desc: 'Solo l\'immagine del prodotto' },
            ].map((o) => (
              <div key={String(o.id)} onClick={() => setWithPresenter(o.id)}
                style={{ ...DS.destCard, flex: 1, padding: '16px',
                  ...(withPresenter === o.id ? { border: '2px solid #5B4FCF', background: 'rgba(91,79,207,0.08)' } : {}) }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{o.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{o.label}</div>
                <div style={{ fontSize: 12, color: '#8880B0' }}>{o.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <button style={{ ...DS.primaryBtn, width: '100%', padding: '14px', fontSize: 15, opacity: canContinue ? 1 : 0.4 }}
          disabled={!canContinue}
          onClick={() => onDone({ formats, textOption, withPresenter })}>
          Continua →
        </button>
      </div>
    </div>);
};

// ─── DESTINATION MODAL ───────────────────────────────────────────────────────
const DestinationModal = ({ onClose, onDone, bar }) => {
  const [sel, setSel] = React.useState(bar.destination || null);
  return (
    <div style={DS.modalOverlay} onClick={onClose}>
      <div style={{ ...DS.modalBox, maxWidth: 600 }} onClick={(e) => e.stopPropagation()}>
        <div style={DS.modalHeader}>
          <h3 style={{ fontSize: 22, fontWeight: 800 }}>Dove vuoi pubblicare?</h3>
          <span style={DS.modalClose} onClick={onClose}>✕</span>
        </div>
        <p style={{ color: '#8880B0', fontSize: 13, marginBottom: 24 }}>Il sistema genera automaticamente i formati tecnici corretti per ogni piattaforma.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
          {DESTINATIONS.map((d) =>
          <div key={d.id} style={{ ...DS.destCard, ...(sel === d.id ? { border: `2px solid #5B4FCF`, background: 'rgba(91,79,207,0.08)' } : {}),
            ...(d.recommended ? { borderColor: 'rgba(91,79,207,0.4)' } : {}) }}
          onClick={() => setSel(d.id)}>
              {d.recommended && <span style={{ position: 'absolute', top: 10, right: 10, background: 'linear-gradient(135deg,#5B4FCF,#7B6FEF)', borderRadius: 100, padding: '2px 8px', fontSize: 10, fontWeight: 700 }}>Consigliato</span>}
              <div style={{ fontSize: 24, marginBottom: 10, opacity: 0.5 }}>{d.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{d.label}</div>
              <div style={{ color: '#8880B0', fontSize: 12 }}>{d.formats}</div>
            </div>
          )}
        </div>
        <button style={{ ...DS.primaryBtn, marginTop: 24, width: '100%', opacity: sel ? 1 : 0.4 }} disabled={!sel}
        onClick={() => onDone(sel)}>
          Conferma destinazione →
        </button>
      </div>
    </div>);

};

// ─── GENERATION MODAL ────────────────────────────────────────────────────────
const GenerationModal = ({ bar, productData, onDone }) => {
  const GEN_STEPS = ['Inizializzazione modello', 'Analisi prodotto', 'Composizione scena', 'Generazione video', 'Generazione statici', 'Finalizzazione'];
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setStep((s) => s + 1);
      i++;
      if (i >= GEN_STEPS.length) {clearInterval(t);setTimeout(onDone, 800);}
    }, 950);
    return () => clearInterval(t);
  }, []);

  const pct = Math.round(step / GEN_STEPS.length * 100);
  const style = STYLES.find((s) => s.id === bar.style) || STYLES[0];

  return (
    <div style={DS.modalOverlay}>
      <div style={{ ...DS.modalBox, maxWidth: 560, textAlign: 'center' }}>
        {/* Product hero */}
        {productData?.file &&
        <img src={productData.file} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 16, margin: '0 auto 24px', display: 'block', boxShadow: `0 0 40px ${style.color}44` }} />
        }
        {!productData?.file &&
        <div style={{ width: 80, height: 80, borderRadius: 16, background: `linear-gradient(135deg,${style.color}44,${style.color}22)`, border: `1px solid ${style.color}66`, margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>✦</div>
        }

        <div style={{ fontSize: 11, fontWeight: 700, color: style.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{style.label}</div>
        <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Generazione in corso</h3>
        <p style={{ color: '#8880B0', fontSize: 14, marginBottom: 28 }}>
          {productData?.name && `"${productData.name}"`} · {DESTINATIONS.find((d) => d.id === bar.destination)?.label || 'Tutti i formati'}
        </p>

        {GEN_STEPS.map((s, i) =>
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', textAlign: 'left' }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10,
            background: i < step ? '#28C840' : i === step ? style.color + '44' : '#1E1B42',
            color: i < step ? '#fff' : i === step ? style.color : '#4A4470' }}>
              {i < step ? '✓' : i === step ? '◉' : '○'}
            </div>
            <span style={{ fontSize: 13, color: i < step ? '#28C840' : i === step ? '#F0EFFE' : '#4A4470', fontWeight: i <= step ? 600 : 400 }}>{s}</span>
          </div>
        )}

        <div style={{ height: 4, background: '#1E1B42', borderRadius: 4, marginTop: 20, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: `linear-gradient(90deg,${style.color},#F97316)`, borderRadius: 4, transition: 'width 0.9s ease' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 12, color: '#8880B0' }}>
          <span>{GEN_STEPS[Math.min(step, GEN_STEPS.length - 1)]}</span>
          <span style={{ color: style.color, fontWeight: 700 }}>{pct}%</span>
        </div>
      </div>
    </div>);

};

// ─── OUTPUT VIEW ─────────────────────────────────────────────────────────────
const OutputView = ({ bar, productData, onNewCampaign }) => {
  const style = STYLES.find((s) => s.id === bar.style) || STYLES[0];
  const dest = DESTINATIONS.find((d) => d.id === bar.destination) || DESTINATIONS[0];

  const videos = dest.id === 'tiktok' ? [{ l: 'Reel verticale', f: '9:16', d: '0:15' }, { l: 'TikTok Clip', f: '9:16', d: '0:08' }] :
  dest.id === 'youtube' ? [{ l: 'Pre-roll corto', f: '16:9', d: '0:06' }, { l: 'Pre-roll lungo', f: '16:9', d: '0:15' }, { l: 'Spot completo', f: '16:9', d: '0:30' }] :
  dest.id === 'meta' ? [{ l: 'Feed video', f: '4:5', d: '0:15' }, { l: 'Story video', f: '9:16', d: '0:10' }] :
  [{ l: 'Reel verticale', f: '9:16', d: '0:15' }, { l: 'TikTok Clip', f: '9:16', d: '0:08' }, { l: 'Feed video', f: '4:5', d: '0:15' }, { l: 'Story video', f: '9:16', d: '0:10' }, { l: 'Pre-roll', f: '16:9', d: '0:15' }];

  return (
    <div style={{ padding: '40px 48px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: style.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>✓ Campagna completata · {style.label}</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em' }}>Output pronti</h1>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button style={DS.ghostBtn} onClick={onNewCampaign}>+ Nuova campagna</button>
          <button style={DS.primaryBtn}>⬇ Scarica tutto</button>
        </div>
      </div>

      {/* Product hero banner */}
      <div style={{ background: `linear-gradient(135deg,${style.color}22,rgba(8,7,26,0))`, border: `1px solid ${style.color}33`, borderRadius: 16, padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
        {productData?.file ?
        <img src={productData.file} style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 12, boxShadow: `0 0 24px ${style.color}44` }} /> :
        <div style={{ width: 64, height: 64, borderRadius: 12, background: `linear-gradient(135deg,${style.color}44,#0F0E26)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>✦</div>
        }
        <div>
          <div style={{ fontWeight: 800, fontSize: 18 }}>{productData?.name || 'Prodotto'}</div>
          <div style={{ color: '#8880B0', fontSize: 13, marginTop: 2 }}>{dest.label} · {dest.formats}</div>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ background: '#28C840' + '18', border: '1px solid #28C840' + '44', color: '#28C840', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700 }}>● {videos.length} video generati</span>
        </div>
      </div>

      {/* Videos */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Video Ads</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 16 }}>
          {videos.map((v, i) =>
          <div key={i} style={{ background: '#0F0E26', border: '1px solid #1E1B42', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ aspectRatio: '9/16', maxHeight: 220, background: `linear-gradient(135deg,${style.color}18,#0A0920)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {productData?.file && <img src={productData.file} style={{ width: '60%', objectFit: 'contain', borderRadius: 8, opacity: 0.7, marginBottom: 8 }} />}
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, backdropFilter: 'blur(4px)' }}>▶</div>
                <div style={{ position: 'absolute', bottom: 8, left: 8, fontSize: 10, color: 'rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.4)', padding: '2px 6px', borderRadius: 100 }}>{v.d}</div>
                <div style={{ position: 'absolute', top: 8, right: 8, fontSize: 10, color: 'rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.4)', padding: '2px 6px', borderRadius: 100 }}>{v.f}</div>
              </div>
              <div style={{ padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{v.l}</span>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button style={DS.iconBtn}>⬇</button>
                  <button style={DS.iconBtn}>↻</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Statics */}
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Static Ads</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 10 }}>
          {[1, 2, 3, 4, 5, 6].map((i) =>
          <div key={i} style={{ background: '#0F0E26', border: '1px solid #1E1B42', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ height: 90, background: `linear-gradient(135deg,${style.color}12,#0A0920)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {productData?.file ?
              <img src={productData.file} style={{ height: 60, width: '80%', objectFit: 'contain', opacity: 0.7 }} /> :
              <div style={{ width: 28, height: 28, borderRadius: 6, background: style.color + '44' }} />
              }
              </div>
              <div style={{ padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: '#8880B0' }}>Post {i}</span>
                <button style={{ ...DS.iconBtn, width: 22, height: 22, fontSize: 9 }}>⬇</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

};

// ─── PRODUCT DETAIL + CAMPAIGNS ──────────────────────────────────────────────
const ProductDetail = ({ product, onNewCampaign }) =>
<div style={{ padding: '40px 48px', maxWidth: 1100, margin: '0 auto' }}>
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', marginBottom: 40 }}>
      <div style={{ width: 100, height: 100, borderRadius: 16, background: `linear-gradient(135deg,${product.colors[0]}44,#0F0E26)`, border: '1px solid #1E1B42', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ fontSize: 32, opacity: 0.5 }}>◈</div>
      </div>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>{product.name}</h1>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ color: '#F97316', fontWeight: 700, fontSize: 16 }}>{product.price}</span>
          <span style={{ color: '#8880B0', fontSize: 13 }}>{product.category}</span>
          <div style={{ display: 'flex', gap: 4 }}>
            {product.colors.map((c) => <div key={c} style={{ width: 14, height: 14, borderRadius: 3, background: c, border: '1px solid rgba(255,255,255,0.1)' }} />)}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
          {product.copy.map((c) => <span key={c} style={{ background: 'rgba(91,79,207,0.12)', border: '1px solid rgba(91,79,207,0.2)', color: '#C4BFFF', borderRadius: 100, padding: '3px 10px', fontSize: 11, fontWeight: 600 }}>{c}</span>)}
        </div>
      </div>
      <button style={DS.primaryBtn} onClick={onNewCampaign}>+ Nuova campagna</button>
    </div>

    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Campagne · {product.campaigns.length}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, background: '#0F0E26', border: '1px solid #1E1B42', borderRadius: 16, overflow: 'hidden' }}>
      <div style={{ display: 'flex', padding: '10px 20px', borderBottom: '1px solid #1E1B42', fontSize: 11, color: '#4A4470', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        <span style={{ flex: 2 }}>Nome campagna</span>
        <span style={{ flex: 1 }}>Stile</span>
        <span style={{ flex: 1 }}>Destinazione</span>
        <span style={{ flex: 1 }}>Stato</span>
        <span style={{ flex: 1 }}>Output</span>
        <span style={{ width: 60 }}></span>
      </div>
      {product.campaigns.map((c) =>
    <div key={c.id} style={{ display: 'flex', padding: '16px 20px', borderBottom: '1px solid #0A0920', alignItems: 'center' }}>
          <span style={{ flex: 2, fontWeight: 600, fontSize: 14 }}>{c.name}</span>
          <span style={{ flex: 1 }}>
            <span style={{ background: STYLES.find((s) => s.label === c.style)?.color + '22' || 'rgba(91,79,207,0.1)', color: STYLES.find((s) => s.label === c.style)?.color || '#7B6FEF', border: `1px solid ${STYLES.find((s) => s.label === c.style)?.color || '#5B4FCF'}44`, borderRadius: 100, padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>{c.style}</span>
          </span>
          <span style={{ flex: 1, color: '#8880B0', fontSize: 13 }}>{c.dest}</span>
          <span style={{ flex: 1 }}><StatusDot status={c.status} /></span>
          <span style={{ flex: 1, color: '#8880B0', fontSize: 13 }}>{c.outputs} file</span>
          <button style={{ ...DS.ghostBtn, padding: '5px 14px', fontSize: 12 }}>Apri</button>
        </div>
    )}
    </div>
  </div>;


// ─── MAIN DASHBOARD ──────────────────────────────────────────────────────────
const Dashboard = ({ onBackToLanding }) => {
  const [products, setProducts] = React.useState(MOCK_PRODUCTS);
  const [activeProductId, setActiveProductId] = React.useState('p1');
  const [modal, setModal] = React.useState(null); // null|'product'|'processing'|'avatar'|'destination'|'generating'|'output'
  const [productData, setProductData] = React.useState(null);
  const [bar, setBar] = React.useState({ productFile: null, productUrl: '', productName: '', avatarId: null, scene: null, style: 'hyper', destination: null, prompt: '' });

  const activeProduct = products.find((p) => p.id === activeProductId);

  const openProductModal = () => setModal('product');
  const openAvatarModal = () => setModal('avatar');

  const handleProductDone = (data) => {
    setProductData(data);
    setBar((b) => ({ ...b, productFile: data.file || null, productUrl: data.url || '', productName: data.name }));
    setModal('processing');
  };

  const handleProcessingDone = (draftText) => {
    if (draftText) setBar((b) => ({ ...b, prompt: draftText }));
    setModal('avatar');
  };

  const handleAvatarDone = (avatarId, scene) => {
    setBar((b) => ({ ...b, avatarId, scene }));
    setModal('destination');
  };

  const handleDestinationDone = (dest) => {
    setBar((b) => ({ ...b, destination: dest }));
    setModal(null);
  };

  const handleGenerate = () => {
    if (!bar.destination) {setModal('destination');return;}
    setModal('generating');
  };

  const handleGenerationDone = () => setModal('output');

  const handleNewCampaign = () => {
    setModal(null);
    setBar((b) => ({ ...b, style: 'hyper' }));
  };

  return (
    <div style={DS.root}>
      <Sidebar products={products} activeProductId={activeProductId} setActiveProductId={setActiveProductId} onBackToLanding={onBackToLanding} credits={12} />

      <div style={DS.main}>
        <CreationBar bar={bar} setBar={setBar} onOpenProduct={openProductModal} onOpenAvatar={openAvatarModal} onGenerate={handleGenerate} credits={12} />

        <div style={{ overflow: 'auto', flex: 1 }}>
          {modal === 'output' ?
          <OutputView bar={bar} productData={productData} onNewCampaign={handleNewCampaign} /> :
          activeProduct ?
          <ProductDetail product={activeProduct} onNewCampaign={openProductModal} /> :
          <div style={{ padding: '40px 48px' }}><StyleExamples onSelectStyle={(s) => setBar((b) => ({ ...b, style: s }))} selectedStyle={bar.style} /></div>
          }

          {!activeProduct && modal !== 'output' &&
          <div style={{ padding: '0 48px 48px' }}>
              <StyleExamples onSelectStyle={(s) => setBar((b) => ({ ...b, style: s }))} selectedStyle={bar.style} />
            </div>
          }
        </div>
      </div>

      {/* Modals */}
      {modal === 'product' && <ProductModal onClose={() => setModal(null)} onDone={handleProductDone} />}
      {modal === 'processing' && <ProcessingModal productData={productData} onDone={handleProcessingDone} />}
      {modal === 'avatar' && <AvatarSceneModal bar={bar} onClose={() => setModal(null)} onDone={handleAvatarDone} />}
      {modal === 'destination' && <DestinationModal bar={bar} onClose={() => setModal(null)} onDone={handleDestinationDone} />}
      {modal === 'generating' && <GenerationModal bar={bar} productData={productData} onDone={handleGenerationDone} />}
    </div>);

};

// ─── DESIGN SYSTEM ───────────────────────────────────────────────────────────
const DS = {
  root: { display: 'flex', height: '100vh', background: '#08071A', color: '#F0EFFE', fontFamily: "'Plus Jakarta Sans',sans-serif", overflow: 'hidden' },
  sidebar: { width: 230, borderRight: '1px solid #1E1B42', display: 'flex', flexDirection: 'column', background: '#0A0920', flexShrink: 0, overflow: 'hidden' },
  sidebarTop: { padding: '20px 18px', borderBottom: '1px solid #1E1B42' },
  sidebarSection: { padding: '12px 10px', flex: 1, overflow: 'auto' },
  sidebarSectionLabel: { fontSize: 10, fontWeight: 700, color: '#4A4470', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 8px', marginBottom: 4 },
  sidebarProduct: { display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px', borderRadius: 8, cursor: 'pointer', color: '#8880B0' },
  sidebarProductActive: { background: 'rgba(91,79,207,0.12)', color: '#F0EFFE' },
  sidebarProductDot: { width: 8, height: 8, borderRadius: '50%', flexShrink: 0 },
  sidebarCampaign: { display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px 6px 28px', cursor: 'pointer' },
  sidebarBottom: { borderTop: '1px solid #1E1B42', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 12 },
  creditsChip: { background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 },
  userAvatar: { width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#5B4FCF,#F97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 },
  sidebarUser: { display: 'flex', alignItems: 'center', gap: 10 },
  main: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  // Creation bar
  creationBarWrap: { borderBottom: '1px solid #1E1B42', padding: '12px 24px', background: '#0A0920', flexShrink: 0 },
  creationBar: { background: '#0F0E26', border: '1px solid #1E1B42', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 0, overflow: 'hidden' },
  barSlot: { display: 'flex', alignItems: 'center', padding: '12px 16px', cursor: 'pointer', minWidth: 140, transition: 'background 0.15s' },
  barSlotFilled: { background: 'rgba(91,79,207,0.06)' },
  barSlotIcon: { width: 28, height: 28, borderRadius: 8, background: '#1E1B42', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#4A4470', flexShrink: 0 },
  barDivider: { width: 1, height: 40, background: '#1E1B42', flexShrink: 0 },
  barPrompt: { width: '100%', background: 'transparent', border: 'none', outline: 'none', color: '#F0EFFE', fontSize: 13, padding: '12px 16px', fontFamily: "'Plus Jakarta Sans',sans-serif" },
  styleChip: { padding: '5px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', color: '#4A4470', border: '1px solid transparent', whiteSpace: 'nowrap', transition: 'all 0.15s' },
  generateBtn: { background: 'linear-gradient(135deg,#5B4FCF,#7B6FEF)', color: '#fff', border: 'none', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', minWidth: 120, fontFamily: "'Plus Jakarta Sans',sans-serif", flexShrink: 0 },
  // Styles grid
  stylesGrid: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 },
  styleCard: { background: '#0F0E26', border: '1px solid #1E1B42', borderRadius: 14, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s' },
  styleCardPreview: { height: 140, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  styleCardVisual: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  // Modals
  modalOverlay: { position: 'fixed', inset: 0, background: 'rgba(8,7,26,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(12px)' },
  modalBox: { background: '#0F0E26', border: '1px solid #1E1B42', borderRadius: 20, padding: '32px 36px', width: '90%', maxWidth: 620, maxHeight: '90vh', overflow: 'auto', boxShadow: '0 40px 120px rgba(0,0,0,0.6)' },
  modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  modalClose: { color: '#4A4470', cursor: 'pointer', fontSize: 18, padding: 4 },
  uploadZone: { background: '#08071A', border: '2px dashed #1E1B42', borderRadius: 14, padding: '32px 24px', cursor: 'pointer', textAlign: 'center', transition: 'border-color 0.2s', minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  textInput: { width: '100%', background: '#08071A', border: '1px solid #1E1B42', borderRadius: 10, padding: '11px 14px', color: '#F0EFFE', fontSize: 13, outline: 'none', fontFamily: "'Plus Jakarta Sans',sans-serif" },
  extractLabel: { fontSize: 10, fontWeight: 700, color: '#4A4470', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 },
  avatarCard2: { background: '#08071A', border: '1px solid #1E1B42', borderRadius: 12, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.15s' },
  avatarCard2Img: { height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' },
  sceneCard: { background: '#08071A', border: '1px solid #1E1B42', borderRadius: 12, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.15s' },
  destCard: { background: '#08071A', border: '1px solid #1E1B42', borderRadius: 12, padding: '20px', cursor: 'pointer', transition: 'all 0.15s', position: 'relative' },
  primaryBtn: { background: 'linear-gradient(135deg,#5B4FCF,#7B6FEF)', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif" },
  ghostBtn: { background: 'transparent', color: '#8880B0', border: '1px solid #1E1B42', borderRadius: 10, padding: '10px 20px', fontSize: 13, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif" },
  iconBtn: { width: 28, height: 28, borderRadius: 8, background: 'rgba(91,79,207,0.1)', border: '1px solid rgba(91,79,207,0.2)', color: '#7B6FEF', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }
};

Object.assign(window, { Dashboard });