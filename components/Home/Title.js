import ArrowRight from "../../public/assets/arrow.svg";

const Title = () => {
  return (
    <div className='ml-16 mb-16'>
      <div className='flex items-center'>
        <h1 className='text-[10rem] font-bold text-white'>Bio</h1>
        <div className='w-20 h-20 ml-10'>
          <ArrowRight className='w-full h-full' />
        </div>
      </div>
    </div>
  );
};

export default Title;
