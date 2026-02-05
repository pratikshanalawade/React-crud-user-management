import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../api/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateUser(editingId, formData);
    } else {
      await createUser(formData);
    }

    setFormData({});
    setEditingId(null);
    loadUsers();
  };

  return (
    <>
      <UserForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />

      <UserTable
        users={users}
        onEdit={(user) => {
          setFormData(user);
          setEditingId(user.id);
        }}
        onDelete={async (id) => {
          await deleteUser(id);
          loadUsers();
        }}
      />
    </>
  );
};

export default Users;