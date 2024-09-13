import { Appbar } from "@/components/Appbar";
import { Comments } from "@/components/Comments";
import { ListBar } from "@/components/ListBar";
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
        views: "100K",
        timeStamp: "2 Months ago",
    },
    {
        id: 2,
        title: "Learn Web Development",
        videoSrc: "/video2.mp4",
        videoThumbnail: "/photo2.jpg",
        author: "John Doe",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    },{
        id: 3,
        title: "Learn Web Development",
        videoSrc: "/video4.mp4",
        videoThumbnail: "/photo3.jpg",
        author: "John Doe",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    },{
        id: 4,
        title: "Learn Web Development",
        videoSrc: "/video4.mp4",
        videoThumbnail: "/photo4.jpg",
        author: "John Doe",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    },{
        id: 5,
        title: "Learn Web Development",
        videoSrc: "/video5.mp4",
        videoThumbnail: "/photo5.jpg",
        author: "Breaking Bad",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    },{
        id: 6,
        title: "Learn Web Development",
        videoSrc: "/video6.mp4",
        videoThumbnail: "/photo6.jpg",
        author: "Peaky Blinders",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    },
    {
        id: 7,
        title: "Learn Web Development",
        videoSrc: "/video7.mp4",
        videoThumbnail: "/photo7.jpg",
        author: "Steve Harrington",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    },{
        id: 8,
        title: "Learn Web Development",
        videoSrc: "/video8.mp4",
        videoThumbnail: "/photo8.jpeg",
        author: "Iron Man",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    },
    {
        id: 9,
        title: "Learn Web Development",
        videoSrc: "/video9.mp4",
        videoThumbnail: "/photo9.jpeg",
        author: "Captain America",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    },
    {
        id: 10,
        title: "Learn Web Development",
        videoSrc: "/video10.mp4",
        videoThumbnail: "/photo10.jpeg",
        author: "Virat Kohli",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    },
    {
        id: 11,
        title: "Learn Web Development",
        videoSrc: "/video11.mp4",
        videoThumbnail: "/photo11.jpeg",
        author: "Cristiano Ronaldo",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    },
    {
        id: 12,
        title: "Learn Web Development",
        videoSrc: "/video12.mp4",
        videoThumbnail: "/photo12.jpg",
        author: "Lionel Messi",
        authorThumbnail: "/thumbnail2.jpeg",
        views: "200K",
        timeStamp: "3 Months ago",
    }
    // Add other video objects here
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
                    <Comments />
                </div>
                <div className="col-span-2">
                    <ListBar />
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
