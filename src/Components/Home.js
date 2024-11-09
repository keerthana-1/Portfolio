import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Tiles from "./Tiles";
import Other from "./Other";
import { Divider, Segment } from 'semantic-ui-react'


function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F1F8E9]">
      
      <Header />

      <main className="flex-grow flex justify-center pl-4 pr-4">
        <div>
        <Segment basic >
            <About />
            <Divider horizontal className="black pt-10">✐✐✐</Divider>
            <Tiles />
            <Other/>
          </Segment>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Home;
