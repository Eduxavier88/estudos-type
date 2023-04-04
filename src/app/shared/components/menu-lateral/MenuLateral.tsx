import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";

export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <>
        <Drawer open={true} variant={smDown ? "temporary" : "permanent"}>
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
            <Box flex={1}>
              <List component="nav">
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                    <ListItemText primary="Pagina inicial" />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Box>
          </Box>
        </Drawer>
        <Box height="100vw" marginLeft={smDown ? 0 : theme.spacing(28)}>
          {children}
        </Box>
      </>
    </div>
  );
};
//variant serve pra decidirmos se queremos permanente ou temporary.
//sempre React.fc<{children: React.ReactNode}>
//alinhando avatar com box
//estudar breakpoints
