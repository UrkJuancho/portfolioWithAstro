// src/services/apiService.js

const API_BASE_URL = "http://localhost:3000/api/portfolio";

// Función genérica para manejar respuestas de la API
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error en la petición");
  }
  return response.json();
};

// GET: Obtener todos los elementos del portafolio
export const getPortfolioItems = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  return handleResponse(response);
};

// POST: Crear un nuevo elemento del portafolio
export const createPortfolioItem = async (data) => {
  const response = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// PUT: Actualizar un elemento del portafolio por ID
export const updatePortfolioItem = async (id, data) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// DELETE: Eliminar un elemento del portafolio por ID
export const deletePortfolioItem = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return handleResponse(response);
};
