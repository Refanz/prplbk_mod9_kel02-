import {Button, Container, Grid} from "@mui/material";
import AddUser from "../components/AddUser.jsx";
import ListUser from "../components/ListUser.jsx";
import {useState} from "react";
import {removeToken} from "../api/Token.jsx";
import {Navigate, redirect} from "react-router-dom";

function Dashboard() {

    const [status, setStatus] = useState(false);

    function handleLogout(e) {
        e.preventDefault();

        const isLogout = confirm("Ingin logout?");

        if (isLogout) {
            removeToken();

            window.location.reload();
        }
    }

    return (
        <>
            <Container>
                <h2>Dashboard</h2>
                <Grid container spacing={3} columns={12} marginTop={0}>
                    <Grid item xs={12} md={12}>
                        <form onSubmit={handleLogout}>
                            <Button type="submit" variant="outlined" color="error">Logout</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AddUser setStatus={setStatus}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ListUser status={status}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )

}

export default Dashboard