// Gera o QR Code de avaliação no Google a partir do Place ID em src/data/google.json.
import { readFileSync, writeFileSync } from 'node:fs';
import QRCode from 'qrcode';

const { placeId } = JSON.parse(readFileSync('src/data/google.json', 'utf8'));
const url = `https://search.google.com/local/writereview?placeid=${placeId}`;
const opcoes = { errorCorrectionLevel: 'M', margin: 4, color: { dark: '#000000', light: '#ffffff' } };

writeFileSync('public/img/qr-avaliar.svg', await QRCode.toString(url, { ...opcoes, type: 'svg' }));
await QRCode.toFile('public/img/qr-avaliar.png', url, { ...opcoes, width: 1200 });
console.log(`QR gerado para ${url}`);
