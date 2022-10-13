import './card.css';
const Card = ({ logo, heading, content }) => {
  return (
    <div className='card-container h-[361px] w-[336px]  bg-white text-center pt-[20px] rounded-[20px]'>
      <img
        src={logo}
        alt={heading}
        className='w-[70px] h-[70px] ml-[39%] mt-[20px]'
      />
      <br />
      <h3 className='mt-[-18px] text-xl font-[600] pr-11 pl-11'>{heading}</h3>
      <p className='pr-[30px] pl-[30px] font-[400] text-[15px] leading-6 mt-[18px] text-center'>
        {content}
      </p>
    </div>
  );
};

export default Card;
