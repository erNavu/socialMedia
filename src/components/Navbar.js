import { EmailTwoTone, NotificationsNoneTwoTone, Pets } from "@mui/icons-material"
import { styled } from '@mui/material/styles'
import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar, MenuItem, Menu } from "@mui/material"
import { useState } from "react"

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    width: "40%",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.baseColor.main,
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.baseColor.dark,
    }),
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "16px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    },
}))


const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    },
}))

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <AppBar sx={{ position: "sticky" }}>
            <StyleToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    JAP DEV
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search sx={{ color: "primary.main" }}>
                    <InputBase
                        // inputProps={{ style: { bgcolor: "background.default", color: "text.primary" } }}
                        placeholder="search..." />
                </Search>
                <Icons>
                    <Badge badgeContent={4} sx={{ mt: "2px" }} color="error">
                        <EmailTwoTone sx={{ mt: "2px", mr: "2px" }} />
                    </Badge>
                    <Badge badgeContent={10} sx={{ mt: "2px" }} color="error">
                        <NotificationsNoneTwoTone sx={{ mt: '2px', mr: "2px" }} />
                    </Badge>
                    <Avatar onClick={handleMenu} sx={{ bgcolor: "error.main", width: 32, height: 32 }}>J</Avatar>
                </Icons>
                <UserBox >
                    <Avatar
                        onClick={handleMenu}
                        sx={{ bgcolor: "error.main", width: 32, height: 32, cursor: "pointer" }}
                    >
                        J
                    </Avatar>
                    <Typography
                        variant="h6"
                    >
                        JAP
                    </Typography>
                </UserBox>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={isOpen}
                    onClose={handleMenu}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleMenu}>Profile</MenuItem>
                    <MenuItem onClick={handleMenu}>My account</MenuItem>
                    <MenuItem onClick={handleMenu}>Logout</MenuItem>
                </Menu>

            </StyleToolbar>
        </AppBar>
    )
}

export default Navbar