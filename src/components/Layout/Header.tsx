import {CSSProperties} from 'react';
import styled from '@emotion/styled';
import {COLOR_PRIMARY} from '@/constant';
import {CheckedIcon} from '../Icons';

interface Props {
    style?: CSSProperties;
}

const Layout = styled.section`
    display: flex;
    justify-content: center;
    padding: 12px;
    background: ${COLOR_PRIMARY};
`;

export default function Header({
    style,
}: Props) {
    return (
        <Layout style={style}>
            Header
            <CheckedIcon />
        </Layout>
    );
}
