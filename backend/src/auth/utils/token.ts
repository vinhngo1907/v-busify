import { JwtService } from "@nestjs/jwt";

class TokenUtil {
    constructor(private readonly jwtService: JwtService) { }

    static toUnix(date: Date): number {
        return Math.floor(date.getTime() / 1000);
    }

    static expiredTimestamp(exp: number): boolean {
        return TokenUtil.toUnix(new Date()) > exp;
    }

    createToken(email: string, id: string) {
        const payload = { email, id };
        const token = this.jwtService.sign(payload, { expiresIn: '30d' });
        return { token };
    }
}

export default TokenUtil;
