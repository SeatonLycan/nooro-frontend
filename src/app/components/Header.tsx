import rocketIcon from '../../../public/rocket.png';
import Image from 'next/image'


const Header = () => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center h-[200px]">
      <Image 
        src={rocketIcon.src}
        alt="Rocket Icon" 
        width="22"
        height="28"
        />
      <p className='text-light-blue text-4xl font-black'>Todo</p>
      <p className='text-light-purple text-4xl font-black'>App</p>
    </div>
  )
}

export default Header;