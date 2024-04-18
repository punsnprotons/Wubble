"use client"
import {useRouter} from "next/navigation"
import useDebouce from "@/hooks/useDebounce"
import { useEffect, useState } from "react"
import Input from "./Input"

import qs from "query-string"


const SearchInput = () =>{

    const router = useRouter()
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebouce<string>(value,500)

    useEffect(()=>{
        const query = {
            title:debouncedValue,
        }

        const url = qs.stringifyUrl({
            url:'/search',
            query:query
        })

        router.push(url)

    },[debouncedValue, router])



    return(
       <Input placeholder="Search for the music you are looking for" value={value} onChange={(e) => setValue(e.target.value)} />
    )
}

export default SearchInput;