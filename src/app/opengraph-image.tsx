import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Akshat Singh — Data Analyst & AI/ML Engineer';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            color: '#050505',
            fontSize: 160,
            fontWeight: 800,
            borderRadius: 40,
            padding: '40px 60px',
            marginBottom: 60,
          }}
        >
          AS
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginBottom: 20, color: '#ffffff' }}>
          Akshat Singh
        </div>
        <div style={{ fontSize: 36, color: '#a1a1aa' }}>
          Data Analyst & AI/ML Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
