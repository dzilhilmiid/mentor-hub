import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Mentor from "./pages/Mentor"
import Class from "./pages/Class"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Book from "./pages/Book"

function App() {
    return (
      <BrowserRouter basename="/mentor-hub">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/class" element={<Class />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      </BrowserRouter>
    )
}

export default App