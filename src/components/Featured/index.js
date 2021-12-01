import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Featured() {

    const [featured, setFeatured] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3004/featured").then(res => setFeatured(res.data))
    }, [])
    
    return (
        <div id="featured">
      <div className="container">
        <div className="row">
          <div className="3u">
            <section className="first">
              <h2>Blandit Veroeros Consequat</h2>
              <p>Morbi id urna ut massa vestibulum tempor. faucibus eget nibh. Pellentesque ultricies felis quis est auctor ut dictum sapien adipiscing. Quisque eget tempus nunc. Curabitur venenaSed et gravida diam. Proin adipiscing nisi ac libero fringilla tincidunt consequat sed amet lorem ipsum dolor.</p>
              <p><a href="#" className="button">Amet Consequat</a></p>
            </section>
          </div>

          {
        featured.map(item => {
            return (
                <div className="3u">
            <section>
              <h2>{item.title}</h2>
              <p>{item.subTitle}</p>
              <p><a href="#" className="image full"><img src={`images/${item.icon}.jpg`} alt /></a></p>
            </section>
          </div>
            )
        })
    }

          
          
        </div>
      </div>
    </div>
    )
}
