import {useEffect, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import UserAPI from "../api/UserAPI.jsx";

function Modal(props) {
    const auth = new UserAPI()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const id = props.id

    useEffect(() => {
        if (id > 0) {
            auth.getUser(id)
                .then((res) => {
                    setEmail(res.email);
                    setPassword(res.password);
                }).catch((err) => {
                console.log(err);
            })
        }
    }, [id]);

    function handleClose() {
        props.setOpen(false);
    }

    function handleEdit(e) {
        e.preventDefault();

        if (email !== "" || password !== "") {
            auth.updateUser({id, email, password}).then((res) => {
                props.setIsEdit(true);
                alert("User berhasil diubah!");
            }).catch((err) => {
                console.log(err);
            })
        }

        props.setIsEdit(false);
    }

    return (
        <>
            <Dialog open={props.open} onClose={handleClose}>
                <form onSubmit={handleEdit}>
                    <DialogTitle>Edit Data User</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            name="email"
                            label="Email"
                            type="email"
                            value={email}
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            margin="dense"
                            name="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Edit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default Modal