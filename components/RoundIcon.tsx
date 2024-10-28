import { Box, Tooltip } from "@mui/material";

interface RoundIconProps {
  item: any;
}

export default function RoundIcon({ item }: RoundIconProps) {
  return (
    <>
      <Tooltip title={item.tooltip}>
        <Box className="icon-item" style={{ backgroundColor: item.color }}>
          {item.icon}
        </Box>
      </Tooltip>
    </>
  );
}
