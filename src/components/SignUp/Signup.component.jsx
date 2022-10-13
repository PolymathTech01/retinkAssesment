import './signup.css';
const Signup = () => {
  return (
    <div className='pt-36 bg-[#F5F5F5] pb-32'>
      <h3 className='text-[#7E1CFE] font-[600] text-[30px]  leading-[41px] text-center'>
        Sign Up For The BETA to see more
      </h3>
      <form className='flex gap-3 mx-auto max-w-[30rem] py-12 '>
        <input
          type='text'
          placeholder='Business Name'
          className='w-[255px] h-[64px] p-7 text-center rounded-2xl border-[2px] border-solid border-[#754DE880] focus:outline-none focus-visible:border-[#754DE880] placeholder:text-[#754DE880]'
        />
        <input
          type='enail'
          placeholder='Email'
          className='w-[255px] h-[64px] p-7 text-center rounded-2xl border-[2px] border-solid border-[#754DE880] focus:outline-none focus-visible:border-[#754DE880] placeholder:text-[#754DE880]'
        />
      </form>
      <div className='ml-8 text-center pb-7'>
        <button
          type='submit'
          className='notify bg-[#7E1CFE] px-[63px] pt-[12px] pb-[12px] text-white rounded-2xl font-[500] text-[20px] leading-[34px]'
        >
          Notify me
        </button>
        <br />
        <button className='border-[#7E1CFE] border-2 px-[50px] rounded-3xl mt-[40px] py-5'>
          <a
            href='https://retink.io/fap'
            target='__blank'
            className=' font-[500] text-[21px] leading-[34px] text-[#0085FF] decoration-[#0085FF] underline'
          >
            Sign up as a freelance partner
          </a>
        </button>
      </div>
    </div>
  );
};

export default Signup;
