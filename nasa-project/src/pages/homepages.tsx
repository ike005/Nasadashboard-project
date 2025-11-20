// import NasaLogo from "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg";

import AstronomyHeader from '../assets/astronomy-image.svg';

//NASA API KEY: Av1cyZWhQeuP7o7MeTLmsNaC6boQxktyXvlZ6wPG
const Homepage = () => {
    const [astroPictureOfTheDay, setAstroPictureOfTheDay] = useState();

    async function getAstroPictureOfTheDay() {

    }


    return(
        <>
            <div className="h-screen bg-gradient-to-b from-[#080F20] to-[#121E43] px-[5rem] py-[3rem]">

                <div className="flex flex-row items-center border-[1.5px] border-[#152B50] bg-[#0F182B] p-[1.2rem] rounded-3xl">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" />
                    <div>
                        <h1 className="text-[#24D3EF] text-xl lg:text-3xl font-bold">NASA Space Information Dashboard</h1>
                        <p className="text-[#6389B4] text-md">Real-time space data and exploration</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between h-[60vh] mt-[2rem]">
                    <div className="flex flex-col gap-4 border-[1.5px] border-[#152B50] p-[1.2rem] rounded-3xl w-[65%] min-h-[100%]">
                        <div className="flex flex-row items-center gap-[0.6rem]">
                            <img src={AstronomyHeader}  alt="astronomy image section" />
                            <h3 className="text-[#24D3EF] text-xl font-bold">Astronomy Picture of the Day</h3>
                        </div>

                        <div className="h-[74%]">
                            <img className="w-[100%] h-[100%] rounded-3xl" src="https://apod.nasa.gov/apod/image/2511/NebularSymphonyOrionsBelt2048.jpg" alt="astronomy image" />
                        </div>

                        <p className="text-[#8296B3]">Alnitak, Alnilam, and Mintaka are the bright bluish stars from east to west (upper right to lower left) along the diagonal in this cosmic vista. Otherwise known as the Belt of Orion, these three blue supergiant stars are hotter and much more massive than the Sun. They lie from 700 to 2,000 light-years away, born of Orion's well-studied interstellar clouds. In fact, clouds of gas and dust adrift in this region have some surprisingly familiar shapes, including the dark Horsehead Nebula and Flame Nebula near Alnitak at the upper right. The famous Orion Nebula itself is off the right edge of this colorful starfield. The telescopic frame spans almost 4 degrees on the sky.</p>
                    </div>

                    <div className="w-[32%] h-[100%] flex flex-col justify-between">
                        <div className="border-[1.5px] border-[#152B50] p-[1.2rem] rounded-3xl w-[100%] h-[48%]">
                            <img src="https://apod.nasa.gov/apod/image/2511/NebularSymphonyOrionsBelt2048.jpg" alt="astronomy image section" />
                        </div>

                        <div className="border-[1.5px] border-[#152B50] p-[1.2rem] rounded-3xl w-[100%] h-[48%]">
                            <img src="https://apod.nasa.gov/apod/image/2511/NebularSymphonyOrionsBelt2048.jpg" alt="astronomy image section" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Homepage;