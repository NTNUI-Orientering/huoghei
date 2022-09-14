/**
 * Interface for post title, content and excerpt
 */
interface ContentObject {
  //This property is always present
  rendered: string;
  //This property is only present in some contexts
  raw?: string;
}

/**
 * Interface for describing post title
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PostTitle extends ContentObject {}
/**
 * Interface for describing post content
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PostContent extends ContentObject {}
/**
 * Interface for describing post content
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PostExcerpt extends ContentObject {}

/**
 * Interface descrinbing a WordPress post
 */
interface Post {
  title: PostTitle;
  content: PostContent;
  excerpt: PostExcerpt;
  date: string;
  id: number;
  author: number;
  status: string;
}

export type PostInterface = Post;
