import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Login from "./routes/auth/Login";
import Registro from "./routes/auth/Registro";
import Senha from "./routes/auth/Senha";
import { ToastContainer } from "react-toastify";
import Default from "./routes/App/Default";
import Home from "./routes/App/Home";
import EsqueceuSenha from "./components/EsqueceuSenhaForm";
import Agendamento from "./routes/App/Agendamento";
import Chat from "./routes/App/Chat";
import Conta from "./routes/App/Conta";
import Dialogo from "./routes/App/Dialogo";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar" element={<EsqueceuSenha />} />
        <Route path="/registro">
          <Route index element={<Registro />} />
          <Route path="senha" element={<Senha />} />
          
        </Route>
        <Route path="/app" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="dialogos" element={<Dialogo />} />
        </Route>
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/conta" element={<Conta />} />
 
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </BrowserRouter >
  )
}

export default AppRoutes