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
                  href="https://www.google.com/maps/place/UBND+T%E1%BB%89nh+T%C3%A2y+Ninh/@10.541237,106.4122555,332m/data=!3m1!1e3!4m14!1m7!3m6!1s0x310ab620e5209607:0x885223bd6e764bb7!2zVHJ1bmcgVMOibSBQaOG7pWMgVuG7pSBI4buZaSBuZ2jhu4sgTG9uZyBBbg!8m2!3d10.5411984!4d106.4129984!16s%2Fg%2F11cp5s8r5h!3m5!1s0x310ab6218fffffff:0x680093c4537ba988!8m2!3d10.5413431!4d106.4138736!16s%2Fg%2F1wt3kvw3?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
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

      <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
          @2026 Bản quyền do UBND Tỉnh Tây Ninh<br />
          Được thiết kế bởi <a href="https://gto.vn" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>GTO Media</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
