const TransformProduct = ({ images, content }) => {
  return (
    <div className='h-[400px] w-[450px]'>
      <img
        src={images}
        alt={content}
        className='object-contain w-[450px] h-[283px]'
      />
      <span>
        <p className='font-[400] text-[15px] leading-[26px] relative left-12'>
          {content}
        </p>
      </span>
    </div>
  );
};

export default TransformProduct;
