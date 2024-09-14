import { useRouter } from "next/router";
import { VideoCard } from "./CardComponent";
import { Home } from "./Home";
import { Shorts } from "./Shorts";
import { Subscriptions } from "./Subscriptions";
import { You } from "./You";
import { DefaultVideos } from "./DefaultVideos";

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
                {DefaultVideos.map((video) => (
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


