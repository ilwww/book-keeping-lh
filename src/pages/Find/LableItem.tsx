import {CSSProperties} from 'react';
import styled from '@emotion/styled';

interface Props {
    style?: CSSProperties;
    title?: string | React.ReactNode;
    value?: string | React.ReactNode;
    layout?: 'column' | 'row';
}

const LayoutWrapper = styled.div<{layout?: 'column' | 'row'}>(props => ({
    display: 'flex',
    flexDirection: props.layout || 'row',
}));

export default function LabelItem({
    style,
    title,
    value,
    layout,
}: Props) {
    return (
        <LayoutWrapper style={style} layout={layout}>
            <div>{title}</div>
            <div>{value}</div>
        </LayoutWrapper>
    );
}
