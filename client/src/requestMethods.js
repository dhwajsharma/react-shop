import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGRmNzViM2Y0OWQzZjZlZjM5MzhlYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTQxNzU5MiwiZXhwIjoxNjQ1Njc2NzkyfQ.DDop3OqojDceGZr8gupNA-GHLh3Kn41M_7t1PHVWSNk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
