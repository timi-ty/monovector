function sprintErrorMessage(error: any): string {
  if (error instanceof Error) {
    return error.message;
  } else {
    return String(error);
  }
}

export { sprintErrorMessage };
