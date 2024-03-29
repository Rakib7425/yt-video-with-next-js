

const ytdl = require('ytdl-core');

export default async function POST(req, res) {
    const url = req.body.videoUrl;
    //    const url = req.query.url;
    console.log(url);

    try {
        // if (typeof videoUrl !== "string") {
        //     return res.status(400).json({ Message: "Invalid video url" })
        // }

        // Retrieve information about the video from the provided URL
        const videoInfo = await ytdl.getInfo(url);

        if (videoInfo) {
            return res.status(200).json(videoInfo);
        } else {
            return res.json({ Message: "Invalid video url" })
        }

    } catch (error) {
        // Check if the error message indicates that the video is unavailable
        if (error.message.includes("Video unavailable")) {
            return res.status(404).json({ message: "Video unavailable or restricted" });
        } else {
            // Handle other errors
            console.error('Error Searching video:', error);
            return res.status(500).json({ message: 'Error Searching video', error });
        }
    }
} 