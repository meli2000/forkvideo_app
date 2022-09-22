import { useState } from "react"
import { KrakenSVG } from "../kraken/KrakenSVG"
import "./Header.css"

export const Header = () => {

    const [magnet, setMagnet] = useState('');
    const handleChange = event => {
        setMagnet((event.target.value));
    };
    const download = (uri) => {
        fetch(`/download`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ magnet: uri })
        })
      }
    return (
        <div className="headerContainer">
            <KrakenSVG className="headerImg"/>
            {/* {magnet}
            <p>Enter magnet URI</p>
            <div className="row">
                <input type="text"  onChange={handleChange} />
                <button onClick={() => download(magnet)}>Download</button>
            </div> */}
            
        </div>
    )
}