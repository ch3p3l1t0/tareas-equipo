import { useState } from 'react'; // No es necesario importar React con React 17+ y Vite
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      if (response.data && response.data.token) {
        // Guarda el token en el almacenamiento local
        localStorage.setItem('token', response.data.token);
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir a la página de tareas o realizar cualquier acción
      } else {
        throw new Error('Token no recibido del servidor');
      }
    } catch (err) {
      console.error(err.message);
      setError('Credenciales inválidas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
