import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TemplateMobile from './TemplateMobile';
import TemplateDesktop from './TemplateDesktop';
import Pesquisar from './Pesquisar';
import NotificationContainer from '../notification';
import LoadingContainer from '../loading';

const Template = props => {
  const [isMobile, setIsMobile] = useState(true);
  const [aberto, setAberto] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.screen.width < 600);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return function() {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div id='app'>
      <AppBar position='static'>
        {isMobile ? (
          <TemplateMobile setAberto={setAberto} />
        ) : (
          <TemplateDesktop setAberto={setAberto} />
        )}
        <Pesquisar aberto={aberto} setAberto={setAberto} />
      </AppBar>
      <LoadingContainer />
      <NotificationContainer />
      {props.children}
    </div>
  );
};

export default Template;
