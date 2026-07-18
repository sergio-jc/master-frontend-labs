export const useDebounce = (value: Ref<string>, delay: number) => {
  const debouncedValue = ref(value.value);

  watch(value, (newValue, _oldValue, onCleanup) => {
    const handler = setTimeout(() => {
      debouncedValue.value = newValue;
    }, delay);

    onCleanup(() => clearTimeout(handler));
  });

  return debouncedValue;
};
