import { Box } from "@mui/material";

export const Login = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box
      padding={20}
      className="fullWidth fullHeight flex flex-column justifyLeft alignCenter"
    >
      <Box sx={{ marginBottom: "30px" }}>Welcome to my app!</Box>
      <button className="button" onClick={onClick}>
        Login
      </button>
    </Box>
  );
};
