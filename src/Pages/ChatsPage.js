import axios from "axios"
import { useEffect } from "react"

const ChatsPage = () => {

    const fetchChats  = async () => {
        // const data = await axios.get()
    }

    useEffect(() => {
        fetchChats()
    },[])
    return (
        <h1>
            ChatsPage
        </h1>
    )
}

export default ChatsPage