import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const MenuContainer = styled.div`
    ${tw`
        flex
    `}
`;

export function Menu() {
    return (
        <MenuContainer>
            <div></div>
        </MenuContainer>
    );
}
