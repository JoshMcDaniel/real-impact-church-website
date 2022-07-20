export type Image = {
  path: string;
  description: string;
};

/**
 * The Youtube snippet info used by this website.
 */
export type YoutubeSnippet = {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishedAt: string;
  title: string;
};
