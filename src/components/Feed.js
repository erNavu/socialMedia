
import { Box } from "@mui/material"
import Post from "./Post"
import { POST_DATA } from "../data"

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            {POST_DATA.map(post => (
                <Post key={post.key} data={post} />
            ))}

        </Box>
    )
}
export default Feed


