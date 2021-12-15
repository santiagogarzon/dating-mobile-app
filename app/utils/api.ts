import axios from "axios";

export const emulateLike = async (id: number) => {
  return await new Promise((resolve) => {
    resolve(`Liked ${id}`);
  });
};

export const emulateDontLike = async (id: number) => {
  return await new Promise((resolve) => {
    resolve(`Unliked ${id}`);
  });
};

export async function fetchProfiles() {
  const { data } = await axios.get(
    "https://fld-devtest-api.herokuapp.com/api/v1/users",
    {
      headers: {
        "session-token":
          "3TtY+AVtEJMaOPWGyEulVEgVBWZ8gqM75gag6wCcA3rJCYWMkX/ZmAOJxrZ4bPyBLJBch7VyMYD8ZCWoNPCUnJbT5M2iRWjJteGrfNhFzd+0oDbWQwiNAIdG0W9rHw7sKAAWk5uEzjs+lPykJnmy56LRwSFpoyxHC7p9G3KTQoQ="
      }
    }
  );
  return data;
}
