import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";
import {PageNotFound} from "./pages/PageNotFound";
import {Category} from "./pages/Category";
import {Recipe} from "./pages/Recipe";
import {Container} from "@mui/material";



function App() {
    return (
        <>
            <BrowserRouter basename={'/'}>
                <Header/>
                <Container sx={{
                    backgroundColor: '#000000',
                    color: '#f1c32f',
                    my: '1rem',
                }}>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/category'>
                            <Route path=':name' element={<Category/>}/>
                            <Route path='' element={<Home/>}/>
                        </Route>
                        <Route path='/recipe'>
                            <Route path=':id' element={<Recipe/>}/>
                            <Route path='' element={<Home/>}/>
                        </Route>
                        <Route path='*' element={<PageNotFound/>}/>
                    </Routes>
                </Container>
                {/*<Footer/>*/}
            </BrowserRouter>
        </>
    );
}

export default App;
