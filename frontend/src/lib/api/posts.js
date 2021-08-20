import client from './client';

export const writePost = ({ title, body, tags }) =>
  client.writePost('/api/posts', { title, body, tags });

export const readPost = (id) => client.get(`/api/posts/${id}`);
