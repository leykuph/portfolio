// Mobile nav toggle
function toggleMobileNav() {
  const nav = document.getElementById('mySidenav');
  const overlay = document.querySelector('.sidenav-overlay');
  const btn = document.querySelector('.menu-btn');
  if (!nav || !overlay) return;

  const isOpen = nav.classList.toggle('open');
  overlay.classList.toggle('active', isOpen);

  if (btn) {
    btn.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
}

// Theme toggle
function updateToggleButton() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const isLight = document.documentElement.classList.contains('light-theme');
  btn.innerHTML = isLight
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
}

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light-theme');
  localStorage.setItem('siteTheme', isLight ? 'light' : 'dark');
  updateToggleButton();
}

const themeSaved = localStorage.getItem('siteTheme');
if (themeSaved === 'light' || (!themeSaved && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)) {
  document.documentElement.classList.add('light-theme');
}
updateToggleButton();

// =====================================================
// Sidenav builder (keeps nav markup DRY across pages)
// =====================================================
const NAV_LINKS = [
  { href: '/', icon: 'fa-house', id: 'nav-home', label: 'Main Page' },
  { href: '/certificates', icon: 'fa-graduation-cap', id: 'nav-cert', label: 'Certifications' },
  { href: '/projects', icon: 'fa-file', id: 'nav-projects', label: 'Projects' }
];

function buildSidenav() {
  const nav = document.getElementById('mySidenav');
  if (!nav) return;
  const here = (location.pathname.replace(/\/+$/, '') || '/').toLowerCase();

  const link = ({ href, icon, id, label }) => {
    const h = (href.replace(/\/+$/, '') || '/').toLowerCase();
    const active = h === here;
    return `<a href="${href}"${active ? ' class="sidenav-active" aria-current="page"' : ''}><i class="fa-solid ${icon}"></i><span id="${id}">${label}</span></a>`;
  };

  nav.innerHTML =
    NAV_LINKS.map(link).join('') +
    `<div class="sidenav-bottom">
       <button id="theme-toggle" class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle color theme">
         <i class="fa-solid fa-moon"></i>
       </button>
       <div class="lang-dropdown">
         <button class="lang-dropdown-btn" onclick="toggleLangDropdown()" aria-haspopup="listbox" aria-expanded="false" aria-label="Select language">
           <i class="fa-solid fa-globe"></i>
           <span class="lang-label">English</span>
           <i class="fa-solid fa-chevron-down lang-arrow"></i>
         </button>
         <div class="lang-dropdown-menu" role="listbox">
           <button class="lang-option active-lang" data-lang="en" role="option"><span class="lang-dot"></span>English</button>
           <button class="lang-option" data-lang="tr" role="option"><span class="lang-dot"></span>Türkçe</button>
           <button class="lang-option" data-lang="jp" role="option"><span class="lang-dot"></span>日本語</button>
         </div>
       </div>
     </div>`;
}

// =====================================================
// Skill carousel builder (seamless infinite scroll = 3 copies)
// =====================================================
const SKILLS = [
  { src: '/images/html.webp', alt: 'HTML logo', label: 'HTML' },
  { src: '/images/C.webp', alt: 'C logo', label: 'C' },
  { src: '/images/java.webp', alt: 'Java logo', label: 'Java' },
  { src: '/images/js.webp', alt: 'JavaScript logo', label: 'JavaScript' },
  { src: '/images/csharp.webp', alt: 'C# logo', label: 'C#' },
  { src: '/images/python.webp', alt: 'Python logo', label: 'Python' },
  { src: '/images/swift.webp', alt: 'Swift logo', label: 'Swift' },
  { src: '/images/Bash.webp', alt: 'Bash logo', label: 'Bash' }
];

function buildSkillCards() {
  const track = document.querySelector('.skills-section .track');
  if (!track) return;
  const card = s => `<div class="card"><img loading="lazy" src="${s.src}" alt="${s.alt}" width="50" height="50"><span>${s.label}</span></div>`;
  const oneSet = SKILLS.map(card).join('');
  track.innerHTML = oneSet + oneSet + oneSet;
}

// Build nav + skills early so language listeners can attach to the generated nodes
buildSidenav();
buildSkillCards();
updateToggleButton();


