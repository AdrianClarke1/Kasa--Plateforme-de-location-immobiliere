import { Link } from "react-router-dom";
import "./error.css"


export default function ErrorPage() {


  return (
    <main className="errorPage">
      <h1 className="error">404</h1>
      <p className="errorMsg">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="errorLink">Retourner sur la page d’accueil</Link>
    </main>
  );
}