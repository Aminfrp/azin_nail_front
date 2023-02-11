import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react"
import { ColorModeContext } from "./_app";

export default function Home() {
  // darkmode them function
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <>
      <Typography variant="h1" color="primary">Hello Amin</Typography>
      <Button onClick={toggleColorMode} color="primary">Hello</Button>
    </>
  )
}
