import { Button, LeftArrowIcon, Section } from '@ui';
import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { InnerWrapper } from '../../inner-wrapper';

interface Props {
    children: ReactElement;
    className?: string;
}

export const CountryFocusPage: FC<Props> = ({ children, className }) => {
    const navigate = useNavigate();

    const navigateBackToCountryList = () => navigate('/');

    return (
        <Section className={className}>
            <InnerWrapper>
                <Button
                    data-test="country-detail-navigate-back-button"
                    className="secondary"
                    onClick={navigateBackToCountryList}
                    icon={<LeftArrowIcon />}
                >
                    Back
                </Button>
            </InnerWrapper>
            {children}
        </Section>
    );
};
