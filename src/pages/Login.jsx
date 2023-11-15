import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {useState} from "react";
import UserAPI from "../api/UserAPI.jsx";

function Login({setToken}) {
    const auth = new UserAPI()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const result = await auth.loginUser({email, password});

            if (result.status.statusCode === 200) {
                setToken(result.token);
            }

        } catch (error) {
            alert("Email/password salah!");
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h5" component="h1"  fontWeight="bold">
                            Login User
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField label="Email" name="email" type="email" variant="outlined"
                                   onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField  type="password" label="Password" name="password"
                                   variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button type="submit" variant="outlined">Sign In</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default Login