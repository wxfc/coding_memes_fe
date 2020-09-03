import React, {useState, useEffect} from 'react'
import { Meme } from './Meme'

const objectToQueryParam = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
  };
  
  function Memer() {
    const [templates, setTemplates] = useState([]);
    const [template, setTemplate] = useState(null);
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [meme, setMeme] = useState(null);
  
    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes").then(x =>
        x.json().then(response => setTemplates(response.data.memes))
      );
    }, []);
  
    if (meme) {
      return (
        <div style={{ textAlign: "center" }} className="wrapper">       
          <img style={{ width: 200 }} style={{maxHeight: 400}} src={meme} alt="custom meme" />
        </div>
      );
    }
  
    return (
      <div 
        className="wrapper" 
        style={{ textAlign: "center" }}>
        {template && (
          <form
            onSubmit={async e => {
              e.preventDefault();
              const params = {
                template_id: template.id,
                text0: topText,
                text1: bottomText,
                username: "wxfc",
                password: "pudding"
              };
              const response = await fetch(
                `https://api.imgflip.com/caption_image${objectToQueryParam(
                  params
                )}`
              );
              const json = await response.json();
              setMeme(json.data.url);
            }}
          >
            <Meme template={template} />
            <div className="create-meme">
            <input
              placeholder="top text"
              value={topText}
              onChange={e => setTopText(e.target.value)}
              style={{display: 'block'}}
            />
            <input
              placeholder="bottom text"
              value={bottomText}
              onChange={e => setBottomText(e.target.value)}
              style={{display: 'block'}}
            />
            <button type="submit" style={{display: 'block'}}>Create Meme</button>
            </div>
          </form>
        )}
        {!template && (
          <>
            <h2>Pick a template</h2>
            {templates.map(template => {
              return (
                <Meme
                  template={template}
                  onClick={() => {
                    setTemplate(template);
                  }}

                />
              );
            })}
          </>
        )}
      </div>
    );
  }
  
  export default Memer;

// const objectToQueryParam = obj => {
//     const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
//     return "?" + params.join("&")
// }

// export default function Memer() {
//     const [templates, setTemplates] = useState([])
//     const [template, setTemplate] = useState(null)
//     const [topText, setTopText] = useState('')
//     const [bottomText, setBottomText] = useState('')

//     useEffect(() => {
//         fetch('https://api.imgflip.com/get_memes')
//             .then(x => x.json()
//             .then(response => setTemplates(response.data.memes))
//             )
//     }, [])

//     return (
//         <div className="wrapper">
//             {template && (
//                 <form 
//                     onSubmit={async e => {
//                         e.preventDefault()
//                         const params = {
//                             template_id: template.id,
//                             text0: topText,
//                             text1: bottomText,
//                             username: 'wxfc',
//                             password: 'pudding'
//                         }
//                     const response = await fetch(
//                         `https://api.imgflip.com/caption_image?${objectToQueryParam(
//                             params
//                         )}`, 
//                     )
//                     const data = await response.json()
//                     console.log(data) 
//                 }}
//                 >
//                     <Meme template={template} />
//                     <input 
//                         placeholder="top text" 
//                         value={topText} 
//                         onChange={e => setTopText(e.target.value)} />
//                     <input 
//                         placeholder="bottom text"
//                         value={bottomText} 
//                         onChange={e => setBottomText(e.target.value)} />
//                     <button type="submit">Create Meme</button>
//                 </form>
//             )}
//             {!template && 
//             (
//                 <>
//                 <h1>Pick a Template</h1>
//                 {templates.map(template => {
//                     return (
//                         <Meme 
//                             template={template}
//                             onClick={() => {
//                                 setTemplate(template)
//                             }}
//                         />
//                     )
//             })}</>)}
//         </div>
//     )
// }