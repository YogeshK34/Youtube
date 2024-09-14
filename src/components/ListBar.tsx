import { useRouter } from "next/router";
import { VideoCard } from "./CardComponent"
const VIDEOS = [
    {
        id: 1,
        title: "Interstellar: Space video 4k",
        image: "/photo2.jpg",
        thumbnail: "/thumbnail.jpeg",
        author: "Christopher Nolan",
        views: "100K",
        timeStamp: "10 Years ago",
    }, {
        id: 2,
        title: "Interstellar",
        image: "/photo2.jpg",
        thumbnail: "/thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100M",
        timeStamp: "2 Months ago",
    }, {
        id: 3,
        title: "Virat Kohli",
        image: "/photo3.jpg",
        thumbnail: "/thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "70K",
        timeStamp: "2 Months ago",
    }, {
        id: 4,
        title: "Game of Thrones: Winter is coming",
        image: "/photo4.jpg",
        thumbnail: "/thumbnail.jpeg",
        author: "David & Dan",
        views: "250K",
        timeStamp: "6 Years ago",
    }, {
        id: 5,
        title: "Breaking Bad: I am the danger",
        image: "/photo5.jpg",
        thumbnail: "/thumbnail.jpeg",
        author: "Vince Gillian",
        views: "200M",
        timeStamp: "11 Years ago",
    }, {
        id: 6,
        title: "Peaky Blinders: By order of the peaky blinders",
        image: "/photo6.jpg",
        thumbnail: "/thumbnail.jpeg",
        author: "Steven Knight",
        views: "45K",
        timeStamp: "2 Years ago",
    }, {
        id: 7,
        title: "Steve Harrington: King Steve",
        image: "/photo7.jpg",
        thumbnail: "/thumbnail.jpeg",
        author: "Duffer Brothers",
        views: "50M",
        timeStamp: "1 Months ago",
    }, {
        id: 8,
        title: "Iron Man: I am Ironman",
        image: "/photo8.jpeg",
        thumbnail: "/thumbnail.jpeg",
        author: "Russo Brothers",
        views: "500K",
        timeStamp: "5 Years ago",
    }, {
        id: 9,
        title: "Captain America: Can do it all day..",
        image: "/photo9.jpeg",
        thumbnail: "/thumbnail.jpeg",
        author: "Russo Brothers",
        views: "700K",
        timeStamp: "5 Years ago",
    },
    {
        id: 10,
        title: "Virat Kohli: The King",
        image: "/photo10.jpeg",
        thumbnail: "/thumbnail.jpeg",
        author: "Virat Kohli",
        views: "250M",
        timeStamp: "6 Months ago",
    }, {
        id: 11,
        title: "Cristiano Ronaldo: Suiii",
        image: "/photo11.jpeg",
        thumbnail: "/thumbnail.jpeg",
        author: "CR7",
        views: "300M",
        timeStamp: "Yesterday",
    },
    {
        id: 12,
        title: "Lionel Messi: The Goat",
        image: "/photo12.jpg",
        thumbnail: "/thumbnail.jpeg",
        author: "Lionel Messi",
        views: "300M",
        timeStamp: "1 Year ago",
    },
    // Add other video objects here
];

export const Listbar = () => {
    const router = useRouter();

    const handleVideoClick = (vidoeId: number) => {
        router.push(`/videos/${vidoeId}`);
    }
    return <div className="flex flex-col space-y-4">
        {VIDEOS.map((video) => (
            <div
                key={video.id}
                onClick={() => handleVideoClick(video.id)}  // Use the video ID
                className="cursor-pointer"
            >
                <VideoCard
                    image={video.image}
                    thumbnail={video.thumbnail}
                    title={video.title}
                    author={video.author}
                    views={video.views}
                    timeStamp={video.timeStamp}
                />
            </div>
        ))}
    </div>
}
