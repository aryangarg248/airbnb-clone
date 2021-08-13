import Image from "next/image"
import { useRouter } from 'next/dist/client/router'

function Banner() {
    const router = useRouter()

    return (
        <div className = "relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px]">
            <Image src = "https://links.papareact.com/0fm" layout = "fill" objectFit = "covered"/>

            <div className = "absolute top-1/2 w-full text-center">
                <p className = "text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button onClick = {() => router.push("https://aryangarg.netlify.app/#home")} className = "text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I am flexible</button>
            </div>
        </div>
    )
}

export default Banner
