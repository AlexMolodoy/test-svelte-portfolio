import HomePage from './pages/HomePage/HomePage.svelte';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.svelte';
import PostPage from './pages/PostPage/PostPage.svelte';
import UserPage from './pages/UserPage/UserPage.svelte';

export const routes = {
  '/': HomePage,
  '/user/*': UserPage,
  '/post/*': PostPage,
  '*': NotFoundPage,
};
