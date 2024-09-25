const BASE_API_URL ="https://activag10-panel-laravel.orioncolombia.com/api/entradas";
const BASE_API_URL_DETALLES ="https://activag10-panel-laravel.orioncolombia.com/api/entradas/multimedias";

export const obtenerEntradas = async (language) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${language}`);
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al obtener las entradas en embera:", error);
    throw error;
  }
};

export const obtenerDetallesMultimedia = async (id) => {
  try {
    const response = await fetch(`${BASE_API_URL_DETALLES}/${id}`);
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al obtener las entradas:", error);
    throw error;
  }
};
