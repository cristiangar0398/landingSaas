export async function fetchData<T>(path: string): Promise<T> {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Error al consumir la API: ${response.statusText}`);
        }
        const data: T = await response.json();
        console.log("data :", data)
        return data;
    } catch (error) {
        throw new Error(`Error al consumir la API: ${error}`);
    }
}