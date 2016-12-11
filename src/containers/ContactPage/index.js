/**
 * External Dependencies
 */
import React from 'react';
import DocumentTitle from 'react-document-title';

/**
 * Internal Dependencies
 */
import ContactForm from 'containers/ContactForm';
import ButtonsArea from './styles/ButtonsArea';
import FormArea from './styles/FormArea';
import SocialButtons from './SocialButtons';

export default () => (
	<DocumentTitle title="Contact | Spen Taylor">
		<div>
			<ButtonsArea>
				<h2>Contact</h2>
				<SocialButtons />
			</ButtonsArea>
			<FormArea>
				<ContactForm />
			</FormArea>
		</div>
	</DocumentTitle>
);
