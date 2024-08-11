import React, { Component } from 'react'
import styled from 'styled-components';

export default class Header extends Component {
    render() {
        return (
            <FooterWrapper className="d-flex justify-content-center align-items-center p-3">
                <span className="footer-text">Ecommerce Site</span>
            </FooterWrapper>
        )
    }
}
const FooterWrapper = styled.div`
background:var(--mainDark);
.footer-text {
    color:var(--mainWhite);
}
`;
