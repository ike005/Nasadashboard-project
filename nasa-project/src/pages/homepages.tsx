

import AstronomyHeader from '../assets/astronomy-image.svg';
import {useState, useEffect} from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



const Homepage = () => {
    const [astroPictureOfTheDay, setAstroPictureOfTheDay] = useState({ imageUrl: '', title: '', explanation: ''});

    async function getAstroPictureOfTheDay() {
        const apiKey = import.meta.env.VITE_APOD_API;
        try{
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);

            if(!response.ok){
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            const imageUrl = data.url;
            const title = data.title;
            const explanation = data.explanation;

            setAstroPictureOfTheDay({imageUrl, title, explanation});
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    interface PlanetData {
        name: string;
        mass: number;
        radius: number;
        distance_light_year: number;
        host_star_temperature: number;
    }


    const [planetsData, setPlanetsData] = useState<PlanetData[] >([]);

    async function getPlanetsData() {
        const apiKey = import.meta.env.VITE_PLANETS_API;

        const planetNames = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
        const planets: PlanetData[] = [];

        try {
            for (const name of planetNames) {
                const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=${name}`, {
                    headers: { "X-Api-Key": apiKey }
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch planet ${name}`);
                }

                const data: PlanetData[] = await response.json();
                planets.push(...data);
            }
            setPlanetsData(planets);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }




    useEffect(() => {
        getAstroPictureOfTheDay();
        getPlanetsData();
    }, []);


    return(
        <>
            <div className="h-full bg-gradient-to-b from-[#080F20] to-[#121E43] px-4 md:px-20 py-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center border-[1.5px] border-[#152B50] bg-[#0F182B] p-4 md:p-6 rounded-3xl gap-4 md:gap-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" className="w-16 md:w-24"/>
                    <div>
                        <h1 className="text-[#24D3EF] text-xl md:text-3xl font-bold">NASA Space Information Dashboard</h1>
                        <p className="text-[#6389B4] text-sm md:text-md">Real-time space data and exploration</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
                    {/* Astronomy Picture */}
                    <div className="flex flex-col gap-4 border-[1.5px] border-[#152B50] p-4 md:p-6 rounded-3xl flex-1">
                        <div className="flex flex-row items-center gap-2 md:gap-4">
                            <img src={AstronomyHeader} alt="astronomy image section" className="w-12 md:w-16"/>
                            <h3 className="text-[#24D3EF] text-lg md:text-xl font-bold">Astronomy Picture of the Day</h3>
                        </div>
                        <div className="w-full h-64 md:h-96">
                            <img className="w-full h-full object-cover rounded-3xl" src={astroPictureOfTheDay.imageUrl} alt="astronomy image" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-[#24D3EF] text-md font-bold">{astroPictureOfTheDay.title}</h4>
                            <p className="text-[#8296B3] text-sm md:text-md">{astroPictureOfTheDay.explanation}</p>
                        </div>
                    </div>


                    <div className="flex flex-row md:flex-col gap-6 md:w-1/3 w-full">
                        {/*<div className="border-[1.5px] border-[#152B50] p-4 md:p-6 rounded-3xl h-64 md:h-1/2">*/}
                        {/*    <img src="https://apod.nasa.gov/apod/image/2511/NebularSymphonyOrionsBelt2048.jpg" alt="astronomy side image" className="w-full h-full object-cover rounded-3xl" />*/}
                        {/*</div>*/}

                        <div className="bg-[#0F182B] border-[1.5px] border-[#152B50] p-2 md:p-4 rounded-3xl w-full h-64 md:h-1/2 overflow-auto">
                            <TableContainer component="div">
                                <Table sx={{ minWidth: 0 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: "#24D3EF", fontWeight: "bold" }}>Planet</TableCell>
                                            <TableCell align="right" sx={{ color: "#24D3EF", fontWeight: "bold" }}>Mass</TableCell>
                                            <TableCell align="right" sx={{ color: "#24D3EF", fontWeight: "bold" }}>Radius</TableCell>
                                            <TableCell align="right" sx={{ color: "#24D3EF", fontWeight: "bold" }}>Star Temp</TableCell>
                                            <TableCell align="right" sx={{ color: "#24D3EF", fontWeight: "bold" }}>Distance (LY)</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {planetsData.map((planet) => (
                                            <TableRow
                                                key={planet.name}
                                                sx={{
                                                    "&:last-child td, &:last-child th": { border: 0 },
                                                    "&:hover": { backgroundColor: "rgba(36, 211, 239, 0.1)" }
                                                }}
                                            >
                                                <TableCell sx={{ color: "#FFFFFF" }}>{planet.name}</TableCell>
                                                <TableCell align="right" sx={{ color: "#FFFFFF" }}>{planet.mass}</TableCell>
                                                <TableCell align="right" sx={{ color: "#FFFFFF" }}>{planet.radius}</TableCell>
                                                <TableCell align="right" sx={{ color: "#FFFFFF" }}>{planet.host_star_temperature}</TableCell>
                                                <TableCell align="right" sx={{ color: "#FFFFFF" }}>{planet.distance_light_year}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Homepage;