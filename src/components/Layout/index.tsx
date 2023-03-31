import styled from '@emotion/styled';
import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = styled.div`
    min-height: 100%;
`;

const HEADER_HEIGHT = 60;
const FOOTER_HEIGHT = 60;

const ContentWrapper = styled.div`
    height: calc(100vh - ${`${HEADER_HEIGHT + FOOTER_HEIGHT}px`});
`;

export default function LayoutWrapper() {
    return (
        <Layout>
            <Header style={{height: HEADER_HEIGHT}} />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
            <Footer style={{height: FOOTER_HEIGHT}} />
        </Layout>
    );
}
