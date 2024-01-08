
import { footerLogo, footerEnd} from "../assets/images";
import {  socialMedia, socialMedia2 } from "../constants";



const Footer = () => {
  return (
    <footer className='flex max-container justify-center align-middle'>
      <div className='justify-between items-center gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-center mt-0'>
          <a href='/'>
            <img 
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0 items-center'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-black-400 sm:max-w-sm text-center items-center'>
            Get shoes ready for the new term at your nearest Adidas store. Find
            Your perfect Size In Store.
          </p>
          <p className="text-black mt-3 font-bold">Created by <span className="text-coral-red">Pranesh.</span> </p>
          <div className='flex items-center gap-5 mt-5'>
            
          <div className='flex items-center gap-5 mt-2'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer'
                key={icon.alt}
              >
                <a href="https://www.linkedin.com/in/pranesh-sd/">
                <img src={icon.src} alt={icon.alt} width={30} height={30} />
                </a>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-5 mt-2'>
            {socialMedia2.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer'
                key={icon.alt}
              >
                <a href="https://github.com/Pranu4228">
                <img src={icon.src} alt={icon.alt} width={30} height={30} />
                </a>
              </div>
            ))}
          </div>
            
              
            
          </div>
        </div>
        <p className=" text-black mt-5 text-center font-[poppins]">&copy;Copyright. All rights reserved.</p>
       <div className=" grid grid-cols-4 gap-10 mb-0">
        <img src={footerEnd} alt="logo" width={150} height={100} />
        <img src={footerEnd} alt="logo" width={150} height={100} />
        <img src={footerEnd} alt="logo" width={150} height={100} />
        <img src={footerEnd} alt="logo" width={150} height={100} />
        </div>
        </div>
        
    </footer>
    
  
    
  
  );
};

export default Footer;