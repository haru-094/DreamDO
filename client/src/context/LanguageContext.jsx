import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    navHome: 'Home',
    navLittleFarmer: 'Little Farmer',
    navAbout: 'About',
    navPartner: 'Partner with us',
    navExplore: 'Explore the learning journey',

    // Hero
    heroTag: 'DREAMDO RWANDA / LITTLE FARMER',
    heroPilot: 'Masaka Sector Pilot',
    heroTitle1: 'Little hands.',
    heroTitle2: 'Big harvests.',
    heroSubtitle: 'A hands-on food and money journey for the next generation — from the first seed to a first sale. Transforming Rwandan children from passive consumers into active growers and savers.',
    heroCtaPrimary: 'Bring Little Farmer to your school',
    heroCtaSecondary: 'Explore the Little Farmer program',
    heroFootnote: 'BUILT FOR RWANDA • SCALED FOR IMPACT',
    heroToggleConcept: 'Figma Concept',
    heroTogglePhoto: 'Field Photo',
    heroPhotoCaption: 'Children at a school cone garden in Rwanda — learning food production firsthand.',

    // Stats
    statsHeading: 'A whole food system, in a schoolyard.',
    stat1Val: '6–14',
    stat1Label: 'years old young makers',
    stat2Val: '4',
    stat2Label: 'practical learning weeks',
    stat3Val: '20 yrs',
    stat3Label: 'garden life with care',

    // Story
    storyTag: 'THE WHY',
    storyHeading: 'Food shouldn’t be a mystery.',
    storyBody: 'Many children grow up knowing food only as something on a plate. Little Farmer helps them discover the people, care and choices behind every harvest — by letting them grow it themselves.',
    storyQuote: '“I planted it, I cared for it, and I sold it.”',
    storyQuoteAuthor: '— Keza, 9, Little Farmer graduate & savings pioneer',
    storyStatTitle: 'The Disconnection Problem in Rwanda:',
    storyStatText: 'In our formative survey of 100 parents and 50 youth in Kigali, 90% were unaware of economic opportunities in agriculture. While agriculture contributes over 25% of Rwanda’s GDP and employs 65% of the population, farmers are aging (average age 55–62), and youth make up less than 14% of the agricultural workforce.',

    // Steps
    stepsTag: 'LEARNING BY DOING',
    stepsHeading: 'From seed to self-belief.',
    stepsSubtitle: 'The learning journey: Understand → Grow → Harvest → Consume / Sell → Earn → Save → Reinvest. Every step connects practical agriculture with real financial agency.',
    step1Title: 'Understand',
    step1Desc: 'Meet the food system.',
    step2Title: 'Grow',
    step2Desc: 'Plant, care and problem-solve.',
    step3Title: 'Harvest',
    step3Desc: 'See effort become something real.',
    step4Title: 'Sell & save',
    step4Desc: "Price, earn and choose what's next.",

    // Tools
    toolsTag: 'PRACTICAL TOOLS, SERIOUS IMPACT',
    toolsHeading: 'A garden is just the beginning.',
    toolsBody: 'A complete package of four tools transforms schoolyard growing into an enduring learning asset that serves cohorts for up to 20 years.',
    tool1Title: 'Cone Garden',
    tool2Title: 'Mission Cards',
    tool3Title: 'Saving Box',
    tool4Title: 'Coaching & Training',

    // CTA
    ctaTag: 'LET’S GROW THIS TOGETHER',
    ctaHeading1: 'Plant the idea.',
    ctaHeading2: 'Grow the future.',
    ctaBody: 'Bring Little Farmer to a school or community. Partner with DreamDo to make practical learning part of every child’s story.',
    ctaButton: 'Reach out to partner with us',
    ctaAudience: 'Schools • Families • Community partners',

    // Footer
    footerTagline: 'Equipping children with practical life skills, entrepreneurial thinking, and personal responsibility through hands-on learning.',
    footerLocation: 'Kigali, Rwanda • African Leadership University (ALU) Campus',
    footerRights: 'All rights reserved.',

    // Slogan
    slogan: 'Dream it. Do it. Save for it.',
  },

  rw: {
    // Navigation
    navHome: 'Ahabanza',
    navLittleFarmer: 'Umuhinzi Muto',
    navAbout: 'Abo Turi Bo',
    navPartner: 'Fatanya natwe',
    navExplore: 'Reba uburyo bw’imyigire',

    // Hero
    heroTag: 'DREAMDO RWANDA / UMUHINZI MUTO',
    heroPilot: 'Icyiciro cy’Igerageza i Masaka',
    heroTitle1: 'Amaboko mato.',
    heroTitle2: 'Umusaruro munini.',
    heroSubtitle: 'Urugendo rufatika rwo guhinga no gucunga umutungo ku bana b’ejo hazaza — kuva ku rubuto rwa mbere kugeza ku igurishwa rya mbere. Guhindura abana b’u Rwanda abahinzi n’abazigama b’umwete aho kuba abaguzi gusa.',
    heroCtaPrimary: 'Zana Umuhinzi Muto mu kigo cyawe',
    heroCtaSecondary: 'Menya byinshi kuri gahunda',
    heroFootnote: 'BYUBATSWE MU RWANDA • BIKWIRAKWIZWA KU BW’IMPINDUKA',
    heroToggleConcept: 'Igishushanyo Mbonera',
    heroTogglePhoto: 'Ifoto yo mu Murima',
    heroPhotoCaption: 'Abana ku busitani bw’umunara w’imitego mu kigo cy’ishuri mu Rwanda — biga guhinga mu bikorwa bifatika.',

    // Stats
    statsHeading: 'Uburyo bwose bwo guhinga, mu kigo cy’ishuri.',
    stat1Val: 'Imyaka 6–14',
    stat1Label: 'y’abana b’abahanga bato',
    stat2Val: 'Ibyumweru 4',
    stat2Label: 'byo kwiga mu bikorwa',
    stat3Val: 'Imyaka 20',
    stat3Label: 'y’uburambe bw’ubusitani',

    // Story
    storyTag: 'IMPAMVU NYAMUKURU',
    storyHeading: 'Ibiryo ntibikwiye kuba amayobera.',
    storyBody: 'Abana benshi bakura bazi ko ibiryo biboneka ku isahani gusa. Gahunda y’Umuhinzi Muto ibafasha kumenya abantu, umwete n’amahitamo biri inyuma ya buri musaruro — babigizemo uruhare ubwabo.',
    storyQuote: '“Naragihinze, ndacyitaho, kandi ndakigurisha.”',
    storyQuoteAuthor: '— Keza, imyaka 9, uwarangije mu Muhinzi Muto n’umushakashatsi mu kuzigama',
    storyStatTitle: 'Ikibazo cy’ubumenyi buke ku buhinzi mu Rwanda:',
    storyStatText: 'Mu bushakashatsi bwacu bwakorewe ku babyeyi 100 n’urubyiruko 50 i Kigali, 90% ntibari bazi amahirwe y’ubukungu ari mu buhinzi. Nubwo ubuhinzi butanga hejuru ya 25% by’umusaruro mbumbe w’igihugu (GDP) bukagira n’abakozi 65%, abahinzi barashaje (impuzandengo y’imyaka 55–62), kandi urubyiruko ruri munsi ya 14% mu buhinzi.',

    // Steps
    stepsTag: 'KWIGA BIKORWA',
    stepsHeading: 'Kuva ku rubuto kugera ku kwigirira icyizere.',
    stepsSubtitle: 'Inzira y’imyigire: Gusobanukirwa → Guhinga → Gusarura → Kurya / Kugurisha → Kwinjiza Amafaranga → Kuzigama → Kongera Gushora. Buri ntambwe ihuza ubuhinzi n’ubushobozi bwo kwicungira umutungo.',
    step1Title: 'Gusobanukirwa',
    step1Desc: 'Menya uruhererekane rw’ibiribwa.',
    step2Title: 'Guhinga',
    step2Desc: 'Tera, witondere kandi ukemure ibibazo.',
    step3Title: 'Gusarura',
    step3Desc: 'Bona umwete wawe uvamo umusaruro ufatika.',
    step4Title: 'Kugurisha no Kuzigama',
    step4Desc: 'Genagura ibiciro, injiza amafaranga, uhitemo ibizakurikira.',

    // Tools
    toolsTag: 'IBIKORESHO BIFATIKA, IMPINDUKA ZIKOMEYE',
    toolsHeading: 'Ubusitani ni intangiriro gusa.',
    toolsBody: 'Ibikoresho bine by’ingenzi bihindura ikigo cy’ishuri ahantu ho kwigira heza hagenewe gufasha amatsinda y’abanyeshuri kugeza ku myaka 20.',
    tool1Title: 'Ubusitani bw’Umunara (Cone Garden)',
    tool2Title: 'Amakarita y’Imirimo (Mission Cards)',
    tool3Title: 'Isanduku yo Kuzigama (Saving Box)',
    tool4Title: 'Amahugurwa n’Ubufasha (Coaching)',

    // CTA
    ctaTag: 'DUFATANYE GUKUZA IKI GITEKEREZO',
    ctaHeading1: 'Biba igitekerezo.',
    ctaHeading2: 'Kura ejo hazaza.',
    ctaBody: 'Zana gahunda y’Umuhinzi Muto mu kigo cy’ishuri cyangwa mu muryango. Fatanya na DreamDo kugira ngo imyigire ngiro ibe amateka ya buri mwana.',
    ctaButton: 'Tuvugishe ufatanye natwe',
    ctaAudience: 'Amashuri • Imiryango • Abafatanyabikorwa',

    // Footer
    footerTagline: 'Gushyigikira abana mu kugira ubumenyi ngiro bw’ubuzima, gutekereza nk’abikorera, no kugira inshingano binyuze mu bikorwa bifatika.',
    footerLocation: 'Kigali, Rwanda • Kaminuza ya ALU (African Leadership University)',
    footerRights: 'Uburenganzira bwose burabitswe.',

    // Slogan
    slogan: 'Birote. Bikore. Bizigamire.',
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('dreamdo_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('dreamdo_lang', language);
  }, [language]);

  const t = (key) => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    return translations.en[key] || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'rw' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
