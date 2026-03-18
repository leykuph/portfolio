
// Mobile nav toggle
function toggleMobileNav() {
  const nav = document.getElementById('mySidenav');
  const overlay = document.querySelector('.sidenav-overlay');
  const btn = document.querySelector('.menu-btn');
  if (!nav || !overlay) return;

  const isOpen = nav.classList.toggle('open');
  overlay.classList.toggle('active', isOpen);

  // Swap icon between bars and xmark
  if (btn) {
    btn.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  }
}

// Theme toggle
function updateToggleButton() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const isLight = document.body.classList.contains('light-theme');
  btn.innerHTML = isLight
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('siteTheme', isLight ? 'light' : 'dark');
  updateToggleButton();
}

const themeSaved = localStorage.getItem('siteTheme');
if (themeSaved === 'light') {
  document.body.classList.add('light-theme');
}
updateToggleButton();


// Translations
  const translations = {
    en: {
      heroHeading: "Hi, I'm",
      name: "Bedirhan.",
      occupation: "Computer Engineering Student",
      occupation2: "(Preparing To Be Cybersecurity Analyst)",
      locationText: "Istanbul, Turkey",
      cvButton: 'Download Public CV <i class="fa-solid fa-download"></i>',
      cvInfo: "For unredacted CV please reach me from SNS",
      aboutMeTitle: "About Me",
      aboutMeP1: "I'm a third year Computer Engineering student aiming to build a career in Blue Team cybersecurity and IT infrastructure. My primary interest lies in defensive security monitoring systems, analyzing logs, hardening configurations, and improving overall infrastructure resilience.",
      aboutMeP2: "I work extensively with Linux-based environments and actively develop practical knowledge in networking fundamentals, system administration, and security tooling. I am particularly interested in how operating systems, network layers, and services interact from a defensive perspective.",
      aboutMeP3: "My long-term goal is to specialize in security operations, incident detection and response, and infrastructure protection, contributing to environments where reliability, visibility, and system integrity are critical.",
      skillsHeading: "Skills",
      experienceTitle: "Experience",
      expPeriod1: "6-MONTH PERIOD",
      expRole1: "Vehicle ECU Coding",
      expCompany1: "Hands-on work with automobiles",
      expBullet1: "Worked on vehicle ECU coding tasks and practical troubleshooting.",
      expBullet2: "Learned calibration logic, diagnostics, and workflow discipline.",
      expBullet3: "Built hands-on understanding of automotive electronics and control systems.",
      projectHeading: "Featured Projects",
      projectDesc1: "An AI-powered interior design app that generates room concepts from user prompts. It combines generation, style presets, and user feedback to iterate designs quickly.",
      projectDesc2: "A secure, full-stack web application featuring Spring Boot for the backend and a modern HTML/CSS/JS frontend. It implements JWT-based authentication with a premium, responsive UI.",
      projectDesc3: "A machine learning project predicting customer churn using Random Forest and XGBoost with feature selection strategies (RFE, feature importance). Reduces 1,163 features to 23 while preserving performance, evaluated with MCC and F1-Score under class imbalance.",
      projectDesc4: "A Java application that finds shortest paths between 17 Turkish cities using DFS, DFS-Shortest, and Dijkstra algorithms. Features an interactive Swing GUI and a benchmarking module with custom data structures (stack, dictionary) built from scratch.",
      projectDesc5: "A progressive implementation of the Lempel-Ziv-Welch compression algorithm across 6 levels covering text, grayscale, and color image compression with difference encoding. Includes a full Tkinter GUI and metrics like entropy, compression ratio, and lossless verification.",
      projectDesc6: "A Logisim implementation of a single-cycle computer datapath with eight 4-bit general purpose registers, an ALU supporting arithmetic and logical operations, a shifter, and multiplexed data paths. Includes hard-wired control logic for a 16-bit control word.",
      projectDesc7: "Arch Linux Hyprland rice with a custom OC Palette theme featuring purple and orange accents on a dark nocturnal aesthetic. Configured with Waybar, Wofi, Kitty, Fish shell, Starship prompt, and managed via a bare git repo.",
      viewCode: "View Code",
      viewAllProjects: 'View all projects on github <i class="fa-solid fa-arrow-right"></i>',
      certHeading: "Achievements & Certifications",
      certDescription: "A curated collection of my professional milestones and technical certifications in the field of Cybersecurity and Computer Engineering.",
      certSearch: "Search certifications (e.g. Security, Cloud)...",
      navCert: " Certifications",
      navHome: " Home",
      navProjects: "Projects",
      navContact: "Contact",
      projectsPageHeading: 'Featured <span class="text-primary">Projects</span>',
      projectsPageDesc: "A collection of works ranging from AI integrations to secure full-stack web applications, showcasing my journey in computer engineering.",
      footerText: "Looking for more? I have dozens of smaller repositories, experiments, and technical notes.",
      githubBtn: '<i class="fa-brands fa-github"></i> View all projects on GitHub'
    },
    tr: {
      heroHeading: "Merhaba, ben ",
      name: "Bedirhan.",
      occupation: "Bilgisayar Mühendisliği Öğrencisi",
      occupation2: "(Siber Güvenlik Analisti Olmaya Hazırlanıyorum)",
      locationText: "İstanbul, Türkiye",
      cvButton: 'Herkese Açık CV\'yi İndir <i class="fa-solid fa-download"></i>',
      cvInfo: "Sansürsüz CV için sosyal medya üzerinden ulaşabilirsiniz",
      aboutMeTitle: "Hakkımda",
      aboutMeP1: "Bilgisayar Mühendisliği 3. sınıf öğrencisiyim ve kariyerimi Blue Team siber güvenlik ve BT altyapısı alanında geliştirmeyi hedefliyorum. Ana ilgi alanım savunma odaklı güvenlik izleme sistemleri, log analizi, sistem sertleştirme ve altyapı dayanıklılığını artırmaktır.",
      aboutMeP2: "Linux tabanlı ortamlarda yoğun şekilde çalışıyor; ağ temelleri, sistem yönetimi ve güvenlik araçları konusunda pratik bilgi geliştiriyorum. Özellikle işletim sistemleri, ağ katmanları ve servislerin savunma perspektifinde nasıl etkileştiğiyle ilgileniyorum.",
      aboutMeP3: "Uzun vadeli hedefim güvenlik operasyonları, olay tespiti ve müdahalesi ile altyapı koruması alanlarında uzmanlaşarak güvenilirlik, görünürlük ve sistem bütünlüğünün kritik olduğu ortamlara katkı sağlamak.",
      skillsHeading: "Yetenekler",
      experienceTitle: "Deneyim",
      expPeriod1: "6 AYLIK DÖNEM",
      expRole1: "Araç ECU Kodlama",
      expCompany1: "Otomobillerle uygulamalı çalışma",
      expBullet1: "Araç ECU kodlama görevleri ve pratik arıza tespiti üzerinde çalıştım.",
      expBullet2: "Kalibrasyon mantığı, diagnostik süreçleri ve disiplinli iş akışı öğrendim.",
      expBullet3: "Otomotiv elektroniği ve kontrol sistemleri konusunda uygulamalı bilgi edindim.",
      projectHeading: "Öne Çıkan Projeler",
      projectDesc1: "Kullanıcı girdilerinden oda konseptleri üreten yapay zeka destekli bir iç tasarım uygulaması. Hızlı tasarım iterasyonu için üretim, stil şablonları ve kullanıcı geri bildirimini birleştirir.",
      projectDesc2: "Backend tarafında Spring Boot ve modern HTML/CSS/JS frontend kullanan güvenli, tam yığın bir web uygulaması. Premium ve responsive bir arayüz ile JWT tabanlı kimlik doğrulama uygular.",
      projectDesc3: "Random Forest ve XGBoost kullanarak müşteri kaybını tahmin eden bir makine öğrenimi projesi. RFE ve özellik önemi stratejileriyle 1.163 özelliği 23'e düşürürken performansı korur; sınıf dengesizliği altında MCC ve F1-Skor ile değerlendirilir.",
      projectDesc4: "DFS, DFS-En Kısa ve Dijkstra algoritmaları kullanarak 17 Türk şehri arasında en kısa yolları bulan bir Java uygulaması. Etkileşimli Swing GUI ve sıfırdan oluşturulmuş özel veri yapıları (yığın, sözlük) ile kıyaslama modülü içerir.",
      projectDesc5: "Metin, gri tonlamalı ve renkli görüntü sıkıştırmasını fark kodlamasıyla kapsayan 6 seviyede ilerleyici bir LZW sıkıştırma algoritması uygulaması. Tam Tkinter GUI, entropi, sıkıştırma oranı ve kayıpsız doğrulama metrikleri içerir.",
      projectDesc6: "Sekiz adet 4-bit genel amaçlı yazmaç, aritmetik ve mantıksal işlemleri destekleyen bir ALU, kaydırıcı ve çoklayıcılı veri yolları içeren tek çevrimli bilgisayar veri yolunun Logisim uygulaması. 16-bit kontrol kelimesi için kablolu kontrol mantığı içerir.",
      projectDesc7: "Koyu gece estetiği üzerinde mor ve turuncu vurgularla özel OC Palette temasına sahip Arch Linux Hyprland yapılandırması. Waybar, Wofi, Kitty, Fish kabuk, Starship istemi ile yapılandırılmış ve bare git repo ile yönetilir.",
      viewCode: "Kodu Gör",
      viewAllProjects: 'GitHub\'daki tüm projeleri gör <i class="fa-solid fa-arrow-right"></i>',
      certHeading: "Başarılar ve Sertifikalar",
      certDescription: "Siber güvenlik ve Bilgisayar Mühendisliği alanındaki profesyonel başarılarım ve teknik sertifikalarımın seçilmiş bir koleksiyonu.",
      certSearch: "Sertifikalarda ara (örn: Security, Cloud)...",
      navCert: " Sertifikalar",
      navHome: " Ana Sayfa",
      navProjects: "Projeler",
      navContact: "İletişim",
      projectsPageHeading: 'Öne Çıkan <span class="text-primary">Projeler</span>',
      projectsPageDesc: "Yapay zeka entegrasyonlarından güvenli tam yığın web uygulamalarına kadar uzanan, bilgisayar mühendisliği yolculuğumu sergileyen bir çalışma koleksiyonu.",
      footerText: "Daha fazlasını mı arıyorsunuz? Onlarca küçük depom, deneyim ve teknik notum var.",
      githubBtn: '<i class="fa-brands fa-github"></i> GitHub\'daki tüm projeleri görün'
    },
    jp: {
      heroHeading: "こんにちは、",
      name: "Bedirhanです。",
      occupation: "コンピュータ工学科の学生",
      occupation2: "（サイバーセキュリティアナリストを目指しています）",
      locationText: "イスタンブール、トルコ",
      cvButton: '公開CVをダウンロード <i class="fa-solid fa-download"></i>',
      cvInfo: "無編集版CVはSNSからご連絡ください",
      aboutMeTitle: "私について",
      aboutMeP1: "私はコンピュータ工学科3年生で、Blue TeamのサイバーセキュリティとITインフラ分野でキャリアを築くことを目指しています。主な関心は防御的セキュリティ監視、ログ分析、設定の強化、インフラのレジリエンス向上です。",
      aboutMeP2: "Linuxベース環境で実践的に取り組みながら、ネットワーク基礎、システム管理、セキュリティツールの知識を高めています。特にOS・ネットワーク層・サービスが防御の観点でどう連携するかに興味があります。",
      aboutMeP3: "長期的には、セキュリティ運用、インシデント検知と対応、インフラ保護を専門とし、信頼性・可視性・システム整合性が重要な環境に貢献したいと考えています。",
      skillsHeading: "スキル",
      experienceTitle: "経験",
      expPeriod1: "6か月間",
      expRole1: "車両ECUコーディング",
      expCompany1: "自動車の実務経験",
      expBullet1: "車両ECUコーディング作業と実践的なトラブルシューティングを行いました。",
      expBullet2: "キャリブレーションの考え方、診断、業務フローの規律を学びました。",
      expBullet3: "自動車電子制御と制御システムに関する実践的な理解を深めました。",
      projectHeading: "注目プロジェクト",
      projectDesc1: "ユーザー入力から部屋デザイン案を生成するAIインテリアアプリ。生成・スタイルプリセット・ユーザーフィードバックを組み合わせて素早く改善します。",
      projectDesc2: "Spring Bootをバックエンドに、モダンなHTML/CSS/JSフロントエンドを組み合わせた安全なフルスタックWebアプリ。JWT認証とレスポンシブUIを実装しています。",
      projectDesc3: "ランダムフォレストとXGBoostを使用し、RFEと特徴量重要度による特徴選択戦略で顧客離脱を予測する機械学習プロジェクト。1,163の特徴量を23に削減しつつ性能を維持し、クラス不均衡下でMCCとF1スコアで評価。",
      projectDesc4: "DFS、DFS最短、ダイクストラアルゴリズムを使用してトルコの17都市間の最短経路を探索するJavaアプリケーション。インタラクティブなSwing GUIと、ゼロから構築されたカスタムデータ構造（スタック、辞書）によるベンチマークモジュールを搭載。",
      projectDesc5: "テキスト、グレースケール、カラー画像の圧縮を差分符号化と共に6レベルで段階的に実装したLZW圧縮アルゴリズム。完全なTkinter GUI、エントロピー、圧縮率、可逆検証メトリクスを含む。",
      projectDesc6: "8つの4ビット汎用レジスタ、算術・論理演算をサポートするALU、シフタ、マルチプレクサデータパスを備えた単一サイクルコンピュータのLogisim実装。16ビット制御ワードのハードワイヤード制御論理を含む。",
      projectDesc7: "ダークな夜想美学に紫とオレンジのアクセントを配したカスタムOCパレットテーマのArch Linux Hyprlandライス。Waybar、Wofi、Kitty、Fishシェル、Starshipプロンプトで構成し、ベアgitリポジトリで管理。",
      viewCode: "コードを見る",
      viewAllProjects: 'GitHubですべてのプロジェクトを見る <i class="fa-solid fa-arrow-right"></i>',
      certHeading: "実績と資格",
      certDescription: "サイバーセキュリティおよびコンピュータ工学分野における専門的な実績と資格の一覧です。",
      certSearch: "資格を検索 (例: Security, Cloud)...",
      navCert: " 資格",
      navHome: " ホーム",
      navProjects: "プロジェクト",
      navContact: "お問い合わせ",
      projectsPageHeading: '注目の <span class="text-primary">プロジェクト</span>',
      projectsPageDesc: "AI統合から安全なフルスタックWebアプリケーションまで、コンピューター工学における私の歩みを示す作品集です。",
      footerText: "もっと見たいですか？何十もの小さなリポジトリ、実験、技術ノートがあります。",
      githubBtn: '<i class="fa-brands fa-github"></i> GitHubですべてのプロジェクトを表示'
    }
};

  function switchLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
  
    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };
    setText('nav-cert', t.navCert);
    setText('nav-home', t.navHome);
    setText('nav-projects', t.navProjects);
    setText('nav-contact', t.navContact);
    const heroHeading = document.getElementById('hero-heading');
    if (heroHeading) {
      heroHeading.innerHTML = `${t.heroHeading} <span class="text-primary" id="name">${t.name}</span>`;
    }
    setText('occupation', t.occupation);
    setText('occupation-2', t.occupation2);
    setText('location-text', t.locationText);
    setText('about-me-title', t.aboutMeTitle);
    setText('about-me-p1', t.aboutMeP1);
    setText('about-me-p2', t.aboutMeP2);
    setText('about-me-p3', t.aboutMeP3);
    setText('skills-heading', t.skillsHeading);
    setText('experience-heading', t.experienceTitle);
    setText('exp-period-1', t.expPeriod1);
    setText('exp-role-1', t.expRole1);
    setText('exp-company-1', t.expCompany1);
    setText('exp-bullet-1', t.expBullet1);
    setText('exp-bullet-2', t.expBullet2);
    setText('exp-bullet-3', t.expBullet3);
    setText('projects-heading', t.projectHeading);
    setText('project-desc-1', t.projectDesc1);
    setText('project-desc-2', t.projectDesc2);
    setText('project-desc-3', t.projectDesc3);
    setText('project-desc-4', t.projectDesc4);
    setText('project-desc-5', t.projectDesc5);
    setText('project-desc-6', t.projectDesc6);
    setText('project-desc-7', t.projectDesc7);
    setText('view-code-1', t.viewCode);
    setText('view-code-2', t.viewCode);
    setText('view-code-3', t.viewCode);
    setText('view-code-4', t.viewCode);
    setText('view-code-7', t.viewCode);
    const cv = document.getElementById('cv');
    if (cv) cv.innerHTML = t.cvButton;
    setText('cv-info', t.cvInfo);
    const viewAllProjects = document.getElementById('view-all-projects');
    if (viewAllProjects) viewAllProjects.innerHTML = t.viewAllProjects;
    
    
    /* Certificates page */
    setText('cert-heading', t.certHeading);
    setText('cert-description', t.certDescription);
    
    /* Placeholder translation */
    const searchInput = document.getElementById('search-bar');
    if (searchInput && t.certSearch) {
        searchInput.placeholder = t.certSearch;
    }


    /* Projects page */
    const projectsHeading = document.getElementById('projects-heading');
    if (projectsHeading) projectsHeading.innerHTML = t.projectsPageHeading;
    setText('projects-description', t.projectsPageDesc);
    setText('footer-text', t.footerText);
    const githubBtn = document.querySelector('.btn-github-full');
    if (githubBtn) githubBtn.innerHTML = t.githubBtn;

    localStorage.setItem('siteLanguage', lang);
  }

  const langNames = { en: 'English', tr: 'Türkçe', jp: '日本語' };

  function toggleLangDropdown() {
    document.querySelector('.lang-dropdown').classList.toggle('open');
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  document.querySelectorAll('.lang-option').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;

      document.querySelectorAll('.lang-option')
        .forEach(b => b.classList.remove('active-lang'));
      button.classList.add('active-lang');

      // Update button label
      const label = document.querySelector('.lang-label');
      if (label) label.textContent = langNames[lang] || lang;

      switchLanguage(lang);
      document.querySelector('.lang-dropdown').classList.remove('open');
    });
  });

  // Restore saved language
  const saved = localStorage.getItem('siteLanguage');
  if (saved) {
    switchLanguage(saved);
    document.querySelectorAll('.lang-option')
      .forEach(b => b.classList.toggle('active-lang', b.dataset.lang === saved));
    const label = document.querySelector('.lang-label');
    if (label) label.textContent = langNames[saved] || saved;
  }
