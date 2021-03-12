import React from 'react';
import './App.css';
import Button from './Button';
import Product from "./Product";
import Tile from "./Tile";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button description="to the collection" disabled={false}/>
                <Button description="shop all bags" disabled={false}/>
                <Button description="pre-order" disabled={true}/>
            </nav>
            <main>
                <Product label="Best seller"
                         image={bag1}
                         name="The handy bag"
                         price="400"
                />
                <Product label="Best seller"
                         image={bag2}
                         name="The stylish bag"
                         price="250"
                />
                <Product label="New collection"
                         image={bag3}
                         name="The simple bag"
                         price="300"
                />
                <Product label="New collection"
                         image={bag4}
                         name="The trendy bag"
                         price="150"
                />
            </main>
            <footer>
                <Tile title="The brand">
                    <p>Lorem ipsum dolor sit achmed, consectetur adipisicing elit. Atque cumque deletus delenqiti
                        dolorutte ex ministro presidentra markoitia !mellon quis repellendus! Accusantium, aperiam atque
                        cumque deserunt dolor dolorem eveniet fuga nisi nobis nostrum poedrio bianco hugo quide jongus quod repellendus
                        secundarus chambrio ut.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur corporis dolore ea
                        earum fugiat ipsum modi quibusdam quod quos?</p></Tile>
                <Tile img={brand}
                      title={brand}/>
                <Tile img={our_story}
                      title={our_story}/>
                <Tile title="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto at aut consectetur
                        consequuntur dolore dolorem doloremque facere iure, maiores molestiae molestias ratione sed
                        similique sit unde ut veritatis vitae voluptate voluptates. Asperiores culpa eaque expedita
                        illum molestias reprehenderit ullam vel voluptas! Cupiditate earum inventore repellendus? Aut
                        commodi dolore soluta.</p></Tile>
            </footer>
        </>
    );
}
export default App;