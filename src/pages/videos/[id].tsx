import { Appbar } from "@/components/Appbar";
import { VideoCard } from "@/components/CardComponent";
import { ListBar } from "@/components/ListBar";
import { VideoGrid } from "@/components/VideoGrid";
import { useRouter } from "next/router";

export const VideoCardUpdated = (props: any) => {
    return (
        <div className="p-3 cursor-pointer">
            <video
                src={props.videoSrc}  // Use a video source instead of an image
                className="rounded-xl w-full"
                controls // This will add play, pause, fullscreen, and timestamp functionality
                poster={props.thumbnail} // Shows the thumbnail until the video plays
            ></video>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className={"rounded-full w-12 h-10"} src={props.thumbnail} />
                </div>
                <div className="col-span-11 pl-2">
                    <div>{props.title}</div>
                    <div className="col-span-11 text-gray-400 text-base">{props.author}</div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.views} {props.timeStamp}
                    </div>
                </div>
            </div>
        </div>
    );
};

const VideoDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Appbar />
            <div className="flex grid grid-cols-10">
                <div className="col-span-8 font-extrabold">
                    <VideoCardUpdated
                        title={"Space Video 4K, Interstellar 2014, Christopher Nolan"}
                        videoSrc={"/video1.mp4"}  // Add the video file path here
                        thumbnail={"/thumbnail.jpeg"}
                        author={"Yogesh Khutwad"}
                    />
                </div>
                <div className="col-span-2">
                    <ListBar />
                </div>
            </div>
        </div>
    );
};
export default VideoDetail;

