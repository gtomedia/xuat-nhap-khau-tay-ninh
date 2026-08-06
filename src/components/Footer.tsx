import React from 'react';
import { footerData } from '@/data';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Tên chương trình 2 dòng, đặt ở trên cùng chiếm trọn bề ngang */}
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '1.5rem' }}>
          <div className="text-white footer-logo-title-area">
            <span style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', letterSpacing: '0.5px', lineHeight: 1.3 }}>
              {footerData.logoTitle[0]}
            </span>
            <span style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', fontWeight: 700, textTransform: 'uppercase', color: '#fff', lineHeight: 1.3 }}>
              {footerData.logoTitle[1]}
            </span>
          </div>
        </div>

        {/* 3 cột thông tin bên dưới */}
        <div className="footer-grid-3">
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', fontWeight: 700, color: '#facc15', textTransform: 'uppercase' }}>Đơn vị chỉ đạo</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              {footerData.directors.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', fontWeight: 700, color: '#facc15', textTransform: 'uppercase' }}>Đơn vị thực hiện</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              {footerData.implementers.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', fontWeight: 700, color: '#facc15', textTransform: 'uppercase' }}>Địa điểm</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              <li>
                <a
                  href={footerData.locationMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#facc15')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                >
                  {footerData.location}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', fontWeight: 700, color: '#facc15', textTransform: 'uppercase' }}>Hoặc liên hệ</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              {footerData.contacts.map((c, index) => (
                <li key={index}>
                  <strong style={{ color: '#fff' }}>{c.label}:</strong> {c.text} <a href={`tel:${c.phone.replace(/\./g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#facc15')} onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}>{c.phone}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
          @2026 Bản quyền do UBND Tỉnh Tây Ninh<br />
          Được thiết kế bởi <a href="https://gto.vn" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>GTO Media</a>
        </div>
      </div>

      <style>{`
        .footer-logo-title-area {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
          text-align: left;
        }
        .footer-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        @media (max-width: 992px) {
          .footer-grid-3 {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        @media (max-width: 768px) {
          .footer-logo-title-area {
            align-items: center;
            text-align: center;
          }
          .footer-grid-3 {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
