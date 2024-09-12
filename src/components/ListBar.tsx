import { VideoCard } from "./CardComponent"

const VIDEOS = [{
    title: "Get rich in 1 Year",
    image: "/photo2.jpg",
    thumbnail: "/thumbnail.jpeg",
    author: "Yogesh Khutwad",
    views: "100K",
    timeStamp: "2 Months ago",
}, {
    title: "Get rich in 1 Year",
    image: "/photo2.jpg",
    thumbnail: "/thumbnail.jpeg",
    author: "Yogesh Khutwad",
    views: "100K",
    timeStamp: "2 Months ago",
}, {
    title: "Get rich in 1 Year",
    image: "/photo2.jpg",
    thumbnail: "/thumbnail.jpeg",
    author: "Yogesh Khutwad",
    views: "100K",
    timeStamp: "2 Months ago",
},]

export const ListBar = () => {
    return (
        <div className="flex flex-col space-y-4"> {/* Flex layout with vertical stacking */}
            {VIDEOS.map((video, index) => (
                <div key={index} className=""> {/* Add key prop */}
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
    );
};
