import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TemplateMobile from './TemplateMobile';
import TemplateDesktop from './TemplateDesktop';

const Template = props => {
  const [isMobile, setIsMobile] = useState(false);
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
      <AppBar position='static'>{isMobile ? <TemplateMobile /> : <TemplateDesktop />}</AppBar>
      {props.children}
    </div>
  );
};

export default Template;
