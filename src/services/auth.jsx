// src/services/auth.ts

export const mockLogin = async (
  cpf: number,
  password: string
): Promise<{ token: string } | null> => {
  // Mock data - substitua com os dados de teste
  const mockUser = {
    cpf: "64696413349",
    password: "123456",
  };

  // Simula a validação de login
  if (cpf === mockUser.cpf && password === mockUser.password) {
    return { token: "mocked-jwt-token" };
  }

  return null; // Retorna nulo se a senha estiver incorreta
};

// src/services/auth.ts

const mockUsers: { cpf: string, password: string }[] = [];

export const mockRegister = async (
  cpf: Number,
  password: string
): Promise<boolean> => {
  const userExists = mockUsers.find((user) => user.cpf === cpf);

  if (userExists) {
    return false; // Retorna falso se o e-mail já estiver registrado
  }

  mockUsers.push({ cpf, password });
  return true; // Retorna verdadeiro se o registro for bem-sucedido
};
