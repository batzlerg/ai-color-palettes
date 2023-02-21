export function sanitizeResponse(responseText: string) {
  let sanitizedText = responseText;
  // truncate and append } if the response was cut off
  const commaSeparatedSegments = sanitizedText.split(',');
  if (!commaSeparatedSegments.slice(-1).includes('}')) {
    sanitizedText = commaSeparatedSegments.slice(0, commaSeparatedSegments.length - 1).join(',') + '}';
  }
  // strip newlines
  if (sanitizedText.includes('\n')) {
    sanitizedText = sanitizedText.replace(/\n/g, '');
  }
  // strip trailing comma if left in
  if (sanitizedText.includes('\n')) {
    sanitizedText = sanitizedText.replace(/(,})|(, })/g, '}');
  }
  return sanitizedText;
}