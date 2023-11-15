import {Grid, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import UserAPI from "../api/UserAPI.jsx";
import Modal from "./Modal.jsx";

function ListUser(props) {
    const auth = new UserAPI();
    const [users, setUsers] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(0);

    useEffect(() => {
        auth.getUsers().then((res) => {
            if (users.length < 1) {
                setUsers(res);
            }

            if (props.status) {
                setUsers(res);
            }

            if (isDelete) {
                setUsers(res);
            }

            if (isEdit) {
                setUsers(res);
            }
        })
    }, [props.status, users, isDelete, isEdit]);

    function handleDelete(e) {
        e.preventDefault();

        const isDelete = confirm("Yakin ingin hapus?");

        if (isDelete) {
            const id = e.currentTarget.id;

            auth.deleteUser(id).then((res) => {
                setIsDelete(true);
                alert("Berhasil menghapus user!");
                console.log(res);
            }).catch((err) => {
                alert("Gagal menghapus user!");
                console.log(err);
            })
        }

        setIsDelete(false);
    }

    function handleEdit(e) {
        e.preventDefault();

        const id = e.currentTarget.id

        setId(id);

        setOpen(true);
    }

    return (
        <>
            <Grid item xs={12} md={6}>
                <List>
                    {users.length > 0 && users.map((data, index) => {
                        return (
                            <ListItem key={data.id} dense={true}>
                                <ListItemText>
                                    {index + 1}
                                </ListItemText>
                                <ListItemText
                                    primary={data.email}
                                />
                                <ListItemIcon>
                                    <IconButton id={data.id} onClick={handleEdit} edge="end" aria-label="edit">
                                        <Edit color={"primary"}/>
                                    </IconButton>
                                    <IconButton id={data.id} onClick={handleDelete} edge="end" aria-label="delete">
                                        <Delete color={"error"}/>
                                    </IconButton>
                                </ListItemIcon>
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>

            <Modal open={open} setOpen={setOpen} id={id} setIsEdit={setIsEdit}/>
        </>

    )
}

export default ListUser