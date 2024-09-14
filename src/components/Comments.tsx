import { SingleComment } from "./SingleComment";

export const Comments = () => {
    return (
        <div>
            <section className="bg-dark dark:bg-gray-900 py-8 lg:py-16 antialiased">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                            Discussion (20)
                        </h2>
                        <div className="h-px my-8 bg-white border-0 dark:bg-gray-700"></div>
                    </div>
                    <form className="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <textarea
                                id="comment"
                                rows={4}
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                        >
                            Post comment
                        </button>
                    </form>
                    {/* Example Comment */}
                    {/* Example Comment */}
                    <SingleComment
                        name="Alice Johnson"
                        time="Mar. 12, 2023"
                        text="Very informative video!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    /><br></br>
                    <SingleComment
                        name="Bob Smith"
                        time="Jul. 25, 2021"
                        text="Loved the content!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    /><br></br>
                    <SingleComment
                        name="Catherine Lee"
                        time="Dec. 1, 2020"
                        text="This was super helpful!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    /><br></br>
                    <SingleComment
                        name="David Brown"
                        time="Aug. 19, 2022"
                        text="Great explanation!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    /><br></br>
                    <SingleComment
                        name="Emily Davis"
                        time="Oct. 5, 2021"
                        text="Amazing video!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    /><br></br>
                    <SingleComment
                        name="Frank Wilson"
                        time="Apr. 23, 2020"
                        text="Thanks for sharing this!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    /><br></br>
                    <SingleComment
                        name="Grace Miller"
                        time="Sep. 15, 2019"
                        text="This really helped me."
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    /><br></br>
                    <SingleComment
                        name="Henry Clark"
                        time="Nov. 30, 2021"
                        text="Very clear explanation!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    /><br></br>
                    <SingleComment
                        name="Isla Moore"
                        time="Jan. 2, 2022"
                        text="I learned so much!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    /><br></br>
                    <SingleComment
                        name="Jack Taylor"
                        time="May. 20, 2023"
                        text="Well done, keep it up!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    /><br></br>
                    <SingleComment
                        name="Karen White"
                        time="Feb. 14, 2020"
                        text="Great work, thanks!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    /><br></br>
                    <SingleComment
                        name="Liam Harris"
                        time="Jun. 18, 2019"
                        text="This was awesome!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    /><br></br>
                    <SingleComment
                        name="Mia Martin"
                        time="Apr. 27, 2021"
                        text="I loved the visuals!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    /><br></br>
                    <SingleComment
                        name="Noah Thompson"
                        time="Oct. 11, 2020"
                        text="Best video I've watched!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    /><br></br>
                    <SingleComment
                        name="Olivia Scott"
                        time="Jul. 7, 2022"
                        text="Thanks for the great content!"
                        profileImage="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    /><br></br>
                </div>
            </section>
        </div>
    );
};
