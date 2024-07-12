import { useEffect, useState } from "react"
import { CTContext } from "./createContext"

const CtContextProvider = (props) => {
    const [dropdowns, setDropdowns] = useState("")
    const [activeItem, setActiveItem] = useState("");
    const [subcategory, setSubCategory] = useState("");
    const [subpage, setSubpage] = useState("");
    const [TOCvisible,setTOCVisible] = useState(null)
    return (
        <CTContext.Provider value={{ dropdowns, setDropdowns, activeItem, setActiveItem, subcategory, setSubCategory, subpage, setSubpage,TOCvisible,setTOCVisible }}>
            {props.children}
        </CTContext.Provider>
    )
}
export default CtContextProvider