export const backendUrl = "http://localhost:8000/api";

export function fetchConfig(config: {
  method?: "GET" | "POST";
  body?: FormData | string;
}): RequestInit {
  const { method = "GET", body = "" } = config;
  const requestInit: RequestInit = {
    method: method,
    credentials: "include",
    body: body,
  };
  if (method === "GET") delete requestInit.body;
  return requestInit;
}
