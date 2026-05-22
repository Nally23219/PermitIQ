/* ── Reset & base ─────────────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
  background: #f0f4f9;
  color: #1a202c;
  line-height: 1.6;
}

/* ── App shell ───────────────────────────────────────────────────────────── */
.app { min-height: 100vh; }

/* ── Nav ─────────────────────────────────────────────────────────────────── */
.nav {
  background: #0B2D6B;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
}
.nav-inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-brand { display: flex; align-items: center; gap: 10px; }
.nav-seal {
  width: 32px; height: 32px; border-radius: 50%;
  background: #C8922A;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700; color: white;
}
.nav-title { font-size: 16px; font-weight: 700; color: white; line-height: 1.2; }
.nav-title span { color: #C8922A; }
.nav-sub { font-size: 9px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.5px; }
.nav-tabs { display: flex; gap: 6px; }
.nav-tab {
  padding: 6px 14px;
  font-size: 12px; font-weight: 600;
  border-radius: 8px; cursor: pointer;
  background: transparent;
  border: 1px solid transparent;
  color: white;
  font-family: inherit;
  transition: all 0.15s;
}
.nav-tab.active { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.4); }
.nav-tab:hover:not(.active) { background: rgba(255,255,255,0.08); }

/* ── Main ────────────────────────────────────────────────────────────────── */
.main { max-width: 860px; margin: 0 auto; padding: 1.5rem; }

