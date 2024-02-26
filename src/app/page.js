import "../index.css"
import "../global.css"

import YtDownloader from "@/components/YtDownloader";
import StoreProvider from "./StoreProvider";
import ToggleDarkMode from "@/components/ToggleDarkMode";

export default function Home() {
  return (
    <div className='dark:bg-indigo-950 min-h-screen duration-700 '>
      <section className='max-w-[1280px] mx-auto h-full pb-4 '>
        <h1 className='text-2xl font-bold py-8 md:text-yellow-500 mx-auto text-center'>
          YouTube video Downloader
        </h1>

        <StoreProvider>
          <div className="mx-auto text-center">
            <ToggleDarkMode />
            <YtDownloader />
          </div>
        </StoreProvider>

      </section>
    </div>
  );
}
