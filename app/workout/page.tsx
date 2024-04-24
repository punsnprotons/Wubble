import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import PromptDiv from "@/components/PromptDiv";
import GenerationDiv from "@/components/GenerationDiv";
import SongDiv from "@/components/SongDiv";

interface WorkoutProps{
   
}



const Workout = async() =>{
   
    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">Create a soundtrack for your workout</h1>
                   
                </div>
            </Header>
            <div className="flex p-8 justify-between" style={{ gap: '1rem' }}> {/* Adjusted line */}
                <PromptDiv 
                    inputOneTitle="Workout Description" 
                    inputOneSubtitle="Enter a breif description of your workout session here"
                    inputTwoTitle= "Workout media"    
                    inputTwoSubtitle="Enter any media describing your workout here"
                />
                <GenerationDiv/>
                <SongDiv/>
            </div>
           
        </div>
    )
}

export default Workout 