/* ── Section tab cards ───────────────────────────────────────────────────── */
.sect-tabs { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 18px; }
.sect-tab {
  background: white;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  padding: 14px;
  cursor: pointer;
  text-align: left;
  display: flex; flex-direction: column; gap: 4px;
  font-family: inherit;
  transition: all 0.15s;
}
.sect-tab.active-blue { background: #0B2D6B; border-color: #0B2D6B; }
.sect-tab.active-red  { background: #7B1C1C; border-color: #7B1C1C; }
.sect-icon { font-size: 20px; }
.sect-title { font-size: 14px; font-weight: 700; color: #1a202c; }
.sect-tab.active-blue .sect-title,
.sect-tab.active-red  .sect-title { color: white; }
.sect-sub { font-size: 11px; color: #718096; line-height: 1.4; }
.sect-tab.active-blue .sect-sub,
.sect-tab.active-red  .sect-sub { color: rgba(255,255,255,0.65); }

/* ── Card ────────────────────────────────────────────────────────────────── */
.card {
  background: white;
  border-radius: 14px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

/* ── Section ─────────────────────────────────────────────────────────────── */
.section-title { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
.section-title.blue { color: #0B2D6B; }
.section-title.red  { color: #7B1C1C; }
.section-desc { font-size: 14px; color: #4a5568; line-height: 1.65; margin-bottom: 16px; }

/* ── Notes ───────────────────────────────────────────────────────────────── */
.note {
  display: flex; gap: 10px; align-items: flex-start;
  padding: 11px 14px;
  border-radius: 10px;
  font-size: 13px; line-height: 1.55;
  margin-bottom: 16px;
}
.note-blue  { background: #EBF0FA; border: 1px solid #b5d4f4; color: #0B2D6B; }
.note-amber { background: #FEF3E2; border: 1px solid #FAC775; color: #854F0B; }
.note-red   { background: #fff5f5; border: 1px solid #feb2b2; color: #c53030; margin-top: 14px; }

/* ── Form elements ───────────────────────────────────────────────────────── */
.field-label {
  font-size: 11px; font-weight: 700;
  color: #718096;
  text-transform: uppercase; letter-spacing: 0.5px;
  margin-bottom: 6px;
}
.field-gap { height: 14px; }

select {
  width: 100%;
  padding: 9px 12px;
  font-size: 13px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  color: #2d3748;
  font-family: inherit;
  cursor: pointer;
}
select:focus { outline: none; border-color: #0B2D6B; }

.textarea {
  width: 100%;
  padding: 9px 12px;
  font-size: 13px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  color: #2d3748;
  font-family: inherit;
  resize: vertical;
  line-height: 1.6;
}
.textarea:focus { outline: none; border-color: #0B2D6B; }

.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* ── Drop zone ───────────────────────────────────────────────────────────── */
.drop-zone {
  border: 2px dashed #cbd5e0;
  border-radius: 10px;
  padding: 1.1rem;
  text-align: center;
  cursor: pointer;
  background: #f8fafc;
  transition: all 0.15s;
  user-select: none;
}
.drop-zone:hover, .drop-zone.drag {
  border-color: #0B2D6B;
  background: #EBF0FA;
}
.drop-icon { font-size: 24px; margin-bottom: 4px; }
.drop-title { font-size: 13px; font-weight: 600; color: #2d3748; }
.drop-sub { font-size: 11px; color: #a0aec0; margin-top: 2px; }

/* ── File chips ──────────────────────────────────────────────────────────── */
.file-chip {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 12px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-top: 6px;
  font-size: 12px;
}
.chip-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #2d3748; }
.chip-size { color: #a0aec0; flex-shrink: 0; }
.chip-status { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 10px; flex-shrink: 0; }
.st-ok   { background: #e6f4ea; color: #1e6e3e; }
.st-proc { background: #e8f0fe; color: #1a56c4; }
.st-warn { background: #fef3e2; color: #854F0B; }
.chip-remove {
  background: none; border: none; cursor: pointer;
  color: #a0aec0; font-size: 18px; padding: 0 2px;
  line-height: 1; font-family: inherit;
}
.chip-remove:hover { color: #c53030; }

/* ── Buttons ─────────────────────────────────────────────────────────────── */
.btn-row { display: flex; gap: 10px; margin-top: 16px; }
.btn-primary {
  padding: 11px 22px;
  font-size: 14px; font-weight: 700;
  background: #0B2D6B; color: white;
  border: none; border-radius: 9px;
  cursor: pointer; font-family: inherit;
  transition: background 0.15s;
}
.btn-primary:hover { background: #0a2560; }
.btn-primary:disabled { background: #6b8cc7; cursor: not-allowed; }
.btn-primary.red { background: #7B1C1C; }
.btn-primary.red:hover { background: #6a1717; }
.btn-primary.red:disabled { background: #a85c5c; }
.btn-clear {
  padding: 11px 16px;
  font-size: 13px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 9px;
  cursor: pointer; color: #4a5568; font-family: inherit;
}
.btn-clear:hover { background: #f8fafc; }

/* ── Loading ─────────────────────────────────────────────────────────────── */
.loading-box {
  display: flex; align-items: center; gap: 12px;
  padding: 1.1rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 11px;
  margin-top: 14px;
}
.loading-title { font-size: 13px; font-weight: 600; color: #0B2D6B; }
.loading-sub { font-size: 12px; color: #718096; margin-top: 2px; }

@keyframes spin { to { transform: rotate(360deg); } }
.spinner {
  width: 20px; height: 20px;
  border-radius: 50%;
  border: 2.5px solid #e2e8f0;
  border-top-color: #0B2D6B;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}

/* ── Result panel ────────────────────────────────────────────────────────── */
.result-panel {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 20px;
}
.result-header {
  background: #0B2D6B;
  padding: 14px 18px;
  display: flex; align-items: center; justify-content: space-between;
}
.result-header-title { font-size: 14px; font-weight: 700; color: white; }
.result-header-sub { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 2px; }
.result-badge {
  font-size: 11px; font-weight: 600;
  padding: 3px 12px; border-radius: 20px;
  background: rgba(255,255,255,0.15); color: white;
}
.result-body { padding: 1.25rem 1.5rem; }
.result-footer {
  padding: 10px 16px;
  border-top: 1px solid #e2e8f0;
  background: #f8fafc;
  display: flex; gap: 8px; flex-wrap: wrap;
}
.action-btn {
  padding: 7px 14px;
  font-size: 12px; font-weight: 600;
  border-radius: 8px; cursor: pointer;
  background: white; color: #0B2D6B;
  border: 1px solid #cbd5e0;
  font-family: inherit; transition: all 0.15s;
}
.action-btn:hover { background: #EBF0FA; }
.action-btn.primary { background: #0B2D6B; color: white; border-color: #0B2D6B; }
.action-btn.primary:hover { background: #0a2560; }

/* ── Result text formatting ──────────────────────────────────────────────── */
.result-heading {
  font-size: 11px; font-weight: 700;
  color: #0B2D6B;
  margin-top: 18px; margin-bottom: 8px;
  padding-bottom: 5px;
  border-bottom: 1.5px solid #dde8f5;
  text-transform: uppercase; letter-spacing: 0.5px;
}
.result-heading:first-child { margin-top: 0; }
.result-row {
  display: flex; gap: 8px;
  font-size: 13px; color: #1a202c;
  line-height: 1.7; margin-bottom: 3px;
}
.result-num { font-weight: 700; color: #0B2D6B; min-width: 18px; flex-shrink: 0; }
.result-bull { color: #C8922A; font-weight: 700; flex-shrink: 0; }
.result-gap { height: 5px; }
.result-line { font-size: 13px; color: #1a202c; line-height: 1.7; margin-bottom: 2px; }
.result-line strong { font-weight: 600; }

/* ── Footer ──────────────────────────────────────────────────────────────── */
.footer { margin-top: 16px; text-align: center; }
.footer-links {
  display: flex; gap: 16px;
  justify-content: center; flex-wrap: wrap;
  margin-bottom: 6px;
}
.footer-link { font-size: 12px; color: #0B2D6B; text-decoration: none; opacity: 0.6; }
.footer-link:hover { opacity: 1; }
.footer-note { font-size: 11px; color: #a0aec0; }

/* ── Responsive ──────────────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .nav-inner { padding: 0 1rem; }
  .main { padding: 1rem; }
  .card { padding: 1.25rem; }
  .sect-tabs, .grid-2 { grid-template-columns: 1fr; }
  .nav-sub { display: none; }
}
