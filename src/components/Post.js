import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"

const Post = ({ data }) => {

    const { userName, userDetails, date, image, imageDesc, } = data
    return (
        <Card sx={{ margin: { xs: "12px 0", sm: 5 } }} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "#ff2e00bd" }} aria-label="recipe">
                        {userName}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={userDetails}
                subheader={date}
            />
            <CardMedia
                component="img"
                height="20%"
                image={image}
                loading="lazy"
            // alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {imageDesc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "#ff2e00bd" }} />} />
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Post

