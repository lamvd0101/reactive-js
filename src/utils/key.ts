export function randomKey() {
  return (
    new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
  );
}
