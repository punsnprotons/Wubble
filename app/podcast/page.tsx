import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";

interface PodcastProps{
   
}



const Podcast = async() =>{
   
    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">Create background music for your podcast</h1>
                   
                </div>
            </Header>
           
        </div>
    )
}

export default Podcast 