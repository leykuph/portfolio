
const slider = document.getElementById('dark-light-slider');

function updateThumb(value) {
  let emojiSvg;

  if (value < 50) {
    emojiSvg = `data:image/svg+xml,` + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="12" fill="#AF87D7"/>
        <circle cx="24" cy="16" r="10" fill="#2A2342"/>
      </svg>
    `);
  } else {
    emojiSvg = `data:image/svg+xml,` + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="8" fill="#E19B5A"/>
        <g stroke="#E19B5A" stroke-width="2.6" stroke-linecap="round">
          <line x1="20" y1="4" x2="20" y2="10"/>
          <line x1="20" y1="30" x2="20" y2="36"/>
          <line x1="4" y1="20" x2="10" y2="20"/>
          <line x1="30" y1="20" x2="36" y2="20"/>
          <line x1="8.7" y1="8.7" x2="13.1" y2="13.1"/>
          <line x1="26.9" y1="26.9" x2="31.3" y2="31.3"/>
          <line x1="8.7" y1="31.3" x2="13.1" y2="26.9"/>
          <line x1="26.9" y1="13.1" x2="31.3" y2="8.7"/>
        </g>
      </svg>
    `);
  }

  slider.style.setProperty('--thumb-image', `url('${emojiSvg}')`);
}


 // save selected theme

const themeSaved = localStorage.getItem('siteTheme');

if (themeSaved === 'light') {
  slider.value = 100;
  document.body.classList.add('light-theme');
} else {
  slider.value = 0;
  document.body.classList.remove('light-theme');
}

updateThumb(slider.value);
updateTrackFill(slider.value);

function updateTheme(value) {
  if (value < 50) {
    document.body.classList.remove('light-theme');
    localStorage.setItem('siteTheme', 'dark');
  } else {
    document.body.classList.add('light-theme');
    localStorage.setItem('siteTheme', 'light');
  }
}


function updateTrackFill(value) {
  const percent = value;
  slider.style.background = `
    linear-gradient(
      to right,
      var(--primary) ${percent}%,
      var(--surface-inner) ${percent}%
    )
  `;
}

function snapToNearest() {
  const value = parseInt(slider.value);
  if (value < 50) {
    slider.value = 0;
  } else {
    slider.value = 100;
  }
  updateThumb(slider.value);
  updateTheme(slider.value);
  updateTrackFill(slider.value);
}

updateThumb(slider.value);
updateTheme(slider.value);
updateTrackFill(slider.value);

slider.addEventListener('input', () => {
  updateThumb(slider.value);
  updateTheme(slider.value);
  updateTrackFill(slider.value);
});

slider.addEventListener('change', snapToNearest); 
slider.addEventListener('touchend', snapToNearest); 


// Translations

document.querySelectorAll('nav .right button').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      switchLanguage(lang);
    });
  });


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
      expCompany1: "Edge Tuning",
      expBullet1: "Worked on vehicle ECU coding tasks and practical troubleshooting.",
      expBullet2: "Learned calibration logic, diagnostics, and workflow discipline.",
      expBullet3: "Built hands-on understanding of automotive electronics and control systems.",
      projectHeading: "Featured Projects",
      projectDesc1: "An AI-powered interior design app that generates room concepts from user prompts. It combines generation, style presets, and user feedback to iterate designs quickly.",
      projectDesc2: "A secure, full-stack web application featuring Spring Boot for the backend and a modern HTML/CSS/JS frontend. It implements JWT-based authentication with a premium, responsive UI.",
      viewCode: "View Code",
      viewAllProjects: 'View all projects on github <i class="fa-solid fa-arrow-right"></i>',
      certHeading: "Achievements & Certifications",
      certDescription: "A curated collection of my professional milestones and technical certifications in the field of Cybersecurity and Computer Engineering.",
      certSearch: "Search certifications (e.g. Security, Cloud)...",
      navCert: " Certifications",
      navHome: " Home"
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
      expCompany1: "Edge Tuning",
      expBullet1: "Araç ECU kodlama görevleri ve pratik arıza tespiti üzerinde çalıştım.",
      expBullet2: "Kalibrasyon mantığı, diagnostik süreçleri ve disiplinli iş akışı öğrendim.",
      expBullet3: "Otomotiv elektroniği ve kontrol sistemleri konusunda uygulamalı bilgi edindim.",
      projectHeading: "Öne Çıkan Projeler",
      projectDesc1: "Kullanıcı girdilerinden oda konseptleri üreten yapay zeka destekli bir iç tasarım uygulaması. Hızlı tasarım iterasyonu için üretim, stil şablonları ve kullanıcı geri bildirimini birleştirir.",
      projectDesc2: "Backend tarafında Spring Boot ve modern HTML/CSS/JS frontend kullanan güvenli, tam yığın bir web uygulaması. Premium ve responsive bir arayüz ile JWT tabanlı kimlik doğrulama uygular.",
      viewCode: "Kodu Gör",
      viewAllProjects: 'GitHub\'daki tüm projeleri gör <i class="fa-solid fa-arrow-right"></i>',
      certHeading: "Başarılar ve Sertifikalar",
      certDescription: "Siber güvenlik ve Bilgisayar Mühendisliği alanındaki profesyonel başarılarım ve teknik sertifikalarımın seçilmiş bir koleksiyonu.",
      certSearch: "Sertifikalarda ara (örn: Security, Cloud)...",
      navCert: " Sertifikalar",
      navHome: " Ana Sayfa"
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
      expCompany1: "Edge Tuning",
      expBullet1: "車両ECUコーディング作業と実践的なトラブルシューティングを行いました。",
      expBullet2: "キャリブレーションの考え方、診断、業務フローの規律を学びました。",
      expBullet3: "自動車電子制御と制御システムに関する実践的な理解を深めました。",
      projectHeading: "注目プロジェクト",
      projectDesc1: "ユーザー入力から部屋デザイン案を生成するAIインテリアアプリ。生成・スタイルプリセット・ユーザーフィードバックを組み合わせて素早く改善します。",
      projectDesc2: "Spring Bootをバックエンドに、モダンなHTML/CSS/JSフロントエンドを組み合わせた安全なフルスタックWebアプリ。JWT認証とレスポンシブUIを実装しています。",
      viewCode: "コードを見る",
      viewAllProjects: 'GitHubですべてのプロジェクトを見る <i class="fa-solid fa-arrow-right"></i>',
      certHeading: "実績と資格",
      certDescription: "サイバーセキュリティおよびコンピュータ工学分野における専門的な実績と資格の一覧です。",
      certSearch: "資格を検索 (例: Security, Cloud)...",
      navCert: " 資格",
      navHome: " ホーム"
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
    setText('projects-text', t.projectHeading);
    setText('project-desc-1', t.projectDesc1);
    setText('project-desc-2', t.projectDesc2);
    setText('view-code-1', t.viewCode);
    setText('view-code-2', t.viewCode);
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


    localStorage.setItem('siteLanguage', lang);
  }

  document.querySelectorAll('nav .right button').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
  
      // remove active class from all
      document.querySelectorAll('nav .right button')
        .forEach(b => b.classList.remove('active-lang'));
  
      // add to the clicked one
      button.classList.add('active-lang');
  
      switchLanguage(lang);
    });
  });

  // save selected language
  const saved = localStorage.getItem('siteLanguage');
  if (saved) {
    switchLanguage(saved);
    document.querySelectorAll('nav .right button')
      .forEach(b => b.classList.toggle('active-lang', b.dataset.lang === saved));
}
