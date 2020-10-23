import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__avatar" alt='Аватар автора'/>
      <div className="about__text">
        <h1 className="about__title">Об авторе</h1>
        <p className="about__description">Автором настоящего проекта является Евгения Ольта. Пока не очень опытный, но очень смелый джуниор веб-разработки, которому покорились просторы HTML и CSS, неприступный JS и REACT, загадочные БЭМ, Figma и Webpack и даже великий и ужасный Git. Мы живем в эпоху, в которой кто владеет информацией, тот владеет миром. Именно поэтому появилось приложение News-explorer - теперь владеть миром стало гораздо проще!</p>
      </div>
    </section>
  )
};

export default About;