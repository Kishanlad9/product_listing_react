import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function TrackInvertedSlider() {
  return (
    <Box sx={{ padding: 1 }}>
      <Typography id="track-range-slider" gutterBottom>
        Inverted track range
      </Typography>
      <Slider aria-labelledby="track-range-slider" />
    </Box>
  );
}
