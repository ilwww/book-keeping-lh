import {CSSProperties} from 'react';
import {FieldTimeOutlined, LineChartOutlined, UserOutlined, ZoomInOutlined} from '@ant-design/icons';
import styled from '@emotion/styled';
import {NavLink} from 'react-router-dom';
import {COLOR_PRIMARY} from '@/constant';

interface Props {
    style?: CSSProperties;
}

const Layout = styled.section`
    display: flex;
    gap: 24px;
    justify-content: center;
    padding: 12px;
    background: white;
`;

const ItemLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;
    }

    a {
        color: black;
    }
`;

export default function Footer({
    style,
}: Props) {
    return (
        <Layout style={style}>
            <NavLink
                to="detail"
                style={{color: 'black'}}
            >
                {
                    ({isActive}) => (
                        <ItemLayout>
                            <FieldTimeOutlined style={{color: isActive ? COLOR_PRIMARY : 'black'}} />
                            <span>明细</span>
                        </ItemLayout>
                    )
                }
            </NavLink>
            <NavLink
                to="chart"
                style={{color: 'black'}}
            >
                {
                    ({isActive}) => (
                        <ItemLayout>
                            <LineChartOutlined style={{color: isActive ? COLOR_PRIMARY : 'black'}} />
                            <span>图表</span>
                        </ItemLayout>
                    )
                }
            </NavLink>
            <NavLink
                to="find"
                style={{color: 'black'}}
            >
                {
                    ({isActive}) => (
                        <ItemLayout>
                            <ZoomInOutlined style={{color: isActive ? COLOR_PRIMARY : 'black'}} />
                            <span>发现</span>
                        </ItemLayout>
                    )
                }
            </NavLink>
            <NavLink
                to="mine"
                style={{color: 'black'}}
            >
                {
                    ({isActive}) => (
                        <ItemLayout>
                            <UserOutlined style={{color: isActive ? COLOR_PRIMARY : 'black'}} />
                            <span>我的</span>
                        </ItemLayout>
                    )
                }
            </NavLink>
        </Layout>
    );
}
