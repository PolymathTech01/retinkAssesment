import rethinkLogo from '../../Assets/rethinkLogo.svg';
import retink from '../../Assets/Retink.svg';
import retinkAvater from '../../Assets/Retink-avatar.svg';
import { signInWithGooglePopup } from '../../Utils/Firebase/Firebase.utils';
const Header = () => {
  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log('respn', response);
  };
  return (
    <div style={{ backgroundColor: 'rgba(126, 28, 254, 0.05)' }}>
      <div className='flex flex-wrap lg:ml-[153px] sm:mx-auto sm:max-w-md md:mx-auto md:max-w-lg lg:mx-0 lg:max-w-none pt-[61.25px]'>
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
          <div id='action' className='lg:mt-[50px] lg:mb-[118.81px]'>
            <h3 className='text-[#7E1CFE] font-[700] text-[24px] leading-[41px] md:text-center lg:text-left'>
              Sign Up For The BETA!
            </h3>
            <div id='beta' className='mt-[15px]'>
              <form>
                <input
                  className=' focus:outline-none border-x-0  border-b-[1px] border-[#000000] placeholder:italic placeholder:text-center placeholder:text-[#7E1CFE] placeholder:font-[300] placeholder:text-[15px] placeholder:leading-[26px] input-color bg-inherit text-center'
                  type='text'
                  placeholder='Business Name'
                />
                <span>would like a beta invite to</span>
                <input
                  className=' focus:outline-none border-x-0  border-b-[1px] border-[#000000] placeholder:italic placeholder:text-center placeholder:text-[#7E1CFE] placeholder:font-[300] placeholder:text-[15px] placeholder:leading-[26px] bg-inherit text-center'
                  type='text'
                  placeholder='@email address'
                />
                <span>when it's ready!</span>
                <div
                  id='buttons'
                  className='flex md:justify-center lg:justify-between lg:max-w-3xl mt-[36px]'
                >
                  <button
                    type='submit'
                    className='bg-[#7E1CFE] text-white md:px-[15px] sm:px-[45px] lg:px-[85px]  rounded-3xl md:py-2 sm:py-2 lg:py-5 font-[500] sm:text-[16px] md:text-[11px] lg:text-[21px] leading-[34px] md:mr-8 lg:mr-0 md:w-28 lg:w-fit btn'
                    onClick={signInWithGoogle}
                  >
                    Notify me
                  </button>
                  <button
                    className='border-[#7E1CFE] border-2 sm:px-[12px] sm:ml-3 md:ml-0 md:px-[20px] lg:px-[50px] rounded-3xl lg:py-3 font-[500] sm:text-[13px] md:text-[16px] lg:text-[21px] lg:leading-[34px] text-[#0085FF] decoration-[#0085FF] underline signup signupLink'
                    onClick={signInWithGoogle}
                  >
                    Sign up as a freelance partner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img
          src={retinkAvater}
          alt='retinkAvater'
          className='sm:hidden md:hidden lg:block lg:mx-auto'
        />
      </div>
    </div>
  );
};

export default Header;
//
// flex flex-col pt-20 px-4 text-white  sm:px-7 md:w-10/12 md:pb-20 md:text-left relative lg:left-10 xl:justify-center space-y-5
//
