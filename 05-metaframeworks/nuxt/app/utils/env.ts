export const getEnv = () => {
  const config = useRuntimeConfig();
  return {
    API_URL: config.public.apiUrl as string,
    IMAGE_URL: config.public.imageUrl as string,
  };
};
