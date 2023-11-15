import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import UserAPI from "../api/UserAPI.jsx";

function AddUser(props) {

    const auth = new UserAPI();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        auth.addUser({
            email: email,
            password: password
        }).then((res) => {
            if (res.status === 200) {
                alert("Sukses menambahkan user!");
                props.setStatus(true);
            }
        }).catch((err) => {
            alert("Email sudah ada!");
        })

        props.setStatus(false);
    }

    return (
        <>
           <form onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                   <Grid item xs={12} md={12}>
                       <Typography variant="h5" component="h1" fontWeight="bold">
                           Add User
                       </Typography>
                   </Grid>
                   <Grid item xs={12} md={12}>
                       <TextField  label="Email" name="email" type="email" autoComplete="off" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
                   </Grid>
                   <Grid item xs={12} md={12}>
                       <TextField label="Password" autoComplete="off" type="password" name="password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
                   </Grid>
                   <Grid item xs={12} md={12}>
                       <Button type="submit" variant="outlined">Add User</Button>
                   </Grid>
               </Grid>
           </form>
        </>
    )
}

export default AddUser