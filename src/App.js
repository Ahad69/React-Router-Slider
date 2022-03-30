import { useEffect, useState } from "react";
import {  Route, Routes } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "./App.css";
import About from "./Components/About/About";
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import Friends from "./Components/Friends/Friends";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Post from "./Components/Post/Post";
import SinglePost from "./Components/Post/SinglePost";
import Slider from "./Components/Slider/Slider";
import Cards from "./Components/Slider/Sliders/Cards";
import CoverFlow from "./Components/Slider/Sliders/CoverFlow";
import Flip from "./Components/Slider/Sliders/Flip";
import Countries from "./Components/World/Countries";
import Country from "./Components/World/Country";


function App() {

  const [loading , setLoading] = useState(false)
      useEffect(()=>{
          setLoading(true)
          setTimeout(()=>{
              setLoading(false)
          },1000)
      },[])

  return (
    <div className="App">
      {
                loading ? 
                <ClipLoader
                className="m-5"
                size={60}
                color={"#123abc"}
                loading={loading}
                />
                : 
      <div>
        <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friend/:id" element={<FriendDetails></FriendDetails>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/posts" element={<Post></Post>}>
          <Route path=":postId" element={<SinglePost></SinglePost>}></Route>
        </Route>
        <Route path="/country" element={<Countries></Countries>}>
            <Route path=":countryName" element={<Country></Country>}></Route>
        </Route>
        <Route path="/sliders" element={<Slider></Slider>}>
          <Route path="cover" element={<CoverFlow></CoverFlow>}></Route>
          <Route path="cards" element={<Cards></Cards>}></Route>
          <Route path="flip" element={<Flip></Flip>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </div>
}
    </div>
  );
}

export default App;
