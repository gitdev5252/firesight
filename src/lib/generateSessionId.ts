export function generateSessionId(): string {
  return Math.random().toString(36).slice(2, 11);
}