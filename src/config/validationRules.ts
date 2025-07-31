// Dynamic validation middleware from config of ass4

export const validationRules: Record<string, any> = {
  
    "/api/v1/user/register": {
    username: { type: "string", min: 3, max: 30, required: true },
    email: { type: "string", format: "email", required: true },
    password: { type: "string", pattern: /^[a-zA-Z0-9]{3,30}$/, required: true },
  },
  
};
