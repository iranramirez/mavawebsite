import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio'


function App() {
  const portfolioLinks = [
    {
      title: 'Engineering Senior Design',
      caption: 'Designing Modular Autonomous Vehicle Platform',
    }
  ]
  return (
    <div classNameName="App">
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img className="img-fluid" src={require("./assets/img/companyLogoNav.png")} width="200" height="20" alt=""/>
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
              </li>
              {/*
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <header className="masthead">
        <div className="container" id="page-top">
          <div className="intro-text">
            <div className="intro-lead-in">Mava Innovations</div>
            <div className="intro-heading text-uppercase">Innovative Autonomous Vehicle Solutions</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
        </div>
      </header>

      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Software</h4>
              <p className="text-muted">Our software algorithms take care of all data acquisition, data processing, decision making, and translation to your autonomous vehicle.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-microchip fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Hardware</h4>
              <p className="text-muted">Custom hardware is not always needed in autonomous vehicle solutions. Regardless, our team provides PCB solutions for your autonomous vehicle if necessary. </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-cogs fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">System Integration</h4>
              <p className="text-muted">Our systems integration covers all sensor mounting, component wiring, systems communications and testing.</p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
        {console.log(portfolioLinks)}
      {/*
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2009-2011</h4>
                      <h4 className="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>March 2011</h4>
                      <h4 className="subheading">An Agency is Born</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>December 2012</h4>
                      <h4 className="subheading">Transition to Full Service</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>July 2014</h4>
                      <h4 className="subheading">Phase Two Expansion</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Be Part
                      <br/>Of Our
                      <br/>Story!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      */}
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('./assets/img/ricardo.jpg')} alt=""/>
                <h4>Ricardo Muñoz</h4>
                <p className="text-muted">Project Manager</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ricardo-mario-mc@tamu.edu" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/ricardo-munoz-castillo-52290114b/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('./assets/img/jonas.jpg')} alt=""/>
                <h4>Jonas Lossner</h4>
                <p className="text-muted">Systems Integration Engineer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jonaslo96@tamu.edu" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/jonas-lossner-171757127/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('./assets/img/iran.jpg')} alt=""/>
                <h4>Iran Ramirez</h4>
                <p className="text-muted">Hardware & Embedded Software Engineer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=iranramirez@tamu.edu" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/iranonoiran" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram" style={{color: 'white'}}></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/iranramirez/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('./assets/img/levi.jpg')} alt=""/>
                <h4>Levi Jordan</h4>
                <p className="text-muted">Software Engineer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ljordan56@tamu.edu" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('./assets/img/langari.jpg')} alt=""/>
                <h4>Dr. Reza Langari</h4>
                <p className="text-muted">Capstone Sponsor</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rlangari@tamu.edu" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/reza-langari-130165b/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('./assets/img/willey.jpg')} alt=""/>
                <h4>Prof. Mike Willey</h4>
                <p className="text-muted">Technical Advisor</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mwilley@tamu.edu" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/mikewilley/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Sponsors</h2>
            </div>
            <div className="col">
                <img className="img-fluid d-block mx-auto" src={require('./assets/img/etid.png')} alt=""/>
            </div>
            <div className="col">
                <img className="img-fluid d-block mx-auto" src={require('./assets/img/septentrio.png')} alt=""/>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <br/>
              <br/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; MAVA Innovations 2019</span>
            </div>
          </div>
        </div>
      </footer>
        </div>
  );
}

export default App;
