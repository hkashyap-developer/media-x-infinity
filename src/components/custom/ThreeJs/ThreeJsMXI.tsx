import Image from "next/image";
import MXILogo from './hero-1.jpg'

export default function Home() {
  return (
    <Image 
    src={MXILogo} 
    height="1920" 
    width="1920" 
    alt="MXI Logo"
    className="max-w-[600px] mx-auto"
    />
  );
}
