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
export const getBlogs = async (token) => {
  try {
    const res = await axios.get(
      "https://api-staging-v2.sploot.space/api/v2/cms/post-categories",
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res.data.data;
  } catch (error) {}
};
export const getBlogPage = async (slug) =>
  await axios.get(
    `https://api-staging-v2.sploot.space/api/v2/public/cms/post-categories/${slug}`
  );
export const getUserDetails = async (token) => {
  const res = await axios.get(
    `https://api-staging-v2.sploot.space/api/v2/user`,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );
  return res;
};
