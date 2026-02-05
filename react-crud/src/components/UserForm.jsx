import { useEffect, useState } from "react";
import { TextField, Button, Stack, Paper } from "@mui/material";
import { getSchema } from "../api/api";

const UserForm = ({ formData, setFormData, onSubmit }) => {
  const [schema, setSchema] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getSchema().then(res => setSchema(res.data));
  }, []);

  const validate = () => {
    const newErrors = {};

    schema.forEach(field => {
      const value = formData[field.name] || "";

      if (field.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
        return;
      }

      if (field.minLength && value.length < field.minLength) {
        newErrors[field.name] =
          `${field.label} must be at least ${field.minLength} characters`;
        return;
      }

      if (field.pattern) {
        const regex = new RegExp(field.pattern);
        if (!regex.test(value)) {
          newErrors[field.name] =
            field.errorMessage || `${field.label} is invalid`;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(e);
      setErrors({});
    }
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Paper className="card" sx={{ p: 3, mb: 3 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {schema.map(field => (
            <TextField
              key={field.name}
              label={field.label}
              type={field.type}
              value={formData[field.name] || ""}
              onChange={(e) =>
                handleChange(field.name, e.target.value)
              }
              error={!!errors[field.name]}
              helperText={errors[field.name]}
            />
          ))}
          <Button type="submit" variant="contained">
            Save User
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default UserForm;