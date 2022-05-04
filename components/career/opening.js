import React, { Component } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";


function Opening() {

  const sumbitContact = (data) => {
    console.log(data);
    fetch('/api/career', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
    return (
      <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
        <div className="container">
        <div>
        <AnimationOnScroll delay={100} animateIn="animate__fadeInUp">
          <h2 className="text-6xl Gilroy-Bold ">Current</h2>
          </AnimationOnScroll>
          <AnimationOnScroll delay={300} animateIn="animate__fadeInUp">
          <h4 className="openings-title">Openings</h4>
          </AnimationOnScroll>
        </div>
        <div>
        <AnimationOnScroll delay={100} animateIn="animate__fadeInUp">
          <div className="collapse bg-opening mb-6">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl text-white Gilroy-Bold">
                    Full Stack Developer
                  </h2>
                </div>
                <div>
                  <button className="btn-details">view details</button>
                  <button className="btn-apply">apply now</button>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label className="experiene-label">Experience</label>
                  <h4>1 to 4 Years</h4>
                </div>
                <div className="ml-5">
                  <label className="experiene-label">Positions</label>
                  <h4>5</h4>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <ul className="list-job">
                <li>Strong organizational and project management skills.</li>
                <li>
                  Proficiency with fundamental front end languages such as HTML,
                  CSS and JavaScript.
                </li>
                <li>
                  Familiarity with JavaScript frameworks such as Angular JS,
                  React and VueJs.
                </li>
                <li>
                  Proficiency with server side languages such as NodeJs, PHP and
                  Python.
                </li>
                <li>
                  Familiarity with database technology such as MySQL, Postgres
                  and MongoDB.
                </li>
                <li>Familiarity with web severs such as Apache and NGINX.</li>
                <li>Excellent verbal communication skills.</li>
                <li>Good problem solving skills.</li>
                <li>Ability to project manage.</li>
                <li>
                  Ability to communicate in English fluently and idiomatically.
                </li>
              </ul>
            </div>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={300} animateIn="animate__fadeInUp">
          <div className="collapse bg-opening mb-6">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl text-white Gilroy-Bold">
                    Full Stack Developer
                  </h2>
                </div>
                <div>
                  <button className="btn-details">view details</button>
                  <button className="btn-apply">apply now</button>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label className="experiene-label">Experience</label>
                  <h4>1 to 4 Years</h4>
                </div>
                <div className="ml-5">
                  <label className="experiene-label">Positions</label>
                  <h4>5</h4>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <ul className="list-job">
                <li>Strong organizational and project management skills.</li>
                <li>
                  Proficiency with fundamental front end languages such as HTML,
                  CSS and JavaScript.
                </li>
                <li>
                  Familiarity with JavaScript frameworks such as Angular JS,
                  React and VueJs.
                </li>
                <li>
                  Proficiency with server side languages such as NodeJs, PHP and
                  Python.
                </li>
                <li>
                  Familiarity with database technology such as MySQL, Postgres
                  and MongoDB.
                </li>
                <li>Familiarity with web severs such as Apache and NGINX.</li>
                <li>Excellent verbal communication skills.</li>
                <li>Good problem solving skills.</li>
                <li>Ability to project manage.</li>
                <li>
                  Ability to communicate in English fluently and idiomatically.
                </li>
              </ul>
            </div>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={500} animateIn="animate__fadeInUp">
          <div className="collapse bg-opening mb-6">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl text-white Gilroy-Bold">
                    Full Stack Developer
                  </h2>
                </div>
                <div>
                  <button className="btn-details">view details</button>
                  <button className="btn-apply">apply now</button>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label className="experiene-label">Experience</label>
                  <h4>1 to 4 Years</h4>
                </div>
                <div className="ml-5">
                  <label className="experiene-label">Positions</label>
                  <h4>5</h4>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <ul className="list-job">
                <li>Strong organizational and project management skills.</li>
                <li>
                  Proficiency with fundamental front end languages such as HTML,
                  CSS and JavaScript.
                </li>
                <li>
                  Familiarity with JavaScript frameworks such as Angular JS,
                  React and VueJs.
                </li>
                <li>
                  Proficiency with server side languages such as NodeJs, PHP and
                  Python.
                </li>
                <li>
                  Familiarity with database technology such as MySQL, Postgres
                  and MongoDB.
                </li>
                <li>Familiarity with web severs such as Apache and NGINX.</li>
                <li>Excellent verbal communication skills.</li>
                <li>Good problem solving skills.</li>
                <li>Ability to project manage.</li>
                <li>
                  Ability to communicate in English fluently and idiomatically.
                </li>
              </ul>
            </div>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={700} animateIn="animate__fadeInUp">
          <div className="collapse bg-opening mb-6">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl text-white Gilroy-Bold">
                    Full Stack Developer
                  </h2>
                </div>
                <div>
                  <button className="btn-details">view details</button>
                  <button className="btn-apply">apply now</button>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label className="experiene-label">Experience</label>
                  <h4>1 to 4 Years</h4>
                </div>
                <div className="ml-5">
                  <label className="experiene-label">Positions</label>
                  <h4>5</h4>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <ul className="list-job">
                <li>Strong organizational and project management skills.</li>
                <li>
                  Proficiency with fundamental front end languages such as HTML,
                  CSS and JavaScript.
                </li>
                <li>
                  Familiarity with JavaScript frameworks such as Angular JS,
                  React and VueJs.
                </li>
                <li>
                  Proficiency with server side languages such as NodeJs, PHP and
                  Python.
                </li>
                <li>
                  Familiarity with database technology such as MySQL, Postgres
                  and MongoDB.
                </li>
                <li>Familiarity with web severs such as Apache and NGINX.</li>
                <li>Excellent verbal communication skills.</li>
                <li>Good problem solving skills.</li>
                <li>Ability to project manage.</li>
                <li>
                  Ability to communicate in English fluently and idiomatically.
                </li>
              </ul>
            </div>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={900} animateIn="animate__fadeInUp">
          <div className="collapse bg-opening mb-6">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl text-white Gilroy-Bold">
                    Full Stack Developer
                  </h2>
                </div>
                <div>
                  <button className="btn-details">view details</button>
                  <button className="btn-apply">apply now</button>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label className="experiene-label">Experience</label>
                  <h4>1 to 4 Years</h4>
                </div>
                <div className="ml-5">
                  <label className="experiene-label">Positions</label>
                  <h4>5</h4>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <ul className="list-job">
                <li>Strong organizational and project management skills.</li>
                <li>
                  Proficiency with fundamental front end languages such as HTML,
                  CSS and JavaScript.
                </li>
                <li>
                  Familiarity with JavaScript frameworks such as Angular JS,
                  React and VueJs.
                </li>
                <li>
                  Proficiency with server side languages such as NodeJs, PHP and
                  Python.
                </li>
                <li>
                  Familiarity with database technology such as MySQL, Postgres
                  and MongoDB.
                </li>
                <li>Familiarity with web severs such as Apache and NGINX.</li>
                <li>Excellent verbal communication skills.</li>
                <li>Good problem solving skills.</li>
                <li>Ability to project manage.</li>
                <li>
                  Ability to communicate in English fluently and idiomatically.
                </li>
              </ul>
            </div>
          </div>
          </AnimationOnScroll>
        </div>
        </div>
      </div>
    );
  }

export default Opening;
