import { Store } from "redux";

export {};

declare global {
  interface Window {
    __POSTS_STORE__?: Store;
  }
}
