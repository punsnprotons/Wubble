import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import CreateContent from "./components/CreateContent";

interface CreateProps{
}

export const revalidate = 0;


const Create = async() =>{
   

    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <CreateContent/>
        </div>
    )
}

export default Create 