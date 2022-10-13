import rethinkLogo from '../../Assets/rethinkLogo.svg';
import retink from '../../Assets/Retink.svg';
import retinkAvater from '../../Assets/Retink-avatar.svg';
const Header = () => {
  return (
    <div className='' style={{ backgroundColor: 'rgba(126, 28, 254, 0.05' }}>
      <div className='flex sm:flex-row flex-col ml-[153px] pt-[61.25px]'>
        <div className=' flex flex-col'>
          <div className='logos flex '>
            <img
              src={rethinkLogo}
              alt='rethinkLogo'
              className='w-[30.75px] h-[33px]'
            />
            <img
              src={retink}
              alt='retink'
              className='w-[121.14px] h-[30.25px]'
            />
          </div>
          <div id='info' className='mt-[111.67px] ml-[4px]'>
            <h1 className='text-[40px] xl:text-5xl font-[700] lg:leading-normal'>
              Get Advanced AI
              <p>+</p>
              Expert Created<span className='text-[#7E1CFE]'>Logos</span>
            </h1>
            <p className='text-[20px] font-[700] leading-[34px] max-w-screen-lg sm:text-xl mb-5 mt-[54px]'>
              Boost your sales{' '}
              <span className='text-[#7E1CFE]'> 10x faster</span> with content
              customized by our unique partnership of{' '}
              <span className='text-[#7E1CFE]'>
                {' '}
                human creativity and AI optimization
              </span>
            </p>
          </div>
          <div id='action' className='mt-[50px] mb-[118.81px]'>
            <h3 className='text-[#7E1CFE] font-[700] text-[24px] leading-[41px]'>
              Sign Up For The BETA!
            </h3>
            <div id='beta' className='mt-[15px]'>
              <form>
                <input
                  className=' focus:outline-none border-x-0  border-b-[1px] border-[#000000] placeholder:italic placeholder:text-center placeholder:text-[#7E1CFE] placeholder:font-[300] placeholder:text-[15px] placeholder:leading-[26px] placeholder:bg-[#F5F5F5] bg-[#F5F5F5] text-center'
                  type='text'
                  placeholder='Business Name'
                />
                <span>would like a beta invite to</span>
                <input
                  className=' focus:outline-none border-x-0  border-b-[1px] border-[#000000] placeholder:italic placeholder:text-center placeholder:text-[#7E1CFE] placeholder:font-[300] placeholder:text-[15px] placeholder:leading-[26px] placeholder:bg-[#F5F5F5] bg-[#F5F5F5] text-center'
                  type='text'
                  placeholder='@email address'
                />
                <span>when it's ready!</span>
                <div
                  id='buttons'
                  className='flex justify-between max-w-3xl mt-[36px]'
                >
                  <button
                    type='submit'
                    className='bg-[#7E1CFE] text-white px-[85px] rounded-3xl py-5 font-[500] text-[21px] leading-[34px]'
                  >
                    Notify me
                  </button>
                  <button className='border-[#7E1CFE] border-2 px-[50px] rounded-3xl py-3'>
                    <a
                      href='https://retink.io/fap'
                      target='__blank'
                      className=' font-[500] text-[21px] leading-[34px] text-[#0085FF] decoration-[#0085FF] underline'
                    >
                      Sign up as a freelance partner
                    </a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img src={retinkAvater} alt='retinkAvater' className='relative' />
      </div>
    </div>
  );
};

export default Header;
//
// flex flex-col pt-20 px-4 text-white  sm:px-7 md:w-10/12 md:pb-20 md:text-left relative lg:left-10 xl:justify-center space-y-5
//
