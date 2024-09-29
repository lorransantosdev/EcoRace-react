import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField'; // Importando o novo componente

export default function Logar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setMessage('Preencha todos os campos.');
      return;
    }

    const historicoUsuarios = localStorage.getItem(email);

    if (!historicoUsuarios) {
      setMessage('Usuário não encontrado.');
      return;
    }

    const { senha: historicoUsuariosSenha } = JSON.parse(historicoUsuarios);

    if (historicoUsuariosSenha === senha) {
      setMessage('Login realizado com sucesso!');
      localStorage.setItem('email', email);
      navigate('/login/id:');

    } else {
      setMessage('Senha incorreta.');
    }

    setSenha('');
    setEmail('');
  };

  return (
    <div className='flex items-center lg:justify-center justify-start flex-col w-full h-screen bg-custom-radial relative lg:px-20 lg:py-20 lg:gap-31 md:px-40 md:py-20 md:gap-2 px-10 py-20'>
      <h2 className='text-white font-russo text-4xl sm:text-5xl md:text-6xl'>Login</h2>
      <p className='text-primary-color mt-4'>{message}</p>
      
      <form onSubmit={handleLogin} className='flex flex-col gap-3 w-full max-w-xs md:max-w-lg lg:max-w-xl'>
        <InputField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          className='bg-transparent border-2 rounded-3xl border-white text-white px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6'
        />

        <InputField
          label="Senha"
          type="password"
          id="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          className='bg-transparent border-2 rounded-3xl border-white text-white px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6'
        />
        
        <button type="submit" className='bg-white text-primary-color font-bold rounded-3xl px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6'>
          Entrar
        </button>
      </form>

      <p className='text-white border-b-2 border-white mt-4'><Link to="/cadastro">Cadastre-se por aqui.</Link></p>
 
    </div>
  );
}