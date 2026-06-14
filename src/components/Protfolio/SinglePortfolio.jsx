import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const SinglePortfolio = ({ data, getData }) => {
  const { imgLink, imgLinkLg, title, subTitle, video, effect, duration, delay } = data;

  return (
    <div className="col-lg-4 col-md-6" data-aos={effect} data-aos-duration={duration} data-aos-delay={delay}>
      <div
        className="st-portfolio-single st-style1"
        role="button"
        tabIndex={0}
        onClick={() => getData(imgLinkLg, title, subTitle, video)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && getData(imgLinkLg, title, subTitle, video)}
      >
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={imgLink} alt={title} />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon={video ? 'mdi:play-circle' : 'mdi:plus-circle'} />
              <h5>{title}</h5>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

SinglePortfolio.propTypes = {
  data: PropTypes.object
}

export default SinglePortfolio
