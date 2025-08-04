import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} NextStep. {t('footerText')}
      </p>
    </footer>
  );
}

export default Footer;
