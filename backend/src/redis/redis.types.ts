export interface RedisConfig {
    host: string;
    port: number;
    password: string;
    db: number;
    ex: number;
}

export interface GoogleConfig {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_SECRET: string;
}