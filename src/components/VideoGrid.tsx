import { useRouter } from "next/router";
import { VideoCard } from "./CardComponent";
import { Home } from "./Home";
import { Shorts } from "./Shorts";
import { Subscriptions } from "./Subscriptions";
import { You } from "./You";

const VIDEOS = [
    {
        id: 1,
        title: "Interstellar",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },{
        id: 2,
        title: "Interstellar",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },{
        id: 3,
        title: "Virat Kohli",
        image: "photo3.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },{
        id: 4,
        title: "Game of Thrones",
        image: "photo4.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },{
        id: 5,
        title: "Breaking Bad",
        image: "photo5.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },{
        id: 6,
        title: "Peaky Blinders",
        image: "photo6.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },{
        id: 7,
        title: "Steve Harrington",
        image: "photo7.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },{
        id: 8,
        title: "Iron Man",
        image: "photo8.jpeg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },{
        id: 9,
        title: "Captain America",
        image: "photo9.jpeg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },
    {
        id: 10,
        title: "Virat Kohli",
        image: "photo10.jpeg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },{
        id: 11,
        title: "Cristiano Ronaldo",
        image: "photo11.jpeg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },
    {
        id: 12,
        title: "Lionel Messi",
        image: "photo12.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },
    // Add other video objects here
];
export const VideoGrid = () => {
    const router = useRouter();

    const handleVideoClick = (videoId: number) => {
        router.push(`/videos/${videoId}`);
    };

    return (
        <div className="flex">
            <div className="grid-cols-12 p-8">
                <div className="cursor-pointer">
                    <Home />
                    <Shorts />
                    <Subscriptions />
                    <You />
                </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
    );
};


