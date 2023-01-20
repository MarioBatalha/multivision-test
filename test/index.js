import { letter } from '../js';

import { exemple1Mock } from './mock_data';

describe('Get user with posts', () => {
	it('Deve retornar usuários com os seus referidos posts', () => {
		const user = [letter.userInfoAndPostInfo, ...posts];

		expect(user).toEqual(exemple1Mock);
	});
});