import { BrowserRouter, Routes, Route } from "react-router-dom";
//box is a simple div element 
import {Box} from '@mui/material'
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./components";
import {Feed} from "@mui/icons-material"


const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar /> 
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                {/*this means that if we go to /video */}
                <Route path="/video/:id"  element={<VideoDetail/>}/>
                <Route path="/channel/:id"  element={<ChannelDetail/>}/>
                <Route path="/search/:searchTerm"  element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App