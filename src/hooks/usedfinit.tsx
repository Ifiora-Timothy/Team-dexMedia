import {useAuthClient} from '@dfinity/use-auth-client';

// ...ts
const App = () => {
  const identityProvider =
    // eslint-disable-next-line no-undef
    process.env.DFX_NETWORK === 'local'
      ? // eslint-disable-next-line no-undef
        `http://${process.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943`
      : 'https://identity.ic0.app';

  const { isAuthenticated, login, logout, actor } = useAuthClient({
    loginOptions: {
      identityProvider,
    },
    actorOptions: {
      canisterId,
      idlFactory,
    },
  });
//   ...
}