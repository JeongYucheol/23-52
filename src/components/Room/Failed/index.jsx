import React from 'react';
import S     from './styles';
import instagram           from '../../../lib/icons/instagram';

const Failed = ({ data }) => {

	return (
		<S.Wrapper>
			<S.Title>{data.title}</S.Title>
			<S.Description>{data.text}</S.Description>
			{
				data.buttons.map((button, i) => (
					<S.Button
						key={i}
					>
						<a href="https://www.instagram.com/23h52m_/" target="_blank">
							<img src={instagram}/>
						</a>
					</S.Button>
				))
			}
		</S.Wrapper>
	);

};

export default Failed;
