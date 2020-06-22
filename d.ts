declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string,
    MONGODB_URL: string,
    AWS_ACCESS_KEY: string,
    AWS_SECRET_KEY: string
  }
}