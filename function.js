
const slider = document.getElementById('dark-light-slider');

function updateThumb(value) {
  let emojiSvg;

  if (value < 50) {
    emojiSvg = `data:image/svg+xml,` + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="12" fill="#AF87D7"/>
        <circle cx="20" cy="20" r="6" fill="#1A1626"/>
      </svg>
    `);
  } else {
    emojiSvg = `data:image/svg+xml,` + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="12" fill="#E19B5A"/>
        <circle cx="20" cy="20" r="6" fill="#F5F0FA"/>
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


  // fix experience title and skills
  const translations = {
    en: {
      heroHeading: "Hi, I'm Bedirhan.",
      aboutMeTitle: "About Me",
      aboutMe: "Since I was around 14 year old I studied C#, Python, Java, JavaScript and similar languages and currently I am a 3rd year student at MEF University. In future I am planning to study more on cybersecurity field with SiberVatan program I'm included.",
      skillsHeading: "Skills",
      experienceTitle: "Experience",
      experienceText: "6 months of ECU Coding experience",
      projectHeading: "Projects",
      discord: "Discord bot written with JavaScript with simple commands for basic usage.",
      mod: "A modification written with JavaScript for the game called Minecraft.",
      customerChurn: "A Machine Learning project for calculating customer churn prediction written with Python.",
      spotify: "An app for downloading mp3 files from playlist link (Spotify + YouTube).",
      certHeading: "Achievements & Certifications",
      certDescription: "A curated collection of my professional milestones and technical certifications in the field of Cybersecurity and Computer Engineering.",
      certSearch: "Search certifications (e.g. Security, Cloud)...",
      navCert: " Certifications",
      navHome: " Home",
      interior: "AI image creation and user based room interior application."
    },
    tr: {
      heroHeading: "Merhaba, ben Bedirhan.",
      aboutMeTitle: "Hakkımda",
      aboutMe: "Yaklaşık 14 yaşımdan beri C#, Python, Java, JavaScript ve benzeri dilleri öğreniyorum ve şu anda MEF Üniversitesi'nde 3. sınıf öğrencisiyim. Gelecekte, dahil olduğum SiberVatan programı ile siber güvenlik alanında daha fazla kendimi geliştirmeyi planlıyorum.",
      skillsHeading: "Yetenekler",
      experienceTitle: "Deneyim",
      experienceText: "6 ay ECU kodlama deneyimi",
      projectHeading: "Projeler",
      discord: "JavaScript ile yazılmış, basit komutlarla temel kullanım için tasarlanmış Discord botu.",
      mod: "Minecraft adlı oyun için JavaScript ile yazılmış bir modifikasyon.",
      customerChurn: "Python ile yazılmış, müşteri kaybı tahminini hesaplayan bir makine öğrenimi projesi.",
      spotify: "Spotify ve YouTube gibi oynatma listesi bağlantılarından MP3 dosyaları indirmek için bir uygulama.",
      certHeading: "Başarılar ve Sertifikalar",
      certDescription: "Siber güvenlik ve Bilgisayar Mühendisliği alanındaki profesyonel başarılarım ve teknik sertifikalarımın seçilmiş bir koleksiyonu.",
      certSearch: "Sertifikalarda ara (örn: Security, Cloud)...",
      navCert: " Sertifikalar",
      navHome: " Ana Sayfa",
      interior: "Yapay zeka görüntü oluşturma tabanlı kullanıcı odaklı oda iç tasarım uygulaması."
    },
    jp: {
      heroHeading: "こんにちは、Bedirhanです。",
      aboutMeTitle: "私について",
      aboutMe: "14歳頃からC#、Python、Java、JavaScriptなどの言語を学び、現在はMEF大学の3年生です。今後は、参加しているSiberVatanプログラムでサイバーセキュリティ分野をさらに学びたいと思っています。",
      skillsHeading: "スキル",
      experienceTitle: "経験",
      experienceText: "ECUコーディング経験6ヶ月",
      projectHeading: "プロジェクト",
      discord: "基本的な使用方法のためのシンプルなコマンドを使用して JavaScript で記述された Discord ボット。",
      mod: "Minecraftというゲーム用にJavaScriptで書かれた改造",
      customerChurn: "Python で記述された、顧客離脱予測を計算する機械学習プロジェクト。",
      certHeading: "実績と資格",
      certDescription: "サイバーセキュリティおよびコンピュータ工学分野における専門的な実績と資格の一覧です。",
      certSearch: "資格を検索 (例: Security, Cloud)...",
      navCert: " 資格",
      navHome: " ホーム",
      interior: "ユーザーベースの部屋のインテリアアプリケーションに基づくAI画像作成。"
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
    setText('hero-heading', t.heroHeading);
    setText('about-me-title', t.aboutMeTitle);
    setText('about-me-text', t.aboutMe);
    setText('skills-heading', t.skillsHeading);
    setText('experience-heading', t.experienceTitle);
    setText('experience-text', t.experienceText);
    setText('project-heading', t.projectHeading);
    setText('discord', t.discord);
    setText('mod', t.mod);
    setText('customer-churn', t.customerChurn);
    setText('spotify', t.spotify);
    setText('interior', t.interior);
    
    
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
}

