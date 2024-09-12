import { useRouter } from "next/router";
import { VideoCard } from "./CardComponent";
import { Home } from "./Home";
import { Shorts } from "./Shorts";
import { Subscriptions } from "./Subscriptions";
import { You } from "./You";

const VIDEOS = [
    {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    },
    {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }, {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }, {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }, {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }, {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }, {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }, {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }, {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }, {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }, {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }, {
        title: "Get rich in 1 Year",
        image: "photo2.jpg",
        thumbnail: "thumbnail.jpeg",
        author: "Yogesh Khutwad",
        views: "100K",
        timeStamp: "2 Months ago",
    }
    // Add other video objects here
];
export const VideoGrid = () => {
    const router = useRouter();

    const handleVideoClick = (videoId : number) => {
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
                {VIDEOS.map((video, index) => (
                    <div
                        key={index}
                        onClick={() => handleVideoClick(index)} // Pass video ID or index
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


