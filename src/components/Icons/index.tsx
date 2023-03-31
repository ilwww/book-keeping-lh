import React from 'react';
import Icon from '@ant-design/icons';
import CheckedSvg from '@/assets/checked.svg?react';

type Props = Parameters<typeof Icon>[0];

export function CheckedIcon(props: Props) {
    return (
        <Icon
            {...props}
            component={CheckedSvg as React.ComponentType<React.SVGProps<SVGSVGElement>>}
        />
    );
}
