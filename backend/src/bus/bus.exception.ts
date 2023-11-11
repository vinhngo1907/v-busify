import { CustomBadRequestException } from "src/common/exceptions/CustomBadRequestException";
import { CustomNotFoundException } from "src/common/exceptions/CustomNotFoundException";
import { CustomForbiddenException } from 'src/common/exceptions/CustomForbiddenException';
import { CustomUnknownException } from 'src/common/exceptions/CustomUnknownException';

export class BusNotFoundException extends CustomNotFoundException {
    constructor(busId: string) {
        super(busId, 'Bus');
    }
}

export class BusBadRequestException extends CustomBadRequestException {
    constructor(action: string) {
        super(action, 'Bus');
    }
}

export class BusUnknownException extends CustomUnknownException {
    constructor(action: string, additionalInfo: string) {
        super(action, 'Bus', additionalInfo);
    }
}

export class BusForbiddenException extends CustomForbiddenException {
    constructor(actorId: string, busId: string, action: string) {
        super(actorId, busId, action, 'Bus');
    }
}