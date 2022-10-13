import rethinkLogo from '../../Assets/rethinkLogo.svg';
import retink from '../../Assets/Retink.svg';
import connect from '../../Assets/connect.svg';
const Footer = () => {
  return (
    <>
      <div className='bg-[#D0D0D0] flex flex-wrap justify-between px-[63px]'>
        <div id='retink'>
          <div className='logos flex my-16'>
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
          <div className='product flex gap-24 justify-between flex-wrap max-w-2xl mb-[23px]'>
            <h3 className='font-[600] text-[24px] leading-[36px] text-[#131313]'>
              Product by Retink Media UG
            </h3>
            <h3 className='font-[600] text-[24px] leading-[36px] text-[#131313]'>
              Get Early Acess
            </h3>
          </div>
          <div className='location flex gap-24 justify-between flex-wrap'>
            <h3 className='font-[600] text-[24px] leading-[36px] text-[#131313]'>
              Bonn, Germany
            </h3>
            <h3 className='font-[600] text-[24px] leading-[36px] text-[#131313] ml-14'>
              Provide Feedback
            </h3>
          </div>
        </div>
        <div id='connect' className='my-16'>
          {/* <h3>Connect with Us</h3>
        <div id="socials" className='flex'>

        </div> */}
          <img src={connect} alt='connect' />
        </div>
      </div>
      <div
        id='copyright'
        className='bg-[#000000] text-white flex justify-between px-[63px] py-[59px]'
      >
        <h3 className='font-[500] text-[16px] leading-6'>
          Copyright &copy; 2021 Retink
        </h3>
        <div className='flex gap-12'>
          <a href='https://retink' className='font-[500] text-[16px] leading-6'>
            Privacy Policy
          </a>

          <a href='https://retink' className='font-[500] text-[16px] leading-6'>
            Terms of Service
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
