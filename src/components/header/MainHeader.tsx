import { Header } from '@ui';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { InnerWrapper } from '../inner-wrapper';
import './MainHeader.scss';
import { ThemeSwitcher } from './theme-switcher';
import { Title } from './Title';

export const MainHeader: FC = () => (
    <>
        <Header className="main-header">
            <InnerWrapper>
                <Title />
                <ThemeSwitcher />
            </InnerWrapper>
        </Header>
        <Outlet />
    </>
);
