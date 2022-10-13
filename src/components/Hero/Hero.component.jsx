import videoScreenshot from '../../Assets/videoScreenshot.png';
const Hero = () => {
  return (
    <div className='bg-[#F5F5F5] pt-[113.19px]'>
      <section id='video' className=''>
        <h2 className='text-center text-[#7E1CFE] font-[700] text-[28px] leading-[48px] mb-[22px]'>
          EXPLAINER VIDEO
        </h2>
        <img
          src={videoScreenshot}
          alt='Video screenshot'
          className='mx-auto sm:w-[500px] sm:h-[270px] md:w-[737px] md:h-[390px]'
        />
      </section>
    </div>
  );
};

export default Hero;
