/// <reference types="vite/client" />

// api keys
VITE_PUBLIC_KEY = "hey hello";

//title
VITE_APP_TITLE = "Moviedata Tracker";
// change in index.html

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PUBLIC_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
