// Imagem de compartilhamento e ícone. Só precisa rodar de novo se a logo mudar.
import sharp from 'sharp';

const logo = await sharp('public/img/logo.svg', { density: 400 }).resize({ width: 820 }).png().toBuffer();

await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#000000' } })
  .composite([{ input: logo, gravity: 'center' }])
  .png()
  .toFile('public/img/og.png');

await sharp('public/img/favicon.svg', { density: 600 })
  .resize(180, 180, { fit: 'contain', background: '#000000' })
  .png()
  .toFile('public/img/apple-touch-icon.png');
