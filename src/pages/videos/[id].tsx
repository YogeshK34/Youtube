import { Appbar } from "@/components/Appbar";
import { Comments } from "@/components/Comments";
import { IdVideos } from "@/components/IdVideos";
import { Listbar } from "@/components/ListBar";
// import { ListBar } from "@/components/ListBar";

import { VideoCardUpdated } from "@/components/VideoCardUpdated";
import { useRouter } from "next/router";

// Define your video data as a constant (for now) or fetch it from an API in a real scenario



const VideoDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the video data based on the id
    const video = IdVideos.find((video) => video.id === Number(id));

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
