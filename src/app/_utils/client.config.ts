export const backendUrl = "http://localhost:8000";

export function fetchConfig(config: {
  method?: "GET" | "POST";
  body?: FormData | string;
  contentType?:
    | "application/json"
    | "application/x-www-form-urlencoded"
    | "multipart/form-data";
}): RequestInit {
  const { method = "GET", body = "" } = config;
  const requestInit: RequestInit = {
    method: method,
    credentials: "include",
    body: body,
  };
  if (method === "GET") delete requestInit.body;
  if (config.contentType) {
    requestInit.headers = [["content-type", config.contentType]];
  }
  return requestInit;
}
