export const ErrorComponent = ({ message }) => {
  if (!message) {
    return (
      <div>
        <h1>Error</h1>
        <p>page not found error 404</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Error</h1>
        <p>{message}</p>
      </div>
    );
  }
};
