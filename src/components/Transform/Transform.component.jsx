import TransformProduct from './TransformProduct';
import TRANSFORM_DATA from '../../transform-data';
const Transform = () => {
  return (
    <div className='mt-[84px]'>
      <h3 className='text-[#7E1CFE] font-[600] text-[30px]  leading-[34px] text-center'>
        Transform your Creation Process
      </h3>
      <p className='text-[#4D4D4D] leading-normal sm:text-base font-medium text-center px-2  md:px-40 mt-[20px] mx-auto mb-auto p-[10px] w-[70%] text-[20px]'>
        With a new approach toordering content, you can now stop juggling
        multiple documents and meetings and start publishing content faster and
        on demand
      </p>
      <h3 className='text-[#7E1CFE] font-[600] text-[30px] mt-[64px] leading-[34px] text-center'>
        Activate your business growth with RetinkContent.
      </h3>
      <p className='text-[#4D4D4D] leading-normal sm:text-base font-medium text-center px-2  md:px-40 mt-[20px] mx-auto mb-auto p-[10px] w-[70%] text-[20px] pb-20'>
        Save time and maintain your brand identity within your budget range or
        sign up for affordable plans and still access multiple content services
        like:
      </p>
      <div className='flex gap-8 flex-wrap pr-[112px] pl-[202px]'>
        {TRANSFORM_DATA.map(({ id, images, content }) => {
          return (
            <TransformProduct key={id} images={images} content={content} />
          );
        })}
      </div>
    </div>
  );
};

export default Transform;
