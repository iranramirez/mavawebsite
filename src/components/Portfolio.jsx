import React from 'react';

export default({portfolioLinks}) => {
    return(
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <br/>
              <br/>
            </div>
          </div>
          <div className="row">
              {
                portfolioLinks && portfolioLinks.map(({ title, caption }, index) => 
                    <div className="col portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={require("../assets/img/capstoneTruck.jpg")} alt=""/>
                        </a>
                        <div className="portfolio-caption"> 
                            <h4>{title}</h4>
                            <p className="text-muted">{caption}</p>
                        </div>
                  </div>
                )
              }
          </div>
        </div>
      </section>
    )
}