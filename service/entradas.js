const BASE_API_URL = 'https://activag10-panel-laravel.orioncolombia.com/api/entradas';

export const obtenerEntradas = async (language) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${language}`);
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener las entradas en embera:', error);
    throw error;
  }
};
