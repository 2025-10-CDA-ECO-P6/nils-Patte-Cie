'use client'
import { Home, Heart, MessageCircle, User, Menu, ListEndIcon } from 'lucide-react';
import {useState} from "react";
import styles from './MobilNavbar.module.css';

function MobilNavbar() {

    const [activeTab, setActiveTab] = useState('list')

    const navItems = [
        {id: 'home', icon : Home, label: 'Acceuil'},
        {id: 'list', icon : ListEndIcon , label: 'Liste'},
        {id: 'user', icon : User , label: 'Utilisateur'},
    ]

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <li key={item.id} className={styles.navItem}>
                            <button
                                onClick={() => setActiveTab(item.id)}
                                className={styles.navButton}
                                aria-label={item.label}
                            >
                                <Icon
                                    size={24}
                                    className={isActive ? styles.iconActive : styles.icon}
                                    fill={isActive && item.id === 'favorites' ? 'currentColor' : 'none'}

                                />
                                {isActive && <div className={styles.indicator} />}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>

    );
}

export default MobilNavbar
