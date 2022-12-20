import Login from "./pages/Login/Login"
import Habitos from "./pages/Habitos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Login/Cadastro";
import Hoje from './pages/Hoje'
import AuthProvider from "./contexts/AuthContext";
import GlobalStyle from './style/GlobalStyle'

export default function App() {

  return(
    <AuthProvider>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/habitos" element={<Habitos/>}/>
            <Route path="/hoje" element={<Hoje/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
