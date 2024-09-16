const API_URL = 'https://activag10-panel-laravel.orioncolombia.com/api/entradas/español';

export const obtenerEntradasEspañol = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener las entradas en español:', error);
    throw error;
  }
};
