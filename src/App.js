import React, {useState} from 'react';
import './style/app.scss';
import Nav from './components/Nav'
import Intro from './components/Intro';
import { useTranslation } from 'react-i18next';
import About from './components/About';
import Ourgames from './components/Ourgames';
import Video from './components/Video';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  return (
    <>
     <Nav
     about={t("about")}
     ourgames={t("ourgames")}
     contact ={t("contact")}
     changeEN ={()=>changeLanguage("en")}
     changePL ={()=>changeLanguage("pl")}/>
     <Intro title={t("title")}/>
     <About aboutTitle={t("aboutTitle")}
            aboutText={t('aboutText')}/>
     <Ourgames titleGames={t('titleGames')}
                textGames={t('textGames')}
                text2Games={t("text2Games")}/>
      <Video/>
      <Contact titleContact={t("titleContact")}
               inputName = {t("inputName")}
               inputEmail = {t("inputEmail")}
               inputMessage = {t("inputMessage")}
               send = {t("send")}/>
       <Footer about={t("about")}
               ourgames={t("ourgames")}
               contact ={t("contact")}
               teams = {t("teams")}
               polis = {t("polis")}/>       
    </>
  );
}

export default App;
