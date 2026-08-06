import React from 'react';
import { MapPin } from 'lucide-react';
import { footerData, heroData } from '@/data';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-layout footer-grid-4">
        <div className="footer-logo-area footer-logo-align" style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <div className="logo text-white" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>{heroData.title1}</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>{heroData.title2}</span>
            <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{heroData.subtitle1}</span>
            <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{heroData.subtitle2}</span>
          </div>
        </div>
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
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <MapPin size={16} style={{ marginTop: '0.15rem', flexShrink: 0 }} />
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

      <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
          @2026 Bản quyền do UBND Tỉnh Tây Ninh<br />
          Được thiết kế bởi <a href="https://gto.vn" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>GTO Media</a>
        </div>
      </div>

      <style>{`
        .footer-grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }
        .footer-logo-align {
          align-items: flex-start;
          text-align: left;
        }
        @media (max-width: 992px) {
          .footer-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .footer-grid-4 {
            grid-template-columns: 1fr;
          }
          .footer-logo-align {
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
