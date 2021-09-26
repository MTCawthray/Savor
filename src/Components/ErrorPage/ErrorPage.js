import './ErrorPage.css';

const ErrorPage = ({ message, fetchError }) => {

  return (
    <div className="error-display">
      <h4>{message}</h4>
      <h4>{fetchError}</h4>
    </div>
  )
}

export default ErrorPage;