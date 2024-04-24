import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import PromptDiv from "@/components/PromptDiv";
import GenerationDiv from "@/components/GenerationDiv";
import SongDiv from "@/components/SongDiv";

interface InstagramProps{
   
}



const InstagramProps = async() =>{
   
    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">Create a track for your instagram post</h1>
                   
                </div>
            </Header>
            <div className="flex p-8 justify-between" style={{ gap: '1rem' }}> {/* Adjusted line */}
                <PromptDiv 
                    inputOneTitle="Post caption" 
                    inputOneSubtitle="Enter the caption for your instagram post here"
                    inputTwoTitle= "Instagram post"    
                    inputTwoSubtitle="Upload your instagram post here"
                />
                <GenerationDiv/>
                <SongDiv/>
            </div>
           
        </div>
    )
}

export default InstagramProps 