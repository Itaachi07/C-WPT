
function app(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/getalluser" element={<Home/>}/>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    );
}
export default App;