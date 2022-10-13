import "./Login.css";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("currentUser", JSON.stringify(data));
    setCurrentUser(data);
    //navigate("/");
  };

  return (
    <div className="container-login">
      <span>Bienvenido</span>
      <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            className="input-form form-control"
            id="floatingInput"
            type="text"
            placeholder="Nombre de usuario"
            {...register("username", {
              required: "Debe ingresar su nombre de usuario",
            })}
          />
          <label for="floatingInput">Usuario</label>
          <p>{errors.username?.message}</p>
        </div>
        <div class="form-floating">
          <input
            className="input-form form-control"
            id="floatingPassword"
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "Debe ingresar su contraseña",
            })}
          />
          <label for="floatingPassword">Password</label>
          <p>{errors.password?.message}</p>
        </div>
        <button className="btn-form" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
