import {
  Table, TableHead, TableRow,
  TableCell, TableBody, Button
} from "@mui/material";

const UserTable = ({ users, onEdit, onDelete }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {users.map(user => (
        <TableRow key={user.id}>
          <TableCell>
            {user.firstName} {user.lastName}
          </TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>
            <Button  className="action-btn" onClick={() => onEdit(user)}>Edit</Button>
            <Button  className="action-btn" color="error" onClick={() => onDelete(user.id)}>
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default UserTable;