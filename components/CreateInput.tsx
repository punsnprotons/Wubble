"use client"
import {useRouter} from "next/navigation"
import useDebouce from "@/hooks/useDebounce"
import { useEffect, useState } from "react"
import Input from "./Input"

import qs from "query-string"


const CreateInput = () =>{

    const router = useRouter()
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebouce<string>(value,500)

    useEffect(()=>{
        const query = {
            title:debouncedValue,
        }

        const url = qs.stringifyUrl({
            url:'/create',
            query:query
        })

        router.push(url)

    },[debouncedValue, router])



    return(
        <div className="flex items-center relative">
            <Input placeholder="A synth track for a travel instagram post" value={value} onChange={(e) => setValue(e.target.value)} className="pr-20" />
            <button className="absolute right-0 bg-blue-500 text-white px-4 py-1 rounded mr-2 mt-2 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 30 30" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l2 2m-2-2v6m4-6l2 2m0 0l2-2m-2 2v6m4-6l2 2m0 0l2-2m-2 2v6" />
                </svg>
                Create
            </button>
        </div>
    )
}

export default CreateInput;