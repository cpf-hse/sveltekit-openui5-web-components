import { PUBLIC_FIREBASE_KEY } from '$env/static/public';
import { initializeApp, FirebaseError } from 'firebase/app';
import { getAuth, OAuthProvider, signInWithRedirect, onIdTokenChanged } from 'firebase/auth';

const provider = new OAuthProvider('microsoft.com');
provider.setCustomParameters({
	tenant: '1d0f52d7-4151-4a31-ad92-b176d150d4e6'
});

const firebaseConfig = JSON.parse(PUBLIC_FIREBASE_KEY);

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

onIdTokenChanged(auth, async (user) => {
	if (user) {
		const token = await user.getIdToken();
		//localStorage.setItem('token', token);
	} else {
		//localStorage.removeItem('token');
	}
});

async function setToken(token: string) {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({ token })
	};

	await fetch('/api/token', options);
}

export { FirebaseError, signInWithRedirect, provider, setToken };
