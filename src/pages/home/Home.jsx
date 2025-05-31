import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <Button variant="contained" startIcon={<ArrowOutwardIcon />}>
        Send
      </Button>
      <Button> Click me</Button>
    </>
  );
}
