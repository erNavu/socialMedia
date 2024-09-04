import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { CONVERSATION_LIST, IMAGE_LIST_DATA } from "../data"

const RightBar = () => {
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box pr={3}>
                <Typography variant="h6" fontWeight={100} pb={1}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7} sx={{ justifyContent: "left" }}>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/6.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/7.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/8.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/9.jpg" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={1}>
                    Latest Photos
                </Typography>
                <ImageList cols={2} gap={4} sx={{ height: 360 }} rowHeight={152} >
                    {IMAGE_LIST_DATA.map((item) => (
                        <ImageListItem key={item.img} >
                            <img
                                srcSet={`${item.img}?w=164&h=164`}
                                src={`${item.img}?w=164&h=164`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={3}>
                    Latest Conversations
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {CONVERSATION_LIST.map((item) => (<div key={item.key}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={`https://material-ui.com/static/images/avatar/${item.key}.jpg`} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.text}
                                secondary={
                                    <>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary', display: 'inline' }}
                                        >
                                            {item.userName}
                                        </Typography>
                                        {item.conversation}
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>))}
                </List>
            </Box>
        </Box >
    )
}
export default RightBar


