import { Avatar, Divider, Drawer, useTheme } from "@mui/material";
import { Box } from "@mui/system";

export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();
  return (
    <div>
      <>
        <Drawer variant="permanent">
          <Box
            width={theme.spacing(28)}
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Box
              width="100%"
              height={theme.spacing(20)}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                alt="Remy Sharp"
                src=""
                sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              />
            </Box>
            <Divider />
            <Box flex={1}></Box>
          </Box>
        </Drawer>
        <Box height="100vw" marginLeft={theme.spacing(28)}>
          {children}
        </Box>
      </>
    </div>
  );
};
//variant serve pra decidirmos se queremos permanente
//sempre React.fc<{children: React.ReactNode}>
//alinhando avatar com box
