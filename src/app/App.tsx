import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components";
import { AppThemeProvider as DrawerProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
  return (
    <DrawerProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </DrawerProvider>
  );
};
