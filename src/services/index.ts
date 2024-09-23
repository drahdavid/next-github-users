export const fetchService = async <T>(url: string): Promise<T> => {
  const token = "your-bearer-token";
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
