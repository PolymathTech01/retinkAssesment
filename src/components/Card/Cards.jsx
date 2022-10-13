import CARD_DATA from '../../card-data';
import Transform from '../Transform/Transform.component';
import Card from './Card.component';
import './card.css';

const Cards = () => {
  return (
    <div className='pt-32 bg-[#F5F5F5]'>
      <div className='cards-container '>
        {CARD_DATA.map(({ id, logo, heading, content }) => {
          return (
            <Card logo={logo} heading={heading} content={content} key={id} />
          );
        })}
      </div>
      <Transform />
    </div>
  );
};

export default Cards;
