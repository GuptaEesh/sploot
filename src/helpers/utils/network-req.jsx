import axios from "axios";

export const loginHandler = async (formFields, login) => {
  const { email, password } = formFields;
  try {
    const res = await axios.post(
      "https://api-staging-v2.sploot.space/api/v2/auth/signin",
      {
        username: email,
        password,
      }
    );
    login(res.data.data.data);
  } catch (error) {}
};
