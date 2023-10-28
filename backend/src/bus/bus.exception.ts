import { CustomBadRequestException } from "src/common/exceptions/CustomBadRequestException";
import { CustomNotFoundException } from "src/common/exceptions/CustomNotFoundException";

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