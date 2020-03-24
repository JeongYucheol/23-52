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
						<h3>힌트문의</h3>
						<span>팔로우 + DM</span>
						<a href="https://www.instagram.com/23h52m_/" target="_blank">
							<S.Instagram>
								<img src={instagram} />
								<span>
									23h52m_
								</span>
							</S.Instagram>

						</a>
					</li>
					<li><br></br><br></br></li>
					<li>
  				<h6>친구에게 공유하기<br></br></h6>
					<span>http://bit.ly/39RyGwx</span>
					</li>

				</ul>

			</S.Menu>
		</S.HeaderWrapper>

	);

};

export default Header;
