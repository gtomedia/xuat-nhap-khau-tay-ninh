import React from 'react';
import { MapPin } from 'lucide-react';
import { footerData } from '@/data';
import { useAppStore } from '@/store/useAppStore';

const Footer: React.FC = () => {
  const { title } = useAppStore();

  return (
    <footer className="footer">
      <div className="container footer-layout">
        <div className="footer-logo-area" style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
          <div className="logo text-white" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>

            <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>{title}</span>
          </div>
          <div style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
            @2026 Bản quyền do UBND Tỉnh Tây Ninh<br />
            Được thiết kế bởi <a href="https://gto.vn" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>GTO Media</a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6" style={{ width: '100%', textAlign: 'left' }}>
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
                  href="https://maps.google.com/?q=Hội+trường+Tỉnh+uỷ+Tây+Ninh"
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
              <li>
                <strong style={{ color: '#fff' }}>Cơ quan ngoại giao:</strong> Đ/c Thái Hòa - Tel: <a href="tel:0918128365" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#facc15')} onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}>0918.128.365</a>
              </li>
              <li>
                <strong style={{ color: '#fff' }}>KCN:</strong> Quốc Tuấn <a href="tel:0949819964" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#facc15')} onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}>0949.819.964</a>
              </li>
              <li>
                <strong style={{ color: '#fff' }}>Sở Công Thương:</strong> Đ/c Thúy Duy - Tel: <a href="tel:0979972528" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#facc15')} onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}>0979.972.528</a>
              </li>
              <li>
                <strong style={{ color: '#fff' }}>Sở Tài chính:</strong> Tường Oanh <a href="tel:0325492768" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#facc15')} onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}>0325.492.768</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
