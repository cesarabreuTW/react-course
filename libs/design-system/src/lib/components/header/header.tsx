import { Button } from '../button/button';
import styles from './header.module.css';

export interface MenuItem {
  title: string;
  url: string;
}

export interface HeaderProps {
  menu: MenuItem[];
  actionButtons?: Array<{ text: string; click: () => void }>;
}

export function Header({ menu, actionButtons }: HeaderProps) {
  return (
    <header className={styles['container']}>
      <div className={styles['logo-placeholder']}>Logo</div>
      
      <nav className={styles['menu']}>
        {menu.map((item) => (
          <a key={item.url} href={item.url} className={styles['menu-item']}>
            {item.title}
          </a>
        ))}
      </nav>

      <div className={styles['actions']}>
        {actionButtons?.map((button, id) => (
          <Button key={id} text={button.text} onClick={button.click} />
        ))}
      </div>
    </header>
  );
}

export default Header;
