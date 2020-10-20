import React from 'react';
import './About.css';

function About() {
  return (
    <section className="About">
      <img className="About__avatar" alt='Аватар автора'/>
      <h1 className="About__title">Об авторе</h1>
      <p className="About__description">Автором настоящего проекта является Евгения Ольта. Пока не очень опытный, но очень смелый джуниор веб-разработки, которому покорились просторы HTML и CSS, неприступный JS и REACT, загадочные БЭМ, Figma и Webpack и даже великий и ужасный Git. Мы живем в эпоху, в которой кто владеет информацией, тот владеет миром. Именно поэтому появилось приложение News-explorer - теперь владеть миром стало гораздо проще!</p>
    </section>
  )
};

export default About;