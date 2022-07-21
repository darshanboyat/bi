import React, { Component } from "react";

class SolutionLanguage extends Component {
  render() {
    return (
      <div>
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container">
            <div>
              <h2 className="Gilroy-Bold lg:text-4xl text-3xl text-white pt-8">
                We develop solutions armed with <br /> diverse technologies
              </h2>
              <p className=" pb-8 pt-2">
                Armed with years of experience developing web and
                mobilesolutions, we consult our clients on which technology
                stacks canpositively impact their businesses.
              </p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1">
              <div className="bg-stack lg:mb-0 mb-4">
                <h2>Design</h2>
                <ul className="text-center">
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Abode XD</li>
                  <li>After Effects</li>
                  <li>Sketch</li>
                  <li>Invision</li>
                </ul>
              </div>

              <div className="bg-stack lg:mb-0 mb-4">
                <h2>Mobile</h2>
                <ul className="text-center">
                  <li>Kotlin</li>
                  <li>Swift</li>
                  <li>Java</li>
                  <li>React Native</li>
                  <li>Flutter</li>
                  <li>Objective C</li>
                </ul>
              </div>
              <div className="bg-stack lg:mb-0 mb-4">
                <h2>Frontend</h2>
                <ul className="text-center">
                  <li>Docker</li>
                  <li>Blockchain</li>
                  <li>Ruby on Rails</li>
                  <li>Ardunio</li>
                  <li>NLP</li>
                  <li>Data Mining</li>
                </ul>
              </div>
              <div className="bg-stack lg:mb-0 mb-4">
                <h2>Backend</h2>
                <ul className="text-center">
                  <li>LAMP</li>
                  <li>Node js</li>
                  <li>Mongo</li>
                  <li>Redis</li>
                </ul>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 mt-8">
              <div className="bg-stack lg:mb-0 mb-4">
                <h2>Blockchain</h2>
                <ul className="text-center">
                  <li>Ethereum</li>
                  <li>Tierion</li>
                  <li>Hyperledger</li>
                  <li>Solc</li>
                  <li>Remix</li>
                  <li>Mist</li>
                  <li>Etherscan</li>
                  <li>Truffle</li>
                </ul>
              </div>

              <div className="bg-stack lg:mb-0 mb-4">
                <h2>Database</h2>
                <ul className="text-center">
                  <li>DynamoDB</li>
                  <li>Firebase</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>MySQL/MariaDB</li>
                </ul>
              </div>
              <div className="bg-stack lg:mb-0 mb-4">
                <h2>Infrastructure</h2>
                <ul className="text-center">
                  <li>AWS</li>
                  <li>TypeScript</li>
                  <li>GitLab</li>
                  <li>Jenkins</li>
                  <li>Nginx</li>
                </ul>
              </div>
              <div className="bg-stack lg:mb-0 mb-4">
                <h2>Testing</h2>
                <ul className="text-center">
                  <li>Selenium WebDriver</li>
                  <li>Appium</li>
                  <li>Apache JMeter</li>
                  <li>Sauce Labs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SolutionLanguage;
