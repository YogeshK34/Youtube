import { Appbar } from "@/components/Appbar";
import { Comments } from "@/components/Comments";
import { Listbar } from "@/components/ListBar";
// import { ListBar } from "@/components/ListBar";

import { VideoCardUpdated } from "@/components/VideoCardUpdated";
import { useRouter } from "next/router";

// Define your video data as a constant (for now) or fetch it from an API in a real scenario
const VIDEOS = [
    {
        id: 1,
        title: "Get rich in 1 Year",
        videoSrc: "/video1.mp4",
        videoThumbnail: "/Photo.jpeg",
        author: "Yogesh Khutwad",
        authorThumbnail: "/thumbnail.jpeg",
        views: "1M",
        timeStamp: "1 Week ago",
    },
    {
        id: 2,
        title: "Master Web Development with John Doe",
        videoSrc: "/video2.mp4",
        videoThumbnail: "/photo2.jpg",
        author: "John Doe",
        authorThumbnail: "/thumbnail.jpeg",
        views: "500K",
        timeStamp: "2 Days ago",
    },
    {
        id: 3,
        title: "Cover Drive Techniques",
        videoSrc: "/video3.mp4",
        videoThumbnail: "/photo3.jpg",
        author: "Virat Kohli",
        authorThumbnail: "/thumbnail.jpeg",
        views: "1.5M",
        timeStamp: "5 Days ago",
    },
    {
        id: 4,
        title: "Guide of the Seven Kingdoms of Westeros",
        videoSrc: "/video4.mp4",
        videoThumbnail: "/photo4.jpg",
        author: "Game of Thrones",
        authorThumbnail: "/thumbnail.jpeg",
        views: "750K",
        timeStamp: "2 Weeks ago",
    },
    {
        id: 5,
        title: "Breaking Bad's Top Coding Secrets",
        videoSrc: "/video5.mp4",
        videoThumbnail: "/photo5.jpg",
        author: "Breaking Bad",
        authorThumbnail: "/thumbnail.jpeg",
        views: "900K",
        timeStamp: "1 Month ago",
    },
    {
        id: 6,
        title: "Peaky Blinders: Learn Code Like a Gangster",
        videoSrc: "/video6.mp4",
        videoThumbnail: "/photo6.jpg",
        author: "Peaky Blinders",
        authorThumbnail: "/thumbnail.jpeg",
        views: "650K",
        timeStamp: "3 Weeks ago",
    },
    {
        id: 7,
        title: "Steve Harrington's Frontend Journey",
        videoSrc: "/video7.mp4",
        videoThumbnail: "/photo7.jpg",
        author: "Steve Harrington",
        authorThumbnail: "/thumbnail.jpeg",
        views: "1.1M",
        timeStamp: "1 Week ago",
    },
    {
        id: 8,
        title: "Iron Man's Ultimate Programming Suit",
        videoSrc: "https://res.cloudinary.com/da6ne7pa0/video/upload/v1726340330/video8_iiyszf.mp4",
        videoThumbnail: "/photo8.jpeg",
        author: "Iron Man",
        authorThumbnail: "/thumbnail.jpeg",
        views: "2M",
        timeStamp: "4 Days ago",
    },
    {
        id: 9,
        title: "Captain America's Web Development Bootcamp",
        videoSrc: "/video9.mp4",
        videoThumbnail: "/photo9.jpeg",
        author: "Captain America",
        authorThumbnail: "/thumbnail.jpeg",
        views: "850K",
        timeStamp: "3 Days ago",
    },
    {
        id: 10,
        title: "Virat Kohli's Web Skills Challenge",
        videoSrc: "/video10.mp4",
        videoThumbnail: "/photo10.jpeg",
        author: "Virat Kohli",
        authorThumbnail: "/thumbnail.jpeg",
        views: "1.3M",
        timeStamp: "2 Days ago",
    },
    {
        id: 11,
        title: "Cristiano Ronaldo's Winning Code Strategies",
        videoSrc: "/video11.mp4",
        videoThumbnail: "/photo11.jpeg",
        author: "Cristiano Ronaldo",
        authorThumbnail: "/thumbnail.jpeg",
        views: "3M",
        timeStamp: "6 Days ago",
    },
    {
        id: 12,
        title: "Lionel Messi's Elegant Coding Style",
        videoSrc: "/video12.mp4",
        videoThumbnail: "/photo12.jpg",
        author: "Lionel Messi",
        authorThumbnail: "/thumbnail.jpeg",
        views: "2.2M",
        timeStamp: "1 Week ago",
    },
];


const VideoDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the video data based on the id
    const video = VIDEOS.find((video) => video.id === Number(id));

    if (!video) {
        return <div>Video not found</div>;
    }

    return (
        <div>
            <Appbar />
            <div className="flex grid grid-cols-10">
                <div className="col-span-8 font-extrabold">
                    <VideoCardUpdated
                        title={video.title}
                        videoSrc={video.videoSrc}
                        videoThumbnail={video.videoThumbnail}
                        author={video.author}
                        authorThumbnail={video.authorThumbnail}
                    />
                    <Comments/>
                    {/* <Comments/>
                    <Comments/> */}
                </div>
                <div className="col-span-2">
                    {/* <ListBar/> */}
                    <Listbar/>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
