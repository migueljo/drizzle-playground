declare module 'drizzle-kit' {
  export interface Config {
    schema: string;
    out: string;
    driver: 'pg';
    dbCredentials: {
      host: string;
      user: string;
      password: string;
      database: string;
      port: number;
    };
  }
}
