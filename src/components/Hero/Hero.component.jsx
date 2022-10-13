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
          width='737'
          height='415'
          className='mx-auto'
        />
      </section>
    </div>
  );
};

export default Hero;
