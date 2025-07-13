
export function getThermometer(status: number | null | undefined | string): string {
  const basePath = "/images/speedometer";

  const statusMap: Record<string, string> = {
    extreme: `${basePath}/speedometer-extreme.png`,
    high: `${basePath}/speedometer-high.svg`,
    moderate: `${basePath}/speedometer-moderate.png`,
    low: `${basePath}/speedometer-moderate.png`,
    "very low": `${basePath}/speedometer-vlow.png`,
    vlow: `${basePath}/speedometer-vlow.png`,
  };

  const key = status !== null && status !== undefined
    ? String(status).trim().toLowerCase()
    : "";

  return statusMap[key] || `${basePath}/speedometer-moderate.png`; 
}
