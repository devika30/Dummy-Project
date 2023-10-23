"use client";
import { useQuery } from "react-query";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const getUsers = async (): Promise<Post[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("response", response);
  return response.data;
};
const Users = () => {
  const { data, isFetching, isError } = useQuery<Post[]>({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
  if(isFetching){
    return <h1>Data is being fetched</h1>
  }

  
  return (
    <div>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead >
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          </Table>
          <TableBody>
            {data?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
       
      </TableContainer>
    </div>
  );
};

export default Users;
