import spotifu from '@assets/img/placeholders/spotifu.jpeg';
import blockMaster from '@assets/img/placeholders/block-master.png';
import calculator from '@assets/img/placeholders/calculator.jpeg';


export const projects = [
    {
        number: "01",
        title: "Block Master",
        languages: ["Styled Components", "React", "Javascript"],
        description: "A block buster website (like Netflix) where it fetches movies from tmdb(The movie DB) so the user can see and select one movie to see more details about that movie.",
        cta: "https://github.com/mgueyraud/block-master/",
        imageSource: blockMaster,
    },
    {
        number: "02",
        title: "Spotifu - Spotify Clone",
        languages: ["JavaScript", "SASS", "React", "HTML"],
        description: "A clone of the Spotify web page, where you can navigate into an album, and also hear music with my own library to play music in the DOM",
        cta: "https://github.com/mgueyraud/Spotifu-SpotifyClone",
        imageSource: spotifu,
    },
    {
        number: "03",
        title: "Calculator App",
        languages: ["Typescript", "React Native"],
        description: "A mobile app (Clone of the calculator of iOS), where you can do calculations built with React Native and Typescript",
        cta: "https://github.com/mgueyraud/calculator_iOS_RN",
        imageSource: calculator,
    },
];