import * as yup from "yup";

const RegisterSchema = yup.object().shape({
	name: yup.string().min(2).required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).max(32).required(),
});

export default RegisterSchema;