// Translations
  const translations = {
    en: {
      heroHeading: "Hi, I'm",
      name: "Bedirhan.",
      occupation: "Computer Engineering Student @ MEF University",
      typewriterPrefix: "Currently:",
      typewriterPhrases: [
        "Preparing to be a Cybersecurity Analyst",
        "Blue Team enthusiast",
        "Linux & infrastructure tinkerer",
        "SiberVatan 2026"
      ],
      locationText: "Istanbul, Turkey",
      cvButton: 'See Public CV <i class="fa-solid fa-arrow-up-right-from-square"></i>',
      cvInfo: "For unredacted CV please reach me from SNS",
      aboutMeTitle: "About Me",
      aboutMeP1: "I'm a third-year Computer Engineering student at MEF University, focused on Blue Team cybersecurity and IT infrastructure. My main interest is defensive security monitoring — log analysis, hardening configurations, and improving infrastructure resilience.",
      aboutMeP2: "I work daily in Linux-based environments (Arch, Ubuntu, Kali) and actively build practical knowledge in networking, system administration, and security tooling. I'm particularly drawn to how operating systems, network layers, and services interact from a defender's perspective.",
      aboutMeP3: "Long-term, I want to specialize in security operations, incident detection & response, and infrastructure protection — environments where reliability, visibility, and system integrity actually matter.",
      qfTitle: "Quick Facts",
      qfEduLabel: "MEF University",
      qfEduSub: "BSc Computer Engineering · 2024–2028",
      qfFocusLabel: "Focus",
      qfFocusSub: "Blue Team · IT Infrastructure",
      qfDailyLabel: "Daily Driver",
      qfDailySub: "Arch Linux · Hyprland · Fish",
      qfLearningLabel: "Now Learning",
      qfLearningSub: "CompTIA Security+",
      qfLangLabel: "Languages",
      qfStatusLabel: "Status",
      qfStatusValue: "Working",
      dividerSkills: "Stack",
      dividerProfile: "Profile",
      skillsHeading: "Skills",
      experienceTitle: "Experience",
      expPeriod0: "JUL 2026 – PRESENT",
      expRole0: "Cyber Threat Intelligence Intern",
      expCompany0: "Brandefense · Ankara, Türkiye · Remote",
      expBullet01: "Tracking threat actors, campaigns, and emerging TTPs across intelligence sources.",
      expBullet02: "Supporting dark web and brand protection monitoring workflows.",
      expBullet03: "Contributing to threat intelligence reports and actionable findings.",
      expPeriod1: "MAY – SEP 2025",
      expRole1: "ECU Technician Intern",
      expCompany1: "Edge Tuning · Finike, Antalya · On-site",
      expBullet1: "Hands-on automobile ECU coding and customization.",
      expBullet2: "Calibration logic, diagnostics, and disciplined workflow.",
      expBullet3: "Built practical understanding of automotive electronics and control systems.",
      expPeriod2: "INDEPENDENT",
      expRole2: "Technical Support & Systems Assistance",
      expCompany2: "Freelance · Remote",
      expBullet21: "Installed and maintained Linux / Windows / macOS systems.",
      expBullet22: "Diagnosed hardware, driver, and networking issues end-to-end.",
      expBullet23: "Custom PC assembly and OS configuration for clients.",
      trainingHeading: "Training & Hackathons",
      hlSvTitle: "SiberVatan 2026",
      hlSvDesc: "Kalkınma Ajansı-supported cybersecurity training. Selected via competitive exam, one-on-one instruction. Completed Apr 2026.",
      hlGmTitle: "GenerativeMedia Komünite Hackathon 2026",
      hlGmDesc: "Solo · built a generative-media concept under time constraints.",
      hlHbTitle: "Hepsiburada & Trendyol Hackathons",
      hlHbDesc: "Team (2–3) · recommendation & learning-to-rank problems.",
      projectHeading: "Featured Projects",
      projectDesc1: "An AI-powered interior design application that generates photorealistic room redesigns based on user uploaded photos and style preferences.",
      projectDesc2: "A secure, full-stack web application featuring Spring Boot for the backend and a modern HTML/CSS/JS frontend. It implements JWT-based authentication with a premium, responsive UI.",
      projectDesc3: "A machine learning project predicting customer churn using Random Forest and XGBoost with feature selection strategies (RFE, feature importance). Reduces 1,163 features to 23 while preserving performance, evaluated with MCC and F1-Score under class imbalance.",
      projectDesc4: "A Java application that finds shortest paths between 17 Turkish cities using DFS, DFS-Shortest, and Dijkstra algorithms. Features an interactive Swing GUI and a benchmarking module with custom data structures (stack, dictionary) built from scratch.",
      projectDesc5: "A progressive implementation of the Lempel-Ziv-Welch compression algorithm across 6 levels covering text, grayscale, and color image compression with difference encoding. Includes a full Tkinter GUI and metrics like entropy, compression ratio, and lossless verification.",
      projectDesc6: "A Logisim implementation of an 8-bit single-cycle computer datapath: registers, ALU with arithmetic & logical ops, shifter, and multiplexed data paths. Includes hard-wired control logic and instruction handling.",
      projectDesc7: "Arch Linux Hyprland rice with a custom OC Palette theme featuring purple and orange accents on a dark nocturnal aesthetic. Configured with Waybar, Wofi, Kitty, Fish shell, Starship prompt, and managed via a bare git repo.",
      projectDesc8: "Real-time computer-vision facial recognition with a two-phase pipeline (dataset creation → live detection at 30+ FPS). Targets 85%+ accuracy under varied lighting and low-resolution conditions via robust feature extraction.",
      projectDesc9: "A hybrid Tetris + 2048 game on a 20×12 grid with chain-merge logic, hard drop, DAS held-key movement, and next-piece preview. Built in OOP Python with numpy and pygame.",
      projectDesc10: "A 2D game written entirely in MIPS Assembly, applying low-level hardware and memory management concepts. Direct framebuffer manipulation and bare-metal control flow.",
      projectDesc11: "A tutoring assistant built for the Software Engineering course. Answers conceptual questions, walks through worked examples, and helps students reason about design decisions.",
      viewCode: "View Code",
      liveDemo: "Live",
      viewAllProjects: 'View all projects on github <i class="fa-solid fa-arrow-right"></i>',
      certHeading: "Achievements & Certifications",
      certDescription: "A curated collection of my professional milestones and technical certifications in the field of Cybersecurity and Computer Engineering.",
      certSearch: "Search certifications (e.g. Security, Cloud)...",
      filterAll: "All",
      filterCyber: "Cybersecurity",
      filterCloud: "Cloud & Infra",
      filterDev: "Dev & PM",
      filterProgramming: "Programming",
      filterMobile: "Mobile",
      navCert: " Certifications",
      navHome: " Home",
      navProjects: "Projects",
      navContact: "Contact",
      projectsPageHeading: 'Featured <span class="text-primary">Projects</span>',
      projectsPageDesc: "A collection of works ranging from AI integrations to secure full-stack web applications, showcasing my journey in computer engineering.",
      footerText: "Looking for more? I have dozens of smaller repositories, experiments, and technical notes.",
      footerRights: "All rights reserved.",
      githubBtn: '<i class="fa-brands fa-github"></i> View all projects on GitHub',
      notFoundTitle: "Looks like this page got hardened out of existence.",
      notFoundDesc: "The URL you tried doesn't match any route on this site. It might've moved, or it may have never existed in the first place.",
      notFoundHome: "Back to home",
      notFoundProjects: "Browse projects"
    },
    tr: {
      heroHeading: "Merhaba, ben ",
      name: "Bedirhan.",
      occupation: "Bilgisayar Mühendisliği Öğrencisi @ MEF Üniversitesi",
      typewriterPrefix: "Şu anda:",
      typewriterPhrases: [
        "Siber Güvenlik Analisti olmaya hazırlanıyor",
        "Blue Team meraklısı",
        "Linux ve altyapı meraklısı",
        "SiberVatan 2026"
      ],
      locationText: "İstanbul, Türkiye",
      cvButton: 'Herkese Açık CV\'yi Görüntüle <i class="fa-solid fa-arrow-up-right-from-square"></i>',
      cvInfo: "Sansürsüz CV için sosyal medya üzerinden ulaşabilirsiniz",
      aboutMeTitle: "Hakkımda",
      aboutMeP1: "MEF Üniversitesi'nde 3. sınıf Bilgisayar Mühendisliği öğrencisiyim; Blue Team siber güvenlik ve BT altyapısı alanına odaklanıyorum. Asıl ilgi alanım savunma odaklı güvenlik izleme — log analizi, sistem sertleştirme ve altyapı dayanıklılığı.",
      aboutMeP2: "Linux tabanlı ortamlarda (Arch, Ubuntu, Kali) günlük olarak çalışıyor; ağ temelleri, sistem yönetimi ve güvenlik araçları konusunda pratik bilgi geliştiriyorum. Özellikle işletim sistemi, ağ katmanı ve servislerin savunma açısından nasıl etkileştiğiyle ilgileniyorum.",
      aboutMeP3: "Uzun vadeli hedefim güvenlik operasyonları, olay tespiti & müdahalesi ve altyapı koruması alanlarında uzmanlaşmak — güvenilirlik, görünürlük ve sistem bütünlüğünün gerçekten önemli olduğu ortamlar.",
      qfTitle: "Hızlı Bilgiler",
      qfEduLabel: "MEF Üniversitesi",
      qfEduSub: "Bilgisayar Mühendisliği Lisans · 2024–2028",
      qfFocusLabel: "Odak",
      qfFocusSub: "Blue Team · BT Altyapısı",
      qfDailyLabel: "Günlük Kullanım",
      qfDailySub: "Arch Linux · Hyprland · Fish",
      qfLearningLabel: "Şu Anda Öğreniyor",
      qfLearningSub: "CompTIA Security+",
      qfLangLabel: "Diller",
      qfStatusLabel: "Durum",
      qfStatusValue: "Çalışıyor",
      dividerSkills: "Stack",
      dividerProfile: "Profil",
      skillsHeading: "Yetenekler",
      experienceTitle: "Deneyim",
      expPeriod0: "TEMMUZ 2026 – HALEN",
      expRole0: "Siber Tehdit İstihbaratı Stajyeri",
      expCompany0: "Brandefense · Ankara, Türkiye · Uzaktan",
      expBullet01: "Tehdit aktörleri, kampanyalar ve yeni TTP'lerin istihbarat kaynakları üzerinden takibi.",
      expBullet02: "Dark web ve marka koruma izleme süreçlerine destek.",
      expBullet03: "Tehdit istihbaratı raporlarına ve aksiyon alınabilir bulgulara katkı.",
      expPeriod1: "MAYIS – EYLÜL 2025",
      expRole1: "ECU Teknisyen Stajyeri",
      expCompany1: "Edge Tuning · Finike, Antalya · Yerinde",
      expBullet1: "Otomobil ECU kodlama ve özelleştirme üzerinde uygulamalı çalışma.",
      expBullet2: "Kalibrasyon mantığı, diagnostik ve disiplinli iş akışı.",
      expBullet3: "Otomotiv elektroniği ve kontrol sistemleri konusunda pratik anlayış.",
      expPeriod2: "BAĞIMSIZ",
      expRole2: "Teknik Destek & Sistem Yardımı",
      expCompany2: "Freelance · Uzaktan",
      expBullet21: "Linux / Windows / macOS sistemlerin kurulumu ve bakımı.",
      expBullet22: "Donanım, sürücü ve ağ sorunlarının uçtan uca tespiti.",
      expBullet23: "Müşteriler için özel PC montajı ve işletim sistemi yapılandırması.",
      trainingHeading: "Eğitim & Hackathonlar",
      hlSvTitle: "SiberVatan 2026",
      hlSvDesc: "Kalkınma Ajansı destekli siber güvenlik eğitimi. Rekabetçi sınavla seçildi, birebir eğitim. Nisan 2026'da tamamlandı.",
      hlGmTitle: "GenerativeMedia Komünite Hackathon 2026",
      hlGmDesc: "Solo · zaman kısıtı altında üretken medya konsepti.",
      hlHbTitle: "Hepsiburada & Trendyol Hackathonları",
      hlHbDesc: "Takım (2–3) · öneri & learning-to-rank problemleri.",
      projectHeading: "Öne Çıkan Projeler",
      projectDesc1: "Kullanıcı girdilerinden oda konseptleri üreten yapay zeka destekli bir iç tasarım uygulaması.",
      projectDesc2: "Spring Boot backend ve modern HTML/CSS/JS frontend ile JWT tabanlı kimlik doğrulamalı güvenli tam yığın web uygulaması.",
      projectDesc3: "Random Forest ve XGBoost ile müşteri kaybı tahmini; 1.163 özelliği 23'e düşürürken performansı koruyor, sınıf dengesizliği altında MCC ve F1 ile değerlendirildi.",
      projectDesc4: "DFS, DFS-En Kısa ve Dijkstra ile 17 Türk şehri arasında en kısa yolları bulan Java uygulaması. Etkileşimli Swing GUI ve sıfırdan yazılmış veri yapıları.",
      projectDesc5: "Metin, gri tonlamalı ve renkli görüntü sıkıştırması için 6 seviyede LZW. Tam Tkinter GUI, entropi, sıkıştırma oranı ve kayıpsız doğrulama metrikleri.",
      projectDesc6: "8-bit tek çevrimli bilgisayar veri yolunun Logisim uygulaması: register'lar, aritmetik & mantıksal ALU, shifter ve çoklayıcılı veri yolları. Kablolu kontrol mantığı içerir.",
      projectDesc7: "Mor & turuncu vurgulu özel OC Palette temalı Arch Linux Hyprland rice. Waybar, Wofi, Kitty, Fish, Starship ile yapılandırıldı; bare git repo ile yönetiliyor.",
      projectDesc8: "İki aşamalı boru hattıyla gerçek zamanlı yüz tanıma (veri seti oluşturma → 30+ FPS canlı tespit). Değişken ışık koşullarında %85+ doğruluk hedefliyor.",
      projectDesc9: "20×12 ızgarada hibrit Tetris + 2048: zincir-birleştirme mantığı, hard drop, DAS, bir sonraki parça önizlemesi. OOP Python, numpy & pygame.",
      projectDesc10: "Tamamen MIPS Assembly'de yazılmış 2D oyun; düşük seviyeli donanım ve bellek yönetimi kavramları uygulanmış. Doğrudan framebuffer ve bare-metal kontrol akışı.",
      projectDesc11: "Yazılım Mühendisliği dersi için geliştirilmiş bir özel ders asistanı. Kavramsal soruları yanıtlıyor, çalışılmış örnekler üzerinden anlatım yapıyor ve tasarım kararları hakkında akıl yürütmeye yardımcı oluyor.",
      viewCode: "Kodu Gör",
      liveDemo: "Canlı",
      viewAllProjects: 'GitHub\'daki tüm projeleri gör <i class="fa-solid fa-arrow-right"></i>',
      certHeading: "Başarılar ve Sertifikalar",
      certDescription: "Siber güvenlik ve Bilgisayar Mühendisliği alanındaki profesyonel başarılarım ve teknik sertifikalarımın seçilmiş koleksiyonu.",
      certSearch: "Sertifikalarda ara (örn: Security, Cloud)...",
      filterAll: "Tümü",
      filterCyber: "Siber Güvenlik",
      filterCloud: "Bulut & Altyapı",
      filterDev: "Geliştirme & PM",
      filterProgramming: "Programlama",
      filterMobile: "Mobil",
      navCert: " Sertifikalar",
      navHome: " Ana Sayfa",
      navProjects: "Projeler",
      navContact: "İletişim",
      projectsPageHeading: 'Öne Çıkan <span class="text-primary">Projeler</span>',
      projectsPageDesc: "Yapay zeka entegrasyonlarından güvenli tam yığın web uygulamalarına kadar uzanan, bilgisayar mühendisliği yolculuğumu sergileyen bir çalışma koleksiyonu.",
      footerText: "Daha fazlasını mı arıyorsunuz? Onlarca küçük depom, deneyim ve teknik notum var.",
      footerRights: "Tüm hakları saklıdır.",
      githubBtn: '<i class="fa-brands fa-github"></i> GitHub\'daki tüm projeleri görün',
      notFoundTitle: "Bu sayfa sıkılaştırma sırasında kaybolmuş gibi görünüyor.",
      notFoundDesc: "Girdiğin URL bu sitede hiçbir rotaya uymuyor. Taşınmış olabilir ya da hiç var olmamış olabilir.",
      notFoundHome: "Ana sayfaya dön",
      notFoundProjects: "Projelere göz at"
    },
    jp: {
      heroHeading: "こんにちは、",
      name: "Bedirhanです。",
      occupation: "MEF大学 コンピュータ工学科の学生",
      typewriterPrefix: "現在:",
      typewriterPhrases: [
        "サイバーセキュリティアナリストを目指しています",
        "ブルーチーム愛好家",
        "Linuxとインフラの愛好家",
        "SiberVatan 2026"
      ],
      locationText: "イスタンブール、トルコ",
      cvButton: '公開CVを見る <i class="fa-solid fa-arrow-up-right-from-square"></i>',
      cvInfo: "無編集版CVはSNSからご連絡ください",
      aboutMeTitle: "私について",
      aboutMeP1: "MEF大学コンピュータ工学科3年生で、ブルーチームのサイバーセキュリティとITインフラを専門にしています。主な関心は防御的セキュリティ監視 — ログ分析、設定の強化、インフラのレジリエンス向上です。",
      aboutMeP2: "Linuxベース環境 (Arch, Ubuntu, Kali) で日常的に作業し、ネットワーク、システム管理、セキュリティツールの実践的知識を高めています。特にOS・ネットワーク層・サービスが防御の観点でどう連携するかに興味があります。",
      aboutMeP3: "長期的にはセキュリティ運用、インシデント検知と対応、インフラ保護を専門とし、信頼性・可視性・システム整合性が本当に重要な環境に貢献したいと考えています。",
      qfTitle: "クイック情報",
      qfEduLabel: "MEF大学",
      qfEduSub: "コンピュータ工学 学士 · 2024–2028",
      qfFocusLabel: "専門分野",
      qfFocusSub: "ブルーチーム · ITインフラ",
      qfDailyLabel: "日常環境",
      qfDailySub: "Arch Linux · Hyprland · Fish",
      qfLearningLabel: "学習中",
      qfLearningSub: "CompTIA Security+",
      qfLangLabel: "言語",
      qfStatusLabel: "ステータス",
      qfStatusValue: "就業中",
      dividerSkills: "スタック",
      dividerProfile: "プロフィール",
      skillsHeading: "スキル",
      experienceTitle: "経験",
      expPeriod0: "2026年7月 – 現在",
      expRole0: "サイバー脅威インテリジェンス インターン",
      expCompany0: "Brandefense · アンカラ、トルコ · リモート",
      expBullet01: "脅威アクター、キャンペーン、新たなTTPをインテリジェンスソース全体で追跡。",
      expBullet02: "ダークウェブおよびブランド保護モニタリング業務の支援。",
      expBullet03: "脅威インテリジェンスレポートと実用的な知見への貢献。",
      expPeriod1: "2025年5月 – 9月",
      expRole1: "ECU技術インターン",
      expCompany1: "Edge Tuning · フィニケ、アンタルヤ · オンサイト",
      expBullet1: "車両ECUコーディングとカスタマイゼーションの実務経験。",
      expBullet2: "キャリブレーション、診断、規律あるワークフロー。",
      expBullet3: "自動車電子制御と制御システムに関する実践的な理解。",
      expPeriod2: "独立",
      expRole2: "技術サポート & システム支援",
      expCompany2: "フリーランス · リモート",
      expBullet21: "Linux / Windows / macOS システムの導入と保守。",
      expBullet22: "ハードウェア、ドライバ、ネットワーク問題のエンドツーエンド診断。",
      expBullet23: "クライアント向けカスタムPC組み立てとOS設定。",
      trainingHeading: "研修 & ハッカソン",
      hlSvTitle: "SiberVatan 2026",
      hlSvDesc: "Kalkınma Ajansı支援のサイバーセキュリティ研修。競争試験で選出され、一対一指導。2026年4月修了。",
      hlGmTitle: "GenerativeMedia Komünite Hackathon 2026",
      hlGmDesc: "ソロ · 時間制約の中で生成メディアコンセプトを構築。",
      hlHbTitle: "Hepsiburada & Trendyol ハッカソン",
      hlHbDesc: "チーム (2–3) · 推薦 & ランキング学習の課題。",
      projectHeading: "注目プロジェクト",
      projectDesc1: "ユーザー入力から部屋デザイン案を生成するAIインテリアアプリ。",
      projectDesc2: "Spring Bootバックエンドとモダンなフロントエンドを組み合わせた安全なフルスタックWebアプリ。JWT認証実装。",
      projectDesc3: "ランダムフォレストとXGBoostを使用した顧客離脱予測。1,163特徴量を23に削減、MCCとF1で評価。",
      projectDesc4: "DFS、DFS最短、ダイクストラでトルコ17都市の最短経路を探すJavaアプリ。Swing GUIと自作データ構造。",
      projectDesc5: "テキスト・グレースケール・カラー画像の6段階LZW圧縮。Tkinter GUI、エントロピー、圧縮率、可逆検証。",
      projectDesc6: "8ビット単一サイクルコンピュータのLogisim実装：レジスタ、算術&論理ALU、シフタ、マルチプレクサデータパス。",
      projectDesc7: "紫とオレンジのカスタムOCパレットテーマのArch Linux Hyprlandライス。Waybar、Wofi、Kitty、Fish、Starshipで構成。",
      projectDesc8: "2段階パイプラインによるリアルタイム顔認識 (データセット作成 → 30+ FPSのライブ検出)。様々な照明条件下で85%以上の精度を目標。",
      projectDesc9: "20×12グリッドのハイブリッドTetris + 2048。チェーンマージ、ハードドロップ、DAS、次ピースプレビュー。OOP Python、numpy & pygame。",
      projectDesc10: "MIPS Assemblyで完全に書かれた2Dゲーム。低レベルハードウェアとメモリ管理の概念を適用。直接フレームバッファ操作とベアメタル制御。",
      projectDesc11: "ソフトウェア工学コース用に構築されたチュータリングアシスタント。概念的な質問に答え、解説例を通じて説明し、設計上の判断について学生が考えるのを助けます。",
      viewCode: "コードを見る",
      liveDemo: "ライブ",
      viewAllProjects: 'GitHubですべてのプロジェクトを見る <i class="fa-solid fa-arrow-right"></i>',
      certHeading: "実績と資格",
      certDescription: "サイバーセキュリティおよびコンピュータ工学分野における専門的な実績と資格の一覧です。",
      certSearch: "資格を検索 (例: Security, Cloud)...",
      filterAll: "すべて",
      filterCyber: "サイバーセキュリティ",
      filterCloud: "クラウド & インフラ",
      filterDev: "開発 & PM",
      filterProgramming: "プログラミング",
      filterMobile: "モバイル",
      navCert: " 資格",
      navHome: " ホーム",
      navProjects: "プロジェクト",
      navContact: "お問い合わせ",
      projectsPageHeading: '注目の <span class="text-primary">プロジェクト</span>',
      projectsPageDesc: "AI統合から安全なフルスタックWebアプリケーションまで、コンピューター工学における私の歩みを示す作品集です。",
      footerText: "もっと見たいですか？何十もの小さなリポジトリ、実験、技術ノートがあります。",
      footerRights: "無断複製を禁じます。",
      githubBtn: '<i class="fa-brands fa-github"></i> GitHubですべてのプロジェクトを表示',
      notFoundTitle: "このページはハードニング中に消えてしまったようです。",
      notFoundDesc: "入力したURLはこのサイトのどのルートにも一致しません。移動したか、最初から存在しなかった可能性があります。",
      notFoundHome: "ホームに戻る",
      notFoundProjects: "プロジェクトを見る"
    }
};

  let currentLang = 'en';

  function switchLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    currentLang = lang;
    document.documentElement.lang = lang === 'jp' ? 'ja' : lang;

    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el && value !== undefined) el.textContent = value;
    };
    const setHtml = (id, value) => {
      const el = document.getElementById(id);
      if (el && value !== undefined) el.innerHTML = value;
    };

    setText('nav-cert', t.navCert);
    setText('nav-home', t.navHome);
    setText('nav-projects', t.navProjects);
    const heroHeading = document.getElementById('hero-heading');
    if (heroHeading) {
      heroHeading.innerHTML = `${t.heroHeading} <span class="text-primary" id="name">${t.name}</span>`;
    }
    setText('occupation', t.occupation);
    setText('typewriter-prefix', t.typewriterPrefix);
    setText('location-text', t.locationText);
    setText('about-me-title', t.aboutMeTitle);
    setText('about-me-p1', t.aboutMeP1);
    setText('about-me-p2', t.aboutMeP2);
    setText('about-me-p3', t.aboutMeP3);
    setText('qf-title', t.qfTitle);
    setText('qf-edu-label', t.qfEduLabel);
    setText('qf-edu-sub', t.qfEduSub);
    setText('qf-focus-label', t.qfFocusLabel);
    setText('qf-focus-sub', t.qfFocusSub);
    setText('qf-daily-label', t.qfDailyLabel);
    setText('qf-daily-sub', t.qfDailySub);
    setText('qf-learning-label', t.qfLearningLabel);
    setText('qf-learning-sub', t.qfLearningSub);
    setText('qf-lang-label', t.qfLangLabel);
    setText('qf-status-label', t.qfStatusLabel);
    setText('qf-status-value', t.qfStatusValue);
    setText('divider-skills', t.dividerSkills);
    setText('divider-profile', t.dividerProfile);
    setText('skills-heading', t.skillsHeading);
    setText('experience-heading', t.experienceTitle);
    setText('exp-period-0', t.expPeriod0);
    setText('exp-role-0', t.expRole0);
    setText('exp-company-0', t.expCompany0);
    setText('exp-bullet-0-1', t.expBullet01);
    setText('exp-bullet-0-2', t.expBullet02);
    setText('exp-bullet-0-3', t.expBullet03);
    setText('exp-period-1', t.expPeriod1);
    setText('exp-role-1', t.expRole1);
    setText('exp-company-1', t.expCompany1);
    setText('exp-bullet-1', t.expBullet1);
    setText('exp-bullet-2', t.expBullet2);
    setText('exp-bullet-3', t.expBullet3);
    setText('exp-period-2', t.expPeriod2);
    setText('exp-role-2', t.expRole2);
    setText('exp-company-2', t.expCompany2);
    setText('exp-bullet-2-1', t.expBullet21);
    setText('exp-bullet-2-2', t.expBullet22);
    setText('exp-bullet-2-3', t.expBullet23);
    setText('training-heading', t.trainingHeading);
    setText('hl-sv-title', t.hlSvTitle);
    setText('hl-sv-desc', t.hlSvDesc);
    setText('hl-gm-title', t.hlGmTitle);
    setText('hl-gm-desc', t.hlGmDesc);
    setText('hl-hb-title', t.hlHbTitle);
    setText('hl-hb-desc', t.hlHbDesc);
    setText('projects-heading', t.projectHeading);
    setText('project-desc-1', t.projectDesc1);
    setText('project-desc-2', t.projectDesc2);
    setText('project-desc-3', t.projectDesc3);
    setText('project-desc-4', t.projectDesc4);
    setText('project-desc-5', t.projectDesc5);
    setText('project-desc-6', t.projectDesc6);
    setText('project-desc-7', t.projectDesc7);
    setText('project-desc-8', t.projectDesc8);
    setText('project-desc-9', t.projectDesc9);
    setText('project-desc-10', t.projectDesc10);
    setText('project-desc-11', t.projectDesc11);
    document.querySelectorAll('.view-code-label').forEach(el => { el.textContent = t.viewCode; });
    document.querySelectorAll('.live-demo-label').forEach(el => { el.textContent = t.liveDemo; });

    const cv = document.getElementById('cv');
    if (cv) cv.innerHTML = t.cvButton;
    setText('cv-info', t.cvInfo);
    const viewAllProjects = document.getElementById('view-all-projects');
    if (viewAllProjects) viewAllProjects.innerHTML = t.viewAllProjects;

    /* Certificates page */
    const projectsHeading = document.getElementById('projects-heading');
    if (projectsHeading && t.projectsPageHeading && document.body.id === 'projects-page') projectsHeading.innerHTML = t.projectsPageHeading;
    setText('cert-heading', t.certHeading);
    setText('cert-description', t.certDescription);
    setText('projects-description', t.projectsPageDesc);
    setText('footer-text', t.footerText);
    const githubBtn = document.querySelector('.btn-github-full');
    if (githubBtn) githubBtn.innerHTML = t.githubBtn;

    /* Placeholder translation */
    const searchInput = document.getElementById('search-bar');
    if (searchInput && t.certSearch) searchInput.placeholder = t.certSearch;

    /* Filter chips */
    document.querySelectorAll('.filter-chip').forEach(chip => {
      const key = chip.dataset.filterLabel;
      if (key && t[key]) {
        const label = chip.querySelector('.chip-text');
        if (label) label.textContent = t[key];
      }
    });

    /* 404 page */
    setHtml('nf-title', t.notFoundTitle);
    setText('nf-desc', t.notFoundDesc);
    setText('nf-home', t.notFoundHome);
    setText('nf-projects', t.notFoundProjects);

    /* Restart typewriter with new phrases */
    restartTypewriter(t.typewriterPhrases || []);

    localStorage.setItem('siteLanguage', lang);
  }

  const langNames = { en: 'English', tr: 'Türkçe', jp: '日本語' };

  function toggleLangDropdown() {
    const dropdown = document.querySelector('.lang-dropdown');
    if (!dropdown) return;
    const open = dropdown.classList.toggle('open');
    const btn = dropdown.querySelector('.lang-dropdown-btn');
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      const btn = dropdown.querySelector('.lang-dropdown-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('.lang-option').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;

      document.querySelectorAll('.lang-option')
        .forEach(b => b.classList.remove('active-lang'));
      button.classList.add('active-lang');

      const label = document.querySelector('.lang-label');
      if (label) label.textContent = langNames[lang] || lang;

      switchLanguage(lang);
      const dropdown = document.querySelector('.lang-dropdown');
      dropdown.classList.remove('open');
      const btn = dropdown.querySelector('.lang-dropdown-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  });


// =====================================================
// Typewriter effect
// =====================================================
let typewriterTimeout = null;

function restartTypewriter(phrases) {
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  const el = document.getElementById('typewriter');
  if (!el || !phrases || !phrases.length) return;

  el.textContent = '';
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  const typeSpeed = 55;
  const deleteSpeed = 30;
  const holdAfterType = 1800;
  const holdAfterDelete = 350;

  const tick = () => {
    const current = phrases[phraseIdx % phrases.length];

    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx >= current.length) {
        deleting = true;
        typewriterTimeout = setTimeout(tick, holdAfterType);
        return;
      }
      typewriterTimeout = setTimeout(tick, typeSpeed);
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx <= 0) {
        deleting = false;
        phraseIdx++;
        typewriterTimeout = setTimeout(tick, holdAfterDelete);
        return;
      }
      typewriterTimeout = setTimeout(tick, deleteSpeed);
    }
  };

  tick();
}


// =====================================================
// Scroll-reveal (IntersectionObserver)
// =====================================================
(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();


// =====================================================
// Certificate filter chips
// =====================================================
(function () {
  const filterContainer = document.querySelector('.cert-filters');
  if (!filterContainer) return;

  const chips = filterContainer.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.cert-card');
  const searchInput = document.getElementById('search-bar');

  let activeFilter = 'all';
  let activeQuery = '';

  function apply() {
    cards.forEach(card => {
      const category = (card.dataset.category || '').toLowerCase();
      const text = card.innerText.toLowerCase();
      const matchesFilter = activeFilter === 'all' || category === activeFilter;
      const matchesQuery = !activeQuery || text.includes(activeQuery);
      card.classList.toggle('filter-hidden', !(matchesFilter && matchesQuery));
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter || 'all';
      apply();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeQuery = e.target.value.toLowerCase().trim();
      apply();
    });
  }
})();


// =====================================================
// Footer + back-to-top builder
// =====================================================
const FOOTER_SOCIAL = [
  { href: 'https://www.linkedin.com/in/leykuph/', icon: 'fa-brands fa-linkedin', label: 'LinkedIn' },
  { href: 'https://github.com/leykuph', icon: 'fa-brands fa-github', label: 'GitHub' },
  { href: 'mailto:leykuph@gmail.com', icon: 'fa-solid fa-envelope', label: 'Email' },
  { href: 'https://x.com/leykuph', icon: 'fa-brands fa-x-twitter', label: 'X (Twitter)' },
  { href: 'https://www.instagram.com/leykuph/', icon: 'fa-brands fa-instagram', label: 'Instagram' }
];

function buildFooter() {
  if (document.querySelector('.site-footer')) return;
  const main = document.querySelector('main');
  const footer = document.createElement('footer');
  footer.className = 'site-footer reveal';
  const year = new Date().getFullYear();
  footer.innerHTML =
    `<div class="footer-inner">
       <div class="footer-brand">Bedirhan</div>
       <div class="footer-social">
         ${FOOTER_SOCIAL.map(s => `<a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}"><i class="${s.icon}"></i></a>`).join('')}
       </div>
       <div class="footer-copy">&copy; ${year} Bedirhan. <span id="footer-rights">All rights reserved.</span></div>
     </div>`;
  if (main && main.parentNode) {
    main.parentNode.insertBefore(footer, main.nextSibling);
  } else {
    document.body.appendChild(footer);
  }
  const rights = document.getElementById('footer-rights');
  if (rights) rights.textContent = (translations[currentLang] && translations[currentLang].footerRights) || 'All rights reserved.';
}

function setupBackToTop() {
  if (document.getElementById('back-to-top')) return;
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  document.body.appendChild(btn);

  const onScroll = () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  onScroll();
}

buildFooter();
setupBackToTop();


// =====================================================
// Initial bootstrap
// =====================================================
(function () {
  const saved = localStorage.getItem('siteLanguage') || 'en';
  switchLanguage(saved);
  document.querySelectorAll('.lang-option')
    .forEach(b => b.classList.toggle('active-lang', b.dataset.lang === saved));
  const label = document.querySelector('.lang-label');
  if (label) label.textContent = langNames[saved] || saved;
})();
