"use client"
import {Song} from "@/types"
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";
import Header from "@/components/Header";
import CreateInput from "@/components/CreateInput";
import Create from './Create'
import {usePathname} from "next/navigation";
import {useMemo} from "react";

interface CreateContentProps{
   
}

const CreateContent:React.FC<CreateContentProps> = () =>{

    const pathname = usePathname();
  
    const routes  = useMemo(()=>[
        {   
            
            label:'Branding', 
            active: pathname === '/branding' ,
            href:'/branding',
            text:'tailored music for your branding videos',
            image:'../images/branding .jpeg'
        },
        {   
            
            label:'Instagram',
            active: pathname === '/instagram',
            href:'/instagram',
            text:' music for your instagram posts',
            image:'../images/branding .jpeg'
        },
        {
            label: 'Workout',
            active: pathname === '/workout',
            href: '/workout',
            text:'soundtrack for your workouts',
            image:'../images/branding .jpeg'
        },
        {
            label: 'Meditation',
            active: pathname === '/meditation',
            href: '/meditation',
            text:'soundtrack for your workouts',
            image:'../images/branding .jpeg'
        },
        {
            label: 'Store',
            active: pathname === '/store',
            href: '/store',
            text:'engaging music to play in your store',
            image:'../images/branding .jpeg'
        },
        {
            label: 'Script',
            active: pathname === '/script',
            href: '/script',
            text:'a soundtrack for your film script',
            image:'../images/branding .jpeg'
        },
        {
            label: 'Vlog',
            active: pathname === '/vlog',
            href: '/vlog',
            text:'background music for your vlog',
            image:'../images/branding .jpeg'
        },
        {
            label: 'Game',
            active: pathname === '/game',
            href: '/game',
            text:'soundtrack for your gameplay',
            image:'../images/branding .jpeg'
        }, 
        {
            label: 'Podcast',
            active: pathname === '/podcast',
            href: '/podcast',
            text:'background music for your podcasts',
            image:'../images/branding .jpeg'
        }
    ],[pathname])
       return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">Create a track about anything</h1>
                    <CreateInput/>
                    <div className="flex items-center justify-center mt-2">
                        <div className="w-1/6 border-t border-gray-300"></div>
                        <p className="text-gray-300 mx-2">or</p>
                        <div className="w-1/6 border-t border-gray-300"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                    {routes.map((item)=>(
                        <Create imageUrl={item.image} text={item.text} key={item.label} label={item.label} href={item.href}/>
                    ))}
                        

                    </div>
                </div>
            </Header>

        </div>
    )
}

export default CreateContent