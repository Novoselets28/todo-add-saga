import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

import './TodoList.css'
import { fetchTodoListRequest, UPDATE_TODO_STATUS } from "./actions";



const TodoList = ({todos}) => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList);
    

    useEffect(() => {
        dispatch(fetchTodoListRequest(todos));
    }, [dispatch, todos]);

   

    const handleChangeStatus = (item) => {
        return {
            type: UPDATE_TODO_STATUS, id: item.id, completed: !item.completed
        }
    }
    return (
        <TableContainer className="main_box">
            <Table sx={{minWidth: 650}} stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Completed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todoList?.map((item,index) => (
                        <TableRow
                            key={index}
                            sx={{cursor: "pointer"}}
                            onClick={() => dispatch(handleChangeStatus(item))}
                        >
                            <TableCell component="th" scope="row" className={item.completed ? "completed" : ""}>
                                <p className="task_title">{item.title}</p>
                            </TableCell>
                            <TableCell align="right">
                                <Checkbox checked={item.completed}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TodoList;