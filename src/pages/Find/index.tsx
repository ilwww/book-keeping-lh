import {PlusOutlined} from '@ant-design/icons';
import styled from '@emotion/styled';
import {Button, Card, Divider, Progress} from 'antd';
import LabelItem from './LableItem';

const Layout = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
`;

const BillWrapper = styled.section`
    display: flex;
    gap: 4px;
`;

const BillTitleLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BudgetWrapper = styled.div`
    flex: 1;

    > div {
        justify-content: space-between;
    }
`;

export default function FindEntry() {
    return (
        <Layout>
            <Card title="账单">
                <BillWrapper>
                    <span>03月</span>
                    <span>|</span>
                    <LabelItem title="收入" value="0.00" layout="column" />
                    <LabelItem title="支出" value="0.00" layout="column" />
                    <LabelItem title="结余" value="0.00" layout="column" />
                </BillWrapper>
            </Card>
            <Card title={(
                <BillTitleLayout>
                    <span>03月总预算</span>
                    <Button
                        type="primary"
                        icon={(<PlusOutlined />)}
                    >
                        设置预算
                    </Button>
                </BillTitleLayout>
            )}
            >
                <BillWrapper style={{gap: 12}}>
                    <Progress
                        type="circle"
                        percent={75}
                        format={(percent?: number) => (
                            <LabelItem
                                title="剩余"
                                value={`${percent}%`}
                                layout="column"
                            />
                        )}
                    />
                    <BudgetWrapper>
                        <LabelItem title="剩余预算" value="0.00" />
                        <Divider style={{margin: 0}} />
                        <LabelItem title="本月预算" value="0.00" />
                        <LabelItem title="本月支出" value="0.00" />
                    </BudgetWrapper>
                </BillWrapper>
            </Card>
            <Card title="资产管家">
                <BillWrapper>
                    <LabelItem title="净资产" value="0.00" layout="column" />
                    <LabelItem title="资产" value="0.00" layout="column" />
                    <LabelItem title="负债" value="0.00" layout="column" />
                </BillWrapper>
            </Card>
        </Layout>
    );
}
