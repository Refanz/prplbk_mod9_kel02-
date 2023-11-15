import {Typography} from "@mui/material";

function NotFound() {
    return (
        <>
            <Typography component="h1" variant="h5" fontWeight="bold">
                Oops!
            </Typography>
            <Typography component="p" marginTop="30px">
                Sorry, an unexpected error has occurred.
            </Typography>
            <Typography component="p" marginTop="30px" fontStyle="italic" color="grey">
                NotFound
            </Typography>
        </>
    )
}

export default NotFound