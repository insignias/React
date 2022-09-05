import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
        <div className="widgets_articleLeft">
            <FiberManualRecord />
        </div>
            
        <div className="widgets_articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("LinkedIn Clone is Ready", "5000 users already !")}
        {/* {newsArticle("Synopsys News", "Swetha Pappala is the new SENIOR STAFF ENGINEER !")} */}
        {newsArticle("Tesla News", "Tesla hits new highs in stock value !")}
        {newsArticle("COVID19 News", "Coronavirus is real !")}
    </div>
  )
}

export default Widgets