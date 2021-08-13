import Image from "next/image";
import profilePic from '../public/img1.webp'
import profilePic2 from '../public/img2.webp'
import profilePic3 from '../public/img3.webp'

function ThreeCard() {
    return (
        <div className = "flex ">
            <div className = " m-4 mt-5 space-x-4relative h-96 w-1/3 cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
                <Image src = {profilePic} layout = "fill" className = "rounded-xl"/>
            </div>
            <div className = " m-4 mt-5 space-x-4 relative h-96 w-1/3 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <Image src = {profilePic2} layout = "fill" className = "rounded-xl"/>
            </div>
            <div className = " m-4 mt-5 space-x-4 relative h-96 w-1/3 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <Image src = {profilePic3} layout = "fill" className = "rounded-xl"/>

            </div>
        </div>
    )
}

export default ThreeCard
