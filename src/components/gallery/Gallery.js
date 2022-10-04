import { useContext } from "react"
import { VideoContext } from "../../App"
import { galleryMapper, removeExtension } from "../utils"
import  "./Gallery.css"
import { nameArray, yearArray } from "./testObject"

export const Gallery = (props) => {
    const {setVideo} = useContext(VideoContext)

    let mapped= galleryMapper(nameArray) // use nameArray/prop.videos to test

    const changeVideo = (id) => setVideo(id)

    const titleCase = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase()

    return (
        <div className="gridContainer">
        {/* {props.videos.map((item) => <p onClick={() => changeVideo(item)}>{removeExtension(item)}</p>)} */}
        {/* {JSON.stringify(mapped)} */}
        {Object.keys(mapped).map((item) => {
            return (
                <>
                <p><strong>{item}</strong></p>
                {mapped[item].map((x) => {
                    return (
                        <p className="truncate link" onClick={() => changeVideo(titleCase(x))}>{x}</p>
                        
                        )
                })}
                </>
            )
        })}

        </div>
    )
}

