export default function() {
  return new Promise(resolve => setImmediate(resolve));
}