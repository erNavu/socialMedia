
import { Box, ListItem, ListItemButton, List, ListItemIcon, ListItemText, Switch } from "@mui/material"
import { SIDE_BAR_MENU } from "../data/index"

const SideBar = ({ mode, setMode }) => {
    return (
        <Box
            flex={1}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box sx={{ position: "fixed" }}>
                <List>
                    {SIDE_BAR_MENU.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                {item.text === "mode" ? <Switch
                                    onChange={e => {
                                        setMode(mode === "light" ? "dark" : "light")
                                    }} /> : <ListItemText primary={item.text} />}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}
export default SideBar


