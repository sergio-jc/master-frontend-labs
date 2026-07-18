export function useUpdateSearchParams() {
  const router = useRouter();
  const route = useRoute();

  const updateSearchParams = (
    updates: Record<string, string | number | null>,
  ) => {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(updates)) {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    }

    router.push({ path: route.path, query: Object.fromEntries(params) });
  };

  return updateSearchParams;
}
