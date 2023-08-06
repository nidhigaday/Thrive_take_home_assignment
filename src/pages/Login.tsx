export const Login = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="fullWidth fullHeight flex flex-column justifyLeft alignCenter">
      <div style={{ marginBottom: "30px" }}>Welcome to my app!</div>
      <button className="button" onClick={onClick}>
        Login
      </button>
    </div>
  );
};
