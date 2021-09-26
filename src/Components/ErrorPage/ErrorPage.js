import './ErrorPage.css';

const ErrorPage = ({ message }) => {

  return (
    <div className="error-display">
      <h4>{message}</h4>
    </div>
  )
}

export default ErrorPage;