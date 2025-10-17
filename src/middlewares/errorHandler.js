class AppError {
  message;
  statusCode;

  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

// O middleware que vai capturar e tratar todos os erros
const errorHandler = (error, request, response, next) => {
  console.error(error); // Ótimo para debugar

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Erro interno do servidor",
  });
};

export { AppError, errorHandler };
