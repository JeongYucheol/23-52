import React, { useState } from 'react';
import hamburger           from '../../../lib/icons/hamburger';
import close               from '../../../lib/icons/close';
import kakao               from '../../../lib/icons/kakaoplus';
import instagram           from '../../../lib/icons/instagram';
import S                   from './styles';



const Header = (props) => {

	const [menuOn, toggleMenu] = useState(false);

	return (
		<S.HeaderWrapper noneHeader={props.noneHeader}>
			<S.Hamburger onClick={() => toggleMenu(!menuOn)}>
				<img style={{ display: `${menuOn ? 'none' : 'block'}` }} src={hamburger} />
				<img style={{ display: `${menuOn ? 'block' : 'none'}` }} src={close} />
			</S.Hamburger>
			<S.Menu show={menuOn}>
				<ul>
					<li>
						<h3>문의하기</h3>
						<span>혹은 아이디어 주기</span>
						<a href="https://www.instagram.com/23h52m_/" target="_blank">
							<S.Instagram>
								<img src={instagram} />
								<span>
									23h52m_
								</span>
							</S.Instagram>
						</a>
					</li>

				</ul>
			</S.Menu>
		</S.HeaderWrapper>
	);

};

export default Header;
