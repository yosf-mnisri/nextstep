import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        title: "Your Next Step",
        subtitle: "Explore jobs, internships and more"
      },
      mainContent: {
        journeyTitle: "Your Journey Begins Here",
        journeyDescription: "This is where you can explore various opportunities!"
      },
      profile: "Profile",
      phdResearcher: "PhD Researcher",
      jobs: "Jobs",
      stages: "Internships",
      concours: "Exams",
      language: "Language",
      about: "About",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      footerText: "All rights reserved."
    }
  },
  fr: {
    translation: {
      header: {
        title: "Votre Prochaine Étape",
        subtitle: "Explorez les emplois, stages et plus encore"
      },
      mainContent: {
        journeyTitle: "Votre parcours commence ici",
        journeyDescription: "Ici, vous pouvez explorer de nombreuses opportunités !"
      },
      profile: "Profil",
      phdResearcher: "Chercheur en doctorat",
      jobs: "Emplois",
      stages: "Stages",
      concours: "Concours",
      language: "Langue",
      about: "À propos",
      education: "Éducation",
      skills: "Compétences",
      contact: "Contact",
      email: "E-mail",
      phone: "Téléphone",
      footerText: "Tous droits réservés."
    }
  },
  ar: {
    translation: {
      header: {
        title: "خطوتك التالية",
        subtitle: "استكشف الوظائف والتداريب والمزيد"
      },
      mainContent: {
        journeyTitle: "رحلتك تبدأ من هنا",
        journeyDescription: "هنا يمكنك استكشاف العديد من الفرص!"
      },
      profile: "الملف الشخصي",
      phdResearcher: "باحث دكتوراه",
      jobs: "وظائف",
      stages: "تداريب",
      concours: "مباريات",
      language: "اللغة",
      about: "نبذة",
      education: "التعليم",
      skills: "المهارات",
      contact: "اتصال",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      footerText: "جميع الحقوق محفوظة."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // langue par défaut
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
