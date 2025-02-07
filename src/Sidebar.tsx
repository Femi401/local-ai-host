import { useRef } from "react";
import {
  Box,
  Badge,
  ListItemText,
  MenuList,
  IconButton,
  Stack,
  MenuItem,
  ListItemIcon,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
export const drawerWidth = 240;

interface Props {
  openCopilotWindow(): void;
  openAboutWindow(): void;
  setOpenSettingWindow(name: "ai" | "display" | null): void;
}

export default function Sidebar(props: Props) {
  const sessionListRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const handleCreateNewSession = () => {
    if (sessionListRef.current) {
      sessionListRef.current.scrollTo(0, 0);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 h-full z-50"
      style={{
        boxSizing: "border-box",
        width: drawerWidth,
        borderRightWidth: "1px",
        borderRightStyle: "solid",
        borderRightColor: theme.palette.divider,
      }}
    >
      <div className="ToolBar h-full">
        <Stack
          className="pt-3 pl-2 pr-1"
          sx={{
            height: "100%",
          }}
        >
          <Box className="flex justify-between items-center px-2">
            <Box>
              <a
                href="https://github.com/Bin-Huang/chatbox"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center no-underline"
              >
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-medium">Chatbox</span>
                  <span className="text-[10px] opacity-50">
                    Community Edition
                  </span>
                </div>
              </a>
            </Box>
          </Box>

          <Divider variant="fullWidth" />

          <MenuList sx={{ marginBottom: "20px" }}>
            <MenuItem
              onClick={handleCreateNewSession}
              sx={{ padding: "0.2rem 0.1rem", margin: "0.1rem" }}
            >
              <ListItemIcon>
                <IconButton>
                  <AddIcon fontSize="small" />
                </IconButton>
              </ListItemIcon>
              <ListItemText>{"new chat"}</ListItemText>
            </MenuItem>

            <MenuItem
              onClick={props.openCopilotWindow}
              sx={{ padding: "0.2rem 0.1rem", margin: "0.1rem" }}
            >
              <ListItemIcon>
                <IconButton>
                  <SmartToyIcon fontSize="small" />
                </IconButton>
              </ListItemIcon>
              <ListItemText>
                <Typography>{"My Copilots"}</Typography>
              </ListItemText>
            </MenuItem>

            <MenuItem
              onClick={() => {
                props.setOpenSettingWindow("ai");
              }}
              sx={{ padding: "0.2rem 0.1rem", margin: "0.1rem" }}
            >
              <ListItemIcon>
                <IconButton>
                  <SettingsIcon fontSize="small" />
                </IconButton>
              </ListItemIcon>
              <ListItemText>{"settings"}</ListItemText>
            </MenuItem>

            <MenuItem
              onClick={props.openAboutWindow}
              sx={{ padding: "0.2rem 0.1rem", margin: "0.1rem" }}
            >
              <ListItemIcon>
                <IconButton>
                  <InfoOutlinedIcon fontSize="small" />
                </IconButton>
              </ListItemIcon>
              <ListItemText>
                <Badge
                  color="primary"
                  variant="dot"
                  invisible={false}
                  sx={{ paddingRight: "8px" }}
                >
                  <Typography sx={{ opacity: 0.5 }}>{"About"}</Typography>
                </Badge>
              </ListItemText>
            </MenuItem>
          </MenuList>
        </Stack>
      </div>
    </div>
  );
}
