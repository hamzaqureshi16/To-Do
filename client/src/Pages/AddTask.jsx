import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Typography,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddTask = () => {
  const [data, setData] = React.useState({
    title: "",
    description: "",
  });

  const clearData = () => {
    toast.success("Task Added Successfully");
    setData({ title: "", description: "" });
  }


  const add = async () => {
    try {
      const res = await axios.post(`http://127.0.0.1:3000/add`, data);
      res.status === 201 && clearData();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box>
      <Typography variant="h2">Add Task</Typography>
      <FormControl
        style={{
          width: "20rem",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <FormLabel className="mt-4">Title</FormLabel>
        <Input
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <FormHelperText>Enter Title</FormHelperText>

        <FormLabel className="mt-4">Description</FormLabel>
        <Input
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />

        <FormHelperText>Enter Description</FormHelperText>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {add()}}
          className="mt-4"
        >
          Add
        </Button>


      </FormControl>
    </Box>
  );
};

export default AddTask;